import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppForm from "../components/form/AppForm";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import CartButton from "../components/CartButton";
import colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  completeAdd: Yup.string().required().label("Complete Address"),
  landmark: Yup.string().label("Landmark"),
  city: Yup.string().required().label("City"),
  pincode: Yup.number().required().label("Pincode"),
  title: Yup.string().label("Title"),
});

export default function EditAddressScreen() {
  let initialValues = {
    completeAdd: "",
    landmark: "",
    city: "",
    pincode: "",
    title: "",
  };

  return (
    <>
      <View style={styles.container}>
        <AppText style={{ fontSize: 20, margin: 10 }}>Address Details</AppText>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value) => console.log(value)}
        >
          <View style={{ paddingHorizontal: 15 }}>
            <View style={styles.field}>
              <AppFormField
                name="completeAdd"
                placeholder="Complete Address"
                width="100%"
              />
            </View>
            <View style={styles.field}>
              <AppFormField
                name="landmark"
                placeholder="Landmark"
                width="100%"
              />
            </View>
            <View style={styles.row}>
              <AppFormField name="city" placeholder="City" width="45%" />
              <AppFormField
                name="pincode"
                placeholder="PinCode"
                width="45%"
                keyboardType="numeric"
              />
            </View>
            <AppFormField
              name="title"
              placeholder="Title this address"
              width="100%"
            />
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="Add"
              style={styles.button}
              titleStyle={{ color: "white" }}
            />
          </View>
        </AppForm>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  field: { marginBottom: 25 },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignSelf: "center",
    //   marginHorizontal: 15,
  },
  button: {
    padding: 25,
    borderWidth: 0,
    backgroundColor: colors.primary,
    borderRadius: 0,
  },
});
