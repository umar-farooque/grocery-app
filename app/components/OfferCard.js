import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import AppPicker from "./AppPicker";
import AppText from "./AppText";
import CartButton from "./CartButton";
import CartButtonGroup from "./CartButtonGroup";

import { Icon } from "react-native-elements/dist/icons/Icon";
import colors from "../utils/colors";
import ShoppingCartContext from "../context/ShoppingCart";

export default function OfferCard({ item }) {
  // let [value, setValue] = useState(1);
  const navigation = useNavigation();
  let [visible, setVisible] = useState(true);
  let [updatedPrice, setUpdatedPrice] = useState("");
  let [updatedQuantity, setUpdatedQuantity] = useState("");
  let context = useContext(ShoppingCartContext);

  let {
    id,
    company,
    title,
    price,
    quantity,
    addedToCart,
    availableQuantity,
    count,
    source,
  } = item;
  // console.log(item);
  let handlePlus = () => {
    // setValue(++value);
    context.increaseCount(item);
  };

  let handleMinus = () => {
    if (count == 1) {
      setVisible(true);
      context.decreaseCount(item);
      return null;
    }
    context.decreaseCount(item);
  };

  let newItem = {
    id,
    source,
    title,
    availableQuantity,
    count,
    addedToCart,
    price: updatedPrice ? updatedPrice : price,
    quantity: updatedQuantity ? updatedQuantity : quantity,
  };
  let handlePress = () => navigation.navigate("detail", { data: newItem });
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={source}
              style={{ width: "100%", height: 150 }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ marginBottom: 5, color: "#999696" }}>
              {company}
            </AppText>
            <AppText style={{ marginBottom: 15 }} lines={2}>
              {title}
            </AppText>
            <View style={{ marginBottom: 15, width: "100%" }}>
              <AppPicker
                placeholder={quantity}
                items={availableQuantity}
                title={title}
                price={(value, quantity) => {
                  if (item.addedToCart) {
                    context.updateQuantity(item, quantity, value);
                    setUpdatedPrice("");
                    setUpdatedQuantity("");
                    return;
                  }
                  setUpdatedPrice(value);
                  setUpdatedQuantity(quantity);
                }}
              />
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
                  {updatedPrice ? updatedPrice : price}
                </AppText>
              </View>
              <View style={styles.buttonContainer}>
                {visible || item.count == 0 ? (
                  <CartButton
                    onPress={() => {
                      context.addItems(item);
                      setVisible(false);
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
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 15 },
  contentContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
    overflow: "hidden",
  },
  detailContainer: {
    flex: 1,
    marginLeft: 15,
  },
  buttonContainer: { marginLeft: 5, width: "50%" },
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
