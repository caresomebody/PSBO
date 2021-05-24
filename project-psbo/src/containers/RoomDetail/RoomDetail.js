import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import TemplateNavigation from "components/layouts/TemplateNavigation";
import React from "react";
import Classroom from "assets/landscape.png";

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

function RoomDetail() {
  const classes = useStyles();
  return (
    <TemplateNavigation>
      <Box mb={3}>
        <Typography variant="h3">Detail Ruangan</Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h4">Audit CCR (Common Class Room)</Typography>
          <Divider className={classes.divider} />
          <CardMedia
            className={classes.media}
            image={Classroom}
            title="Ruangan"
          />
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box mb={2}>
                <Typography variant="body2">Deskripsi Ruangan</Typography>
                <Typography>
                  <p>
                    Audit CCR ( Common Class Room ) adalah ruang adalah salah
                    satu ruangan yang ada di IPB, dimana ruangan ini
                    diperuntukkan khususnya untuk mahasiswa PPKU untuk
                    berkuliah.
                  </p>
                </Typography>
              </Box>
              <Grid container>
                <Grid item xs={6}>
                  <Box mb={2}>
                    <Typography variant="body2">Kapasitas Ruangan</Typography>
                    <Typography variant="h5">500 Orang</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">Fasilitas Ruangan</Typography>
                    <Typography variant="h5">
                      <ul>
                        <li>Ac</li>
                        <li>Sound System</li>
                        <li>Microphone</li>
                        <li>Kursi</li>
                        <li>Kipas Angin</li>
                        <li>Proyektor</li>
                      </ul>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box mb={2}>
                    <Typography variant="body2">Ukuran Ruangan</Typography>
                    <Typography variant="h5">50 x 40 Meter</Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body2">Jam Operasional</Typography>
                    <Typography variant="h5">Senin - Jum'at</Typography>
                    <Typography variant="h5">07.00 - 16.00 WIB</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">Narahubung Ruangan</Typography>
                    <Typography variant="h5">
                      Bpk Hafidzan Adikoesoemo
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.card}>
                <Box padding={3}>
                  <Typography variant="body2">Jadwal Sudah Booking</Typography>
                  <Typography varoamt="h5">
                    <ul>
                      <li>
                        <p>HIMALKOM IPB</p>
                        <p>Senin, 12 Maret 2021</p>
                        <p>Pukul 10.00 - 14.00 WIB</p>
                      </li>
                      <li>
                        <p>Jelajah IPB 2021</p>
                        <p>Kamis, 14 Maret 2021</p>
                        <p>Pukul 11.00 - 14.00 WIB</p>
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </TemplateNavigation>
  );
}

export default RoomDetail;
