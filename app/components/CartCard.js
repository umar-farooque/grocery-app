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
    availableQuantity,
  } = item;

  let [value, setValue] = useState(1);
  let [updatedPrice, setUpdatedPrice] = useState("");

  let handlePlus = () => {
    // setValue(++value);
    context.increaseCount(item);
  };

  let handleMinus = () => {
    if (count >= 1) {
      context.decreaseCount(item);
      return null;
    }
    context.decreaseCount(item);
    // setValue(--value);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={source}
              style={{ width: "100%", height: 100 }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ marginBottom: 15 }} lines={2}>
              {title}
            </AppText>
            <View style={{ marginBottom: 15, width: "100%" }}>
              <AppPicker
                placeholder={quantity}
                items={availableQuantity}
                title={title}
                price={(value, quantity) => {
                  context.updateQuantity(item, quantity, value);
                  setUpdatedPrice(value);
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
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10 },
  contentContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "30%",
    overflow: "hidden",
  },
  detailContainer: {
    flex: 1,
    marginLeft: 15,
  },
  buttonContainer: { marginLeft: 5, width: "40%" },
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
