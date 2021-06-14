import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "./FormikController";
import FormikButton from "./FormikButton";
import theme from "styles/theme";
import AuthService from "services/auth.service";
import { useHistory } from "react-router-dom";

function FormikLogin(...props) {
  const history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Wajib diisi"),
    password: Yup.string().required("Wajib diisi"),
  });

  const handeLogin = async (values, onSubmitProps) => {
    AuthService.login(values).then(() => {
      history.push("/beranda");
    });
    onSubmitProps.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handeLogin}
      validateOnMount={true}
    >
      {(formikProps) => {
        return (
          <Form {...props}>
            <FormikController
              style={{ marginBottom: theme.spacing(3) }}
              variant="outlined"
              fullWidth={true}
              control="textfield"
              type="text"
              label="Username IPB"
              name="username"
              formikProps={formikProps}
            />
            <FormikController
              style={{ marginBottom: theme.spacing(3) }}
              variant="outlined"
              fullWidth={true}
              control="textfield"
              type="password"
              label="Kata sandi"
              name="password"
              formikProps={formikProps}
            />
            <FormikButton
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              disabled={!formikProps.isValid}
              isSubmitting={formikProps.isSubmitting}
              isValid={formikProps.isValid}
            >
              Masuk
            </FormikButton>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikLogin;
