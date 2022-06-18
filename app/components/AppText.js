import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children, style, lines = null, onPress }) {
  return (
    <Text style={[styles.text, style]} numberOfLines={lines} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 17, fontFamily: "Quicksand_500Medium" },
});
