import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { View } from "react-native";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldValue, values, setFieldTouched, touched, errors } =
    useFormikContext();
  return (
    <View style={{ width: width }}>
      <View
        style={{
          borderBottomWidth: 1,
          // backgroundColor: "yellow",
          height: 30,
        }}
      >
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          width={width}
          {...otherProps}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormField;
