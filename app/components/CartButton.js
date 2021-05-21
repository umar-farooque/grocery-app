import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../utils/colors";

function CartButton({ title = null, onPress, style, titleStyle }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText style={[styles.text, titleStyle]}>
        {title ? title : "Add"}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
    borderWidth: 0.7,
    borderColor: colors.primary,
    borderRadius: 10,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.primary,
    textTransform: "capitalize",
  },
});

export default CartButton;
