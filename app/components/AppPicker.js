import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon, Overlay } from "react-native-elements";

import AppText from "./AppText";
import Seperator from "./Seperator";

import colors from "../utils/colors";

export default function AppPicker({ placeholder, items, title, item, price }) {
  let [visible, setVisible] = useState(false);
  let [value, setValue] = useState("");
  // useEffect(() => console.log("App Picker"));
  // console.log("APP Picker rerendered", placeholder);
  let renderItem = (item) => (
    <TouchableOpacity
      onPress={() => {
        if (!item.addedToCart) {
          setValue(item.item.quantity);
          price(item.item.price, item.item.quantity);
          setVisible(false);
          return;
        }
        price(item.item.price, item.item.quantity);
        setVisible(false);
      }}
      style={styles.item}
    >
      <AppText> {item.item.quantity}</AppText>
      <View style={styles.priceContainer}>
        <Icon
          name="rupee"
          type="font-awesome"
          size={16}
          iconStyle={styles.iconStyle}
        />
        <AppText>{item.item.price}</AppText>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          <AppText style={styles.text}>
            {item && item.addedToCart
              ? placeholder
              : value
              ? value
              : placeholder}
          </AppText>
          <Icon
            name="md-chevron-down-circle-sharp"
            type="ionicon"
            color={colors.primary1}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>

      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <View style={styles.overlay}>
          <AppText lines={3} style={{ fontWeight: "bold" }}>
            More Quantities For {title}
          </AppText>
          <FlatList
            data={items}
            ItemSeparatorComponent={Seperator}
            keyExtractor={(item) => item.quantity}
            contentContainerStyle={{ marginTop: 15 }}
            renderItem={renderItem}
          />
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary1,
    paddingHorizontal: 6,
    paddingVertical: 3,
    width: "100%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    width: "100%",
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: { marginLeft: 5, fontSize: 15, color: colors.primary1 },
  overlay: { width: "80%", padding: 5, marginHorizontal: 5 },
  iconStyle: {
    marginTop: 2,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
