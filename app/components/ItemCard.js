import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Icon } from "react-native-elements";

import AppText from "./AppText";
import CartButton from "./CartButton";
import CartButtonGroup from "./CartButtonGroup";
import AppPicker from "./AppPicker";

import colors from "../utils/colors";
import ShoppingCartContext from "../context/ShoppingCart";
import { useNavigation } from "@react-navigation/core";

function ItemCard({ item }) {
  const {
    id,
    source,
    title,
    price,
    quantity,
    availableQuantity,
    count,
    company,
    addedToCart,
  } = item;
  const navigation = useNavigation();
  let [updatedPrice, setUpdatedPrice] = useState("");
  let [updatedQuantity, setUpdatedQuantity] = useState("");
  let [visible, setVisible] = useState(true);
  let context = useContext(ShoppingCartContext);

  let handlePlus = () => {
    context.increaseCount(item);
  };
  let handleMinus = () => {
    if (count == 1) {
      setVisible(true);
      context.decreaseCount(item);
      return;
    }
    context.decreaseCount(item);
  };

  // let newItem = {
  //   ...item,
  //   price: updatedPrice ? updatedPrice : price,
  //   quantity: updatedQuantity ? updatedQuantity : quantity,
  //   itemAdded:()=>
  // };
  let itemAdded = (item, updatedPrice, updatedQuantity) => {
    setVisible(false);
    context.addItems(item, updatedPrice, updatedQuantity);
    return;
  };

  // useEffect(() => {
  //   console.log("**Item CArd**", id, count, addedToCart);
  //   // React.Component.forceUpdate();
  // }, []);

  let handlePress = () =>
    navigation.navigate("detail", {
      data: item,
      updatedPrice,
      updatedQuantity,
      itemAdded,
    });

  // console.log("-------------->", count, addedToCart);
  // console.log(source);
  // console.log(visible);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={source.url ? { uri: source.url } : source}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.details}>
          <AppText style={styles.text} lines={1}>
            {title}
          </AppText>
          <View style={styles.priceStyle}>
            <View style={styles.priceContainer}>
              <Icon
                name="rupee"
                color={colors.primary}
                type="font-awesome"
                size={16}
                containerStyle={styles.iconContainer}
                iconStyle={styles.iconStyles}
              />
              <AppText style={{ marginLeft: 3, color: colors.primary }}>
                {updatedPrice ? updatedPrice : price}
              </AppText>
            </View>

            {availableQuantity && availableQuantity.length > 0 ? (
              <View style={{ width: "58%" }}>
                <AppPicker
                  title={title}
                  placeholder={quantity}
                  items={availableQuantity}
                  item={item}
                  price={(value, quantity) => {
                    if (item.addedToCart) {
                      context.updateQuantity(item, quantity, value);
                      setUpdatedPrice("");
                      setUpdatedQuantity("");
                      return;
                    }
                    // console.log("776544");
                    setUpdatedPrice(value);
                    setUpdatedQuantity(quantity);
                  }}
                />
              </View>
            ) : (
              <AppText style={{ color: colors.primary }}> {quantity}</AppText>
            )}
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          {visible || count == 0 ? (
            <CartButton
              onPress={() => {
                console.log("pressed");
                context.addItems(item, updatedPrice, updatedQuantity);

                setVisible(false);
                return;
                // console.log(visible, count == 0);
              }}
            />
          ) : (
            <CartButtonGroup
              onPressPlus={handlePlus}
              onPressMinus={handleMinus}
              value={count}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    height: 250,
    width: 175,
    borderRadius: 25,
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    // fontWeight: "700",
  },
  image: { width: "100%", height: 100 },
  details: {
    paddingHorizontal: 8,
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  priceStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyles: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemCard;
