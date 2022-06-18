import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

export default function AppTextInput({ width = "100%", ...otherProps }) {
  // console.log(otherProps);
  return (
    <TextInput
      {...otherProps}
      placeholderTextColor="grey"
      style={{
        height: 40,
        fontSize: 18,
        width: "100%",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    // backgroundColor: "yellow",
    // borderRadius: 25,
    // flexDirection: "row",
    // padding: 5,
    // borderBottomWidth: 1,
    // justifyContent: "center",
    // alignItems: "flex-end",
    // marginVertical: 10,
  },
});
