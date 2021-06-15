import { Box, Grid, makeStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import UserService from "services/user.service";
import * as Yup from "yup";
import FormikButton from "./FormikButton";
import FormikController from "./FormikController";

const useStyles = makeStyles(({ spacing, palette }) => ({
  buttonWrapper: {
    margin: `${spacing(3)}px 0px`,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    margin: `${spacing(3)}px 12px`,
  },
  previewChip: {
    minWidth: 160,
    maxWidth: 210,
  },
  smDropzone: {
    minHeight: 10,
  },
  icon: {
    display: "none",
  },
}));

function FormikOrderForm(props) {
  const { id, setAlertStatus } = props;
  const classes = useStyles();

  console.log("in id", id.id);

  const ruanganID = id.id;

  const initialValues = {
    dokumen: "",
    deskripsiPengajuan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    waktuMulai: "",
    waktuSelesai: "",
    namaAdmin: "",
  };

  const validationSchema = Yup.object({
    dokumen: Yup.string().required("Wajib diisi"),
    deskripsiPengajuan: Yup.string().required("Wajib diisi"),
    tanggalMulai: Yup.date().nullable().required("Wajib diisi"),
    tanggalSelesai: Yup.date().nullable().required("Wajib diisi"),
    waktuMulai: Yup.date().nullable().required("Wajib diisi"),
    waktuSelesai: Yup.date().nullable().required("Wajib diisi"),
    namaAdmin: Yup.string().required("Wajib diisi"),
  });

  const dataAdmin = [
    {
      _id: "123",
      name: "Sukijan",
    },
    {
      _id: "124",
      name: "Sukijan1",
    },
    {
      _id: "125",
      name: "Sukijan2",
    },
  ];

  const dataInputs = [
    {
      control: "textfield",
      type: "text",
      label: "Dokumen",
      name: "dokumen",
    },
    {
      control: "textfield",
      type: "text",
      label: "Deskripsi Pengajuan",
      name: "deskripsiPengajuan",
    },
    {
      control: "date",
      type: "text",
      label: "Tanggal Mulai",
      name: "tanggalMulai",
    },
    {
      control: "date",
      type: "text",
      label: "Tanggal Selesai",
      name: "tanggalSelesai",
    },
    {
      control: "time",
      type: "text",
      label: "Waktu Mulai",
      name: "waktuMulai",
    },
    {
      control: "time",
      type: "text",
      label: "Waktu Selesai",
      name: "waktuSelesai",
    },
    {
      control: "autocompleteId",
      type: "text",
      label: "Cari nama pegawai disini...",
      name: "namaAdmin",
      data: dataAdmin,
    },
  ];

  const handleAddData = async (values, onSubmitProps) => {
    const newValues = { ruanganID, ...values };
    UserService.postOrder(newValues)
      .then((response) => {
        console.log(response.data);
        setAlertStatus({
          severity: "success",
          message: "Ruangan berhasil dipesan",
        });
      })
      .catch((error) => {
        console.log(error.response);
        setAlertStatus({
          severity: "error",
          message: "Ruangan gagal dipesan",
        });
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
            <Grid container spacing={3} style={{ marginTop: 24 }}>
              {dataInputs.map(({ control, type, label, name, data }) => (
                <Grid item key={name} xs={12} sm={6} md={6} lg={6}>
                  <FormikController
                    // Notes : Tambahkan props listData jika input tersebut autocomplete
                    listData={data}
                    variant="outlined"
                    fullWidth={true}
                    control={control}
                    type={type}
                    label={label}
                    name={name}
                    formikProps={formikProps}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Button */}
            <Box className={classes.buttonWrapper}>
              <FormikButton
                className={classes.button}
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                isSubmitting={formikProps.isSubmitting}
                isValid={formikProps.isValid}
              >
                Kirim
              </FormikButton>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikOrderForm;
