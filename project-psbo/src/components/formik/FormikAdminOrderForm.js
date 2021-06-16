import { Box } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import FormikButton from "./FormikButton";
import FormikController from "./FormikController";
import * as Yup from "yup";
import userService from "services/user.service";

function FormikAdminOrderForm(props) {
  const { setAlertStatus, setOpen, id } = props;
  console.log("ini id", id);
  const initialValues = {
    tanggapan: "",
    status: null,
  };

  const validationSchema = Yup.object({
    tanggapan: Yup.string().required("Wajib diisi"),
  });

  const handleAddData = async (values, onSubmitProps) => {
    console.log("ini values", values);
    userService
      .putOrder(values, id)
      .then((response) => {
        setOpen(true);
        setAlertStatus({
          severity: "success",
          message: "Pengajuan berhasil ditanggapi",
        });
        console.log(response);
      })
      .catch((err) => {
        setOpen(true);
        setAlertStatus({
          severity: "error",
          message: "Pengajuan gagal ditanggapi",
        });
        console.log(err.response);
      });
    onSubmitProps.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleAddData}
      validateOnMount={true}
    >
      {(formikProps) => {
        return (
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
            <Box display="flex" justifyContent="flex-end" py={2}>
              <Box mr={2}>
                <FormikButton
                  variant="contained"
                  style={{ backgroundColor: "#AC0000", color: "#ffffff" }}
                  onClick={() => {
                    formikProps.setFieldValue("status", 0);
                  }}
                  type="submit"
                  isSubmitting={formikProps.isSubmitting}
                  isValid={formikProps.isValid}
                >
                  Menolak
                </FormikButton>
              </Box>
              <Box>
                <FormikButton
                  variant="contained"
                  style={{ backgroundColor: "#005108", color: "#ffffff" }}
                  onClick={() => {
                    formikProps.setFieldValue("status", 2);
                  }}
                  type="submit"
                  isSubmitting={formikProps.isSubmitting}
                  isValid={formikProps.isValid}
                >
                  Menyetujui
                </FormikButton>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikAdminOrderForm;
