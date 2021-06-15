import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import FormikAdminOrderForm from "components/formik/FormikAdminOrderForm";
import TemplateNavigationAdmin from "components/layouts/TemplateNavigationAdmin";
import DataProgress from "components/loading/DataProgress";
import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { useHistory } from "react-router";
import authService from "services/auth.service";
import userService from "services/user.service";
import changeDateFormat from "utils/helpers/dateFormat";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "380px",
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: `${theme.spacing(2)}px 0  ${theme.spacing(2)}px 0`,
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.optional.contrastText,
  },
}));
function OrderDetailAdmin({ match }) {
  const classes = useStyles();

  console.log("ini match", match);

  const history = useHistory();
  const currentUser = authService.getCurrentUser();

  const [isLoading, setisLoading] = useState(true);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    fetchOrderDetail();
  }, []);

  const [dataOrder, setDataOrder] = useState({});
  console.log("ini dataorder", dataOrder);

  const fetchOrderDetail = async () => {
    let fetchData = [];
    const id = match.params.id;
    userService
      .getOrderById(id)
      .then((response) => {
        const data = response.data.order;
        fetchData = {
          _id: data._id,
          userId: data.user?.id,
          userName: data.user?.nama,
          roomId: data.ruangan?._id,
          roomName: data.ruangan?.namaRuangan,
          dokumen: data.dokumen,
          deskripsiPengajuan: data.deskripsiPengajuan,
          tanggalMulai: data.tanggalMulai,
          tanggalSelesai: data.tanggalSelesai,
          waktuMulai: data.waktuMulai,
          waktuSelesai: data.waktuSelesai,
          namaAdmin: data.namaAdmin,
          tglUpload: changeDateFormat(data.tglUpload, "LLLL"),
          status: data.status,
          tanggapan: data.tanggapan ?? "Tidak ada tanggapan",
        };
        console.log("fetchData", fetchData);
        setDataOrder(fetchData);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setDataOrder(err);
      });
  };

  if (currentUser === undefined || currentUser.role !== 0) {
    history.replace("/");
    return null;
  }

  return (
    <TemplateNavigationAdmin>
      <Box mb={3}>
        <Typography variant="h2">Detail Pengajuan</Typography>
      </Box>
      {isLoading ? (
        <DataProgress />
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h4">{dataOrder.roomName}</Typography>
            <Divider className={classes.divider} />
            <Grid container>
              <Grid container>
                <Grid item xs={3}>
                  <Box mb={2}>
                    <Typography variant="h5">Tanggal Upload</Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="h5">Oleh</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">Deskripsi</Typography>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box mb={2}>
                    <Typography variant="body1">
                      {dataOrder.tglUpload}
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1">
                      {dataOrder.userName}
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1">
                      {dataOrder.deskripsiPengajuan}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Box>
              <Document
                file={"http://localhost:3000/SPJ KOMUNITAS HIMALKOM 2021.pdf"}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </Box>
            <Typography variant="h4">Beri Tanggapan</Typography>
            <Divider className={classes.divider} />

            <div>
              <TextField
                id="outlined-full-width"
                style={{ margin: 4 }}
                placeholder="Beri Tanggapan Disini..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Box display="inline" p={1} m={1}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#AC0000", color: "#ffffff" }}
                >
                  Menolak
                </Button>
              </Box>
              <Box display="inline" p={1} m={1}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#005108", color: "#ffffff" }}
                >
                  Menyetujui
                </Button>
              </Box>
            </div>

            <FormikAdminOrderForm />
          </CardContent>
        </Card>
      )}
    </TemplateNavigationAdmin>
  );
}
export default OrderDetailAdmin;
