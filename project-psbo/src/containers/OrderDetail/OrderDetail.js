import { Box, makeStyles, Typography, Card, CardContent, Divider, Grid } from "@material-ui/core";
import TemplateNavigation from "components/layouts/TemplateNavigation";
import React, {useState} from "react";
import theme from "styles/theme";
import BaseTable from "components/display/BaseTable";
import { pdfjs, Document, Page } from 'react-pdf';
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

function OrderDetail() {
    const classes = useStyles();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const dataTable = [
        {
          name: "Hafizhan Adikoesoemo",
          status: "Ditolak",
          responseStat: true,
          response: "Surat tidak menunjukkan tanggal penyewaan yang jelas"
        }
      ];

    return (
      <TemplateNavigation>
        <Box mb={3}>
          <Typography variant="h2">Detail Pengajuan</Typography>
        </Box>
        <Card>
          <CardContent>
            <Typography variant="h4">Surat Peminjaman Audit CCR </Typography>
            <Divider className={classes.divider} />
            <Grid container>
                <Grid container>
                    <Grid item xs={2}>
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
                    <Grid item xs={10}>
                        <Box mb={2}>
                            <Typography variant="body1">Senin, 12 Maret 2021  12.06.36</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1">Himalkom IPB</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1">Assalamualaikum Wr Wb dengan ini kami lampirkan surat peminjaman audit CCR </Typography>
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
            <p>Page {pageNumber} of {numPages}</p>
            </Box>
            <Typography variant="h4">Tujuan Pengajuan</Typography>
            <Divider className={classes.divider} />
            <BaseTable
          data={dataTable}
          columns={[
            {
              title: "Nama",
              field: "name",
            },
            {
              title: "Status",
              field: "status",
              render: (rowData) =>
              rowData.status === "Belum ada tindakan" ? (
                <Box
                  bgcolor="#606060"
                  borderRadius="4px"
                  color={theme.palette.optional.contrastText}
                  padding={1}
                  textAlign="center"
                >
                  <Typography variant="h5">{rowData.status}</Typography>
                </Box>
              ) : rowData.status === "Ditolak" ? (
                <Box
                  bgcolor="#AC0000"
                  borderRadius="4px"
                  color={theme.palette.optional.contrastText}
                  padding={1}
                  textAlign="center"
                >
                  <Typography variant="h5">{rowData.status}</Typography>
                </Box>
              ) : (
                ""
              ),
            },
            {
              title: "Tanggapan",
              field: "responseStat",
              render: (rowData) =>
              rowData.responseStat === true ? (
              <Box>
                  <Typography variant="h5">{rowData.response}</Typography>
              </Box>
              ) : rowData.responseStat === false ? (
              <Box>
                    <Typography variant="h5">{rowData.response}</Typography>
              </Box>
              ) : (
                ""
              ),
            },
          ]}
          disableAdd
          disableUpdate
          disableExport
          disableDelete
          disableDetail
          disableActions
        />
          </CardContent>
        </Card>
      </TemplateNavigation>
    );
}

export default OrderDetail;