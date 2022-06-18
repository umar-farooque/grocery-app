import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AppText from "./AppText";
import { Icon } from "react-native-elements/dist/icons/Icon";
import colors from "../utils/colors";
import CartButtonGroup from "./CartButtonGroup";
import AppPicker from "./AppPicker";
import ShoppingCartContext from "../context/ShoppingCart";

export default function CartCard({ item }) {
  let context = useContext(ShoppingCartContext);
  let {
    units,
    count,
    price,
    title,
    source,
    quantity,
    company,
    addedToCart,
    availableQuantity,
  } = item;

  // console.log("item--------->", item);
  let [value, setValue] = useState(1);
  let [updatedPrice, setUpdatedPrice] = useState("");

  let handlePlus = () => {
    // setValue(++value);
    context.increaseCount(item);
  };

  let handleMinus = () => {
    if (count == 1) {
      context.decreaseCount(item);
      return null;
    }
    context.decreaseCount(item);
    // setValue(--value);
  };

  return (
    <>
      <View>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={source.url ? { uri: source.url } : source}
                style={{ width: "100%", height: 100 }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailContainer}>
              <AppText style={{ marginBottom: 15 }} lines={2}>
                {title}
              </AppText>
              <View style={{ marginBottom: 15, width: "100%" }}>
                {availableQuantity && availableQuantity.length > 0 ? (
                  <AppPicker
                    placeholder={quantity}
                    items={availableQuantity}
                    title={title}
                    price={(value, quantity) => {
                      if (addedToCart) {
                        context.updateQuantity(item, quantity, value);
                        return;
                      }
                      setUpdatedPrice(value);
                    }}
                  />
                ) : (
                  <AppText style={{ color: colors.primary }}>
                    {quantity}
                  </AppText>
                )}
              </View>
              <View style={styles.priceContainer}>
                <View style={styles.priceIcon}>
                  <Icon
                    name="rupee"
                    color={colors.primary}
                    type="font-awesome"
                    size={16}
                    containerStyle={styles.iconContainer}
                    iconStyle={styles.iconStyles}
                  />
                  <AppText style={styles.price}>
                    {updatedPrice ? updatedPrice * count : price * count}
                  </AppText>
                  {/* <AppText style={{ marginLeft: 15 }}>{quantity}</AppText> */}
                </View>
                <View style={styles.buttonContainer}>
                  <CartButtonGroup
                    onPressPlus={handlePlus}
                    onPressMinus={handleMinus}
                    value={count}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cancelIcon}>
        <Icon
          name="cross"
          type="entypo"
          size={20}
          color="white"
          onPress={() => context.deleteItem(item)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    overflow: "visible",
    padding: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "35%",
    overflow: "hidden",
  },
  cancelIcon: {
    position: "absolute",
    backgroundColor: "red",
    top: 5,
    left: 5,
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    // zIndex: 999,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 15,
    // paddingHorizontal: 10,
    // // backgroundColor: "blue",
    // paddingVertical: 5,
  },
  buttonContainer: {
    marginLeft: 5,
    width: "40%",
    borderWidth: 1,
    borderColor: "transparent",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyles: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceIcon: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    marginLeft: 1,
    color: colors.primary,
    fontWeight: "bold",
  },
});
