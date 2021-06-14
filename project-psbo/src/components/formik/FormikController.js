import React from "react";
import FormikTextField from "./FormikTextField";

const FormikController = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "textfield":
      return <FormikTextField {...rest} />;

    default:
      return null;
  }
};

export default FormikController;
