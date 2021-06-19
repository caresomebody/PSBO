import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TemmplateNavigation from "components/layouts/TemplateNavigation";
import React, { useEffect } from "react";
import Classroom from "assets/audit.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "services/auth.service";
import { useHistory } from "react-router-dom";
import UserService from "services/user.service";
import DataProgress from "components/loading/DataProgress";
import SearchBar from "components/searchbar/SearchBar";
import theme from "styles/theme";

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
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
  const currentUser = AuthService.getCurrentUser();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [value, onChange] = useState(new Date());

  const [input, setInput] = useState("");
  const [dataRoomsDefault, setDataRoomsDefault] = useState();
  const [dataRooms, setDataRooms] = useState();

  const fetchRooms = async () => {
    UserService.getRooms()
      .then((response) => {
        setDataRooms(response.data);
        setDataRoomsDefault(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setDataRooms(err);
      });
  };

  const updateInput = async (input) => {
    const filtered = dataRoomsDefault.filter((data) => {
      return data.namaRuangan.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setDataRooms(filtered);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  if (currentUser === undefined || currentUser.role !== 1) {
    history.replace("/");
    return null;
  }

  return (
    <TemmplateNavigation>
      <Box mb={3}>
        <Typography variant="h2">Beranda</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box mb={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h4">
                  Selamat datang, Peminjaman Ruangan
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginTop: theme.spacing(1) }}
                >
                  Silahkan cari nama ruangan yang ingin anda ajukan peminjaman!
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box mb={3}>
            {/* Search Component */}
            <Paper component="form" className={classes.root}>
              <SearchBar
                className={classes.input}
                input={input}
                onChange={updateInput}
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
            {isLoading ? (
              <DataProgress />
            ) : (
              <Grid container spacing={3}>
                {dataRooms.map((data) => (
                  <Grid key={data._id} item xs={12} sm={6} md={4}>
                    <Card>
                      <Link
                        to={`/detail-ruangan/${data._id}`}
                        style={{ textDecoration: "none", color: "#000000" }}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={data.photo}
                            title={data.namaRuangan}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {data.namaRuangan}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
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
                {calendarDummy.map((data, index) => (
                  <Box key={index} display="flex" my={2}>
                    <Avatar src={data.media} className={classes.avatar} />
                    <Box>
                      <Typography variant="h5">{data.title}</Typography>
                      <Typography variant="body1">{data.time}</Typography>
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
