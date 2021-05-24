import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TemmplateNavigation from "components/layouts/TemplateNavigation";
import React from "react";
import Classroom from "assets/audit.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const roomDummy = [
  {
    title: "Auditorium 1",
    media: Classroom,
  },
  {
    title: "Auditorium 2",
    media: Classroom,
  },
  {
    title: "Auditorium 3",
    media: Classroom,
  },
  {
    title: "Auditorium 4",
    media: Classroom,
  },
  {
    title: "Auditorium 5",
    media: Classroom,
  },
  {
    title: "Auditorium 6",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
  {
    title: "Auditorium 7",
    media: Classroom,
  },
];

const calendarDummy = [
  {
    title: "Auditorium Toyib Hadiwijaya",
    time: "Pukul 10.00 - 14.00 WIB",
    media: Classroom,
  },
  {
    title: "Auditorium Toyib Hadiwijaya",
    time: "Pukul 10.00 - 14.00 WIB",
    media: Classroom,
  },
  {
    title: "Auditorium Toyib Hadiwijaya",
    time: "Pukul 10.00 - 14.00 WIB",
    media: Classroom,
  },
  {
    title: "Auditorium Toyib Hadiwijaya",
    time: "Pukul 10.00 - 14.00 WIB",
    media: Classroom,
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.optional.contrastText,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  media: {
    height: 200,
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <TemmplateNavigation>
      <Box mb={3}>
        <Typography variant="h3">Beranda</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box mb={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h4">
                  Selamat datang, Peminjaman Ruangan
                </Typography>
                <Typography>
                  Silahkan cari nama ruangan yang ingin anda ajukan peminjaman!
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box mb={3}>
            {/* Search Component */}
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Cari Ruangan Disini..."
                inputProps={{ "aria-label": "cari ruangan disini" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            {/* End */}
          </Box>

          <Box mb={2}>
            <Typography variant="h4">Data Ruangan</Typography>
          </Box>
          <Box mb={3}>
            {/*  */}
            <Grid container spacing={3}>
              {roomDummy.map((data) => (
                <Grid item xs={4}>
                  <Card>
                    <Link to="/detail-ruangan">
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={data.media}
                          title={data.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {data.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/*  */}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box mb={2}>
                <Typography variant="h4">Data Peminjaman</Typography>
              </Box>
              <Box mb={3}>
                <Calendar onChange={onChange} value={value} />
              </Box>
              <Box>
                {calendarDummy.map((data) => (
                  <Box display="flex" my={2}>
                    <Avatar src={data.media} className={classes.avatar} />
                    <Box>
                      <Typography variant="h5">{data.title}</Typography>
                      <Typography variant="body">{data.time}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </TemmplateNavigation>
  );
}

export default Home;
