import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";
import CartButton from "./CartButton";

export default function Card({ source, style, text }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "30%" }}>
          <Image
            source={require("../assets/images/aata.jpg")}
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <AppText style={styles.text}> Rs 250 </AppText>
            <AppText style={styles.canceledPrice}> Rs 550 </AppText>
          </View>
          <AppText style={styles.text}>Shudh Sharbati Aata </AppText>
          <AppText style={styles.text}> 5 Kg </AppText>
          <View style={styles.button}>
            <CartButton />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 0.4,
    // borderBottomWidth: 1,
    overflow: "hidden",
    borderColor: "green",
  },
  text: {
    marginBottom: 2,
    fontWeight: "bold",
  },
  canceledPrice: {
    color: "grey",
    textDecorationLine: "line-through",
  },
  button: {
    marginVertical: 5,
    // position: "absolute",
    width: "70%",
    // top: "70%",
    // left: "70%",
  },
});
