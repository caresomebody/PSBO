import { Box } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import FormikButton from "./FormikButton";
import FormikController from "./FormikController";

function FormikAdminOrderForm() {
  //initialvalues
  //validation
  return (
    <Formik>
      {(formikProps) => {
        <Form>
          <FormikController
            variant="outlined"
            fullWidth={true}
            control="textfield"
            type="text"
            label="Beri Tanggapan Disini..."
            name="tanggapan"
            formikProps={formikProps}
          />
          <div style={{ width: "100%", textAlign: "center" }}>
            <Box display="inline" p={1} m={1}>
              <FormikButton
                variant="contained"
                style={{ backgroundColor: "#AC0000", color: "#ffffff" }}
              >
                Menolak
              </FormikButton>
            </Box>
            <Box display="inline" p={1} m={1}>
              <FormikButton
                variant="contained"
                style={{ backgroundColor: "#005108", color: "#ffffff" }}
              >
                Menyetujui
              </FormikButton>
            </Box>
          </div>
        </Form>;
      }}
    </Formik>
  );
}

export default FormikAdminOrderForm;
