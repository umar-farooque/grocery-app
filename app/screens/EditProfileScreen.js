import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppForm from "../components/form/AppForm";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label("First Name"),
  lname: Yup.string().required().label("Last Name"),
  mobile: Yup.string().required().label("Mobile"),
  email: Yup.string().required().label("Email"),
});

export default function EditProfileScreen({ route, navigation }) {
  let { fname, lname, mobile, email } = route.params.data;

  return (
    <>
      <View style={styles.container}>
        <AppForm
          initialValues={{ fname, lname, mobile, email }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("profile");
          }}
          validationSchema={validationSchema}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.row}>
              <AppFormField name="fname" placeholder="First Name" width="45%" />

              <AppFormField name="lname" placeholder="Last Name" width="45%" />
            </View>
            <View style={{ marginBottom: 10 }}>
              <AppFormField
                name="mobile"
                placeholder="Mobile"
                width="100%"
                keyboardType="numeric"
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <AppFormField
                name="email"
                placeholder="Email"
                width="100%"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="Update"
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
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
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
