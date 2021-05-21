import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import colors from "../utils/colors";
import AppText from "./AppText";

export default function CartButtonGroup({ value, onPressPlus, onPressMinus }) {
  // useEffect(() => console.log("CartButtonGroup"));
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.minusContainer} onPress={onPressMinus}>
        <Icon type="feather" name="minus" size={20} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <AppText style={{ color: "white" }}>{value}</AppText>
      </View>
      <TouchableOpacity style={styles.plusContainer} onPress={onPressPlus}>
        <Icon type="feather" name="plus" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 32,
    width: "100%",
    borderWidth: 1,
    borderColor: "transparent",
  },
  textContainer: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  plusContainer: {
    borderWidth: 1,
    width: "35%",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  minusContainer: {
    borderWidth: 1,
    width: "35%",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
  },
});
