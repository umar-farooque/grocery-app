import React from "react";
import { View, StyleSheet } from "react-native";

export default function Seperator({ style }) {
  return <View style={[styles.seperator, style]} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    backgroundColor: "#EAEEEE",
    height: 1,
  },
});
