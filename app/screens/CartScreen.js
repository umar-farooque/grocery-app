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
import { Icon } from "react-native-elements";
import EmptyCartIndicator from "../components/EmptyCartIndicator";
import cacheStore from "../utils/cartItem";

function CartScreen({ navigation }) {
  let context = useContext(ShoppingCartContext);
  let [amount, setAmount] = useState(0);
  let [items, setItems] = useState({ data: [], amount: 0 });

  let deliveryCharge = 40;
  let minimumAmount = 1000;

  let renderItem = (item) => {
    return (
      <View stype={{ marginVertical: 2 }}>
        <CartCard item={item.item} />
      </View>
    );
  };
  let sum = 0;
  async function getList() {
    const data = await cacheStore.getItems();
    if (data === null) return false;
    // setItems(data)
    data.forEach((data) => (sum += parseInt(data.value.price)));
    setItems({ data, amount: sum });

    // console.log(data);
    // data.forEach((item) => {
    //   console.log(item);
    // });
  }
  useEffect(() => {
    if (context.items.length) {
      return setAmount(context.getTotal());
    }
    // console.log("_____++++++", amount);
    // console.log("sum cart items :", sum);
    // getList();
    // cacheStore.getSum();

    // cacheStore.get().then((data) => console.log(JSON.parse(data)));
  }, [context.getTotal()]);
  // console.log("++++++", );
  const Total = amount < minimumAmount ? amount + deliveryCharge : amount;
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
              <AppText
                style={{
                  fontFamily: "Quicksand_600SemiBold",
                  marginBottom: 10,
                }}
              >
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
                <AppText style={{ fontFamily: "Quicksand_600SemiBold" }}>
                  Total Amount
                </AppText>
                <AppText style={{ fontFamily: "Quicksand_600SemiBold" }}>
                  Rs.
                  {Total}
                </AppText>
              </View>
            </View>
          </ScrollView>

          <View style={styles.paymentContainer}>
            <View style={{ width: "37%", marginLeft: 5 }}>
              <AppText style={{}}>Total Amount</AppText>
              <AppText
                style={{ fontFamily: "Quicksand_600SemiBold", marginTop: 5 }}
              >
                Rs. {Total}
              </AppText>
            </View>
            <View style={{ width: "50%" }}>
              <CartButton
                title="Checkout"
                style={styles.cartButton}
                titleStyle={{ color: "#fff", fontSize: 20 }}
                onPress={() =>
                  navigation.navigate("checkout", { amount: Total })
                }
              />
            </View>
          </View>
        </>
      ) : (
        <EmptyCartIndicator />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cartItems: {
    margin: 10,
    borderRadius: 25,
    // backgroundColor: "white",
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
    // height: 90,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 0.5,
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
