import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import BaseTable from "components/display/BaseTable";
import TemplateNavigation from "components/layouts/TemplateNavigation";
import React from "react";
import theme from "styles/theme";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.optional.contrastText,
    marginBottom: theme.spacing(3),
  },
}));

function Order() {
  const classes = useStyles();

  const dataTable = [
    {
      title: "Surat Peminjaman Audit CCR",
      date: "Senin, 12 Maret 2021 - 12.06.36",
      status: "Belum ada tindakan",
    },
    {
      title: "Surat Peminjaman Audit Toyib",
      date: "Senin, 12 Maret 2021 - 12.06.36",
      status: "Ditolak",
    },
  ];

  return (
    <TemplateNavigation>
      <Box mb={3}>
        <Typography variant="h2">Dokumen Pengajuan</Typography>
      </Box>
      <Paper className={classes.card}>
        <Box padding={3}>
          <Typography variant="body2">
            Semua dokumen pengajuan yang telah anda unggah akan muncul pada
            halaman ini
          </Typography>
        </Box>
      </Paper>
      <Paper>
        <BaseTable
          title="Data Pengajuan"
          data={dataTable}
          columns={[
            {
              title: "Judul",
              field: "title",
            },
            {
              title: "Tanggal Upload",
              field: "date",
            },
            {
              title: "Status Pengajuan",
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
          ]}
          //   handleOpenDetail={}
          disableAdd
          disableUpdate
          disableExport
        />
      </Paper>
    </TemplateNavigation>
  );
}

export default Order;
