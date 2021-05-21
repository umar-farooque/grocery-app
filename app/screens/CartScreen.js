import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";

import { masala } from "../utils/Items";

import OfferCard from "../components/OfferCard";
import Seperator from "../components/Seperator";
import CartCard from "../components/CartCard";
import AppText from "../components/AppText";
import CartButton from "../components/CartButton";
import colors from "../utils/colors";
import ShoppingCartContext from "../context/ShoppingCart";

function CartScreen(props) {
  let context = useContext(ShoppingCartContext);
  let [amount, setAmount] = useState(0);

  let deliveryCharge = 40;
  let minimumAmount = 1000;

  let renderItem = (item) => <CartCard item={item.item} />;
  useEffect(() => {
    // console.log("_____++++++", amount);
    setAmount(context.getTotal());
  }, [context.getTotal()]);
  // console.log("++++++", );
  return (
    <>
      {context.items.length > 0 ? (
        <>
          {/* <></> */}
          <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View style={styles.cartItems}>
              <FlatList
                data={context.items}
                keyExtractor={(item, index) => item.toString() + index}
                renderItem={renderItem}
                ItemSeparatorComponent={Seperator}
              />
            </View>

            <View style={styles.ItemContainer}>
              <AppText style={{ fontWeight: "bold", marginBottom: 10 }}>
                Payment Details
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText>Mrp</AppText>
                <AppText>Rs. {amount}</AppText>
              </View>
              <Seperator style={{ marginVertical: 10 }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText>Delivery charge</AppText>
                <AppText>
                  {amount < minimumAmount ? deliveryCharge : "Free"}
                </AppText>
              </View>
              <Seperator style={{ marginVertical: 10 }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AppText style={{ fontWeight: "bold" }}>Total Amount</AppText>
                <AppText style={{ fontWeight: "bold" }}>
                  Rs.{" "}
                  {amount < minimumAmount ? amount + deliveryCharge : amount}
                </AppText>
              </View>
            </View>
          </ScrollView>

          <View style={styles.paymentContainer}>
            <View style={{ width: "35%", marginLeft: 5 }}>
              <AppText style={{}}>Payable Amount</AppText>
              <AppText style={{ fontWeight: "bold" }}>
                Rs. {amount < minimumAmount ? amount + deliveryCharge : amount}
              </AppText>
            </View>
            <View style={{ width: "50%" }}>
              <CartButton
                title="Checkout"
                style={styles.cartButton}
                titleStyle={{ color: "#fff", fontSize: 20 }}
              />
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText>Cart is Empty</AppText>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cartItems: {
    margin: 10,
    borderRadius: 25,
    backgroundColor: "white",
    overflow: "hidden",
    padding: 5,
  },
  ItemContainer: {
    marginHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "white",
    overflow: "hidden",
    padding: 15,
    // height: 150,
  },
  paymentContainer: {
    height: 70,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cartButton: {
    padding: 20,
    borderWidth: 0,
    backgroundColor: colors.primary,
  },
});

export default CartScreen;
// <OfferCard
//   title={item.item.title}
//   price={item.item.price}
//   quantity={item.item.quantity}
//   company={item.item.company}
//   availableQuantity={item.item.availableQuantity}
// />
