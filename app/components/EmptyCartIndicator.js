import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function EmptyCartIndicator() {
  //   if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView source={require("../assets/emptyCart.json")} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    // opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
