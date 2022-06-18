import React from "react";
import { useFormikContext } from "formik";
import CartButton from "../CartButton";
CartButton;

function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return <CartButton title={title} {...otherProps} onPress={handleSubmit} />;
}

export default SubmitButton;
