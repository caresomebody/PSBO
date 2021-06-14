import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Box,
  Button,
  Grid,
  Hidden,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Building from "assets/building.svg";
import { withRouter } from "react-router";
import FormikLogin from "components/formik/FormikLogin";

function Login(props) {
  const { history } = props;
  return (
    <div>
      <Box bgcolor="F0F0F0" minHeight="100vh">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">Simaru</Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Hidden only={["xs", "sm"]}>
            <Grid item xs={12} sm={12} md={6}>
              <Box textAlign="center" p={20}>
                <img src={Building} alt="building" width="375" />
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={12} md={6}>
            <Box maxWidth={416} mx="auto" marginTop={20}>
              <Box p={2} align="center">
                <Typography variant="h2">IPB Account</Typography>
                <Typography variant="h3">
                  Masuk untuk melihat daftar ruangan
                </Typography>
              </Box>
              <Box marginY={3} marginX={3} align="center">
                {/* Alert Here */}
                <Box></Box>
              </Box>
              <Box p={2} mt={2}>
                <FormikLogin />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default withRouter(Login);
