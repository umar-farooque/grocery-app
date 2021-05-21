import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppButton({
  title,
  onPress,
  width = "80%",
  textColor = "black",
  backgroundColor = "yellow",
  size,
}) {
  return (
    <TouchableOpacity
      style={[styles.myButton, backgroundColor]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { fontSize: size, color: textColor }]}
        onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  myButton: {
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "yellow",

    width: "100%",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  // #006ee6
  text: {
    fontSize: 20,
    color: "black",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
