import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import AppText from "../components/AppText";

export default function AddressCard({
  state = false,
  onPress,
  name,
  title,
  address,
  mobile,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={true}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={state}
            onPress={onPress}
          />
        </View>
        <View style={{ width: "85%" }}>
          <View style={styles.topSection}>
            <AppText style={{ marginBottom: 5, fontWeight: "bold" }}>
              Default Address : {title}
            </AppText>

            <Icon
              name="pencil"
              type="material-community"
              size={25}
              onPress={() => console.log("Pencil Pressed")}
            />
          </View>
          <AppText style={{ marginBottom: 5 }}>Name : {name}</AppText>
          <AppText style={{ marginBottom: 5 }}>{address}</AppText>
          <AppText>Mobile No:. {mobile}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
  },
  checkboxContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
