import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import AppText from "./AppText";
import CartButton from "./CartButton";

export default function DefaultAddressCard({ phone, name, address, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.details}>
          <AppText style={{ marginBottom: 5, fontWeight: "bold" }}>
            Deliver to : Home
          </AppText>
          <View style={{ width: "25%" }}>
            <CartButton title="change" onPress={onPress} />
          </View>
        </View>
        <AppText style={{ marginBottom: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
          adipiscing elit Lorem ipsum dolor sit amet, consectetur
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
