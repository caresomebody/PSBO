import { Box, makeStyles, Typography, Card, CardContent, Divider, Grid, TextField, Button } from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TemplateNavigation from "components/layouts/TemplateNavigation";
import React from "react";
import {Link} from "react-router-dom";


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

function OrderForm() {
    const [selectedDateStart, setSelectedDateStart] = React.useState(new Date('2021-06-11T21:11:54'));
    const [selectedDateFinish, setSelectedDateFinish] = React.useState(new Date('2021-06-11T21:11:54'));
    const [selectedTimeStart, setSelectedTimeStart] = React.useState(new Date('2021-06-11T21:11:54'));
    const [selectedTimeFinish, setSelectedTimeFinish] = React.useState(new Date('2021-06-11T21:11:54'));
    const handleStartDateChange = (date) => {setSelectedDateStart(date);};
    const handleFinishDateChange = (date) => {setSelectedDateFinish(date);};
    const handleStartTimeChange = (time) => {setSelectedTimeStart(time);};
    const handleFinishTimeChange = (time) => {setSelectedTimeFinish(time);};
    
    const classes = useStyles();

    const staffNames = [
        {name: 'Hafidzan Adikoesoemo'},
        {name: 'Ali Snowman'},
        {name: 'Marcha Snow White'}
    ]

    const defaultProps = {
        options: staffNames,
        getOptionLabel: (option) => option.name,
    };
    
    return (
      <TemplateNavigation>
        <Box mb={3}>
          <Typography variant="h2">Form Pengajuan</Typography>
        </Box>
        <Card>
          <CardContent>
            <Typography variant="h4">Unggah Dokumen</Typography>
            <Divider className={classes.divider} />
            <Grid container>
                <Grid item xs={3}>
                    <Box mb={2}>
                        <Typography variant="h5">Dokumen (PDF) </Typography>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="h5">Nama Dokumen</Typography>
                    </Box>
                    <Box mb={1}>
                        <Typography variant="h5">Deskripsi Peminjaman</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={3}>
                            <TextField
                            required
                            id="outlined-required"
                            label=""
                            placeholder="Berikan deskripsi surat disini..."
                            variant="outlined"
                            fullWidth="true"
                            />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">Tanggal Peminjaman</Typography>
                    <Grid container direction={'row'}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={3}>
                        <KeyboardDatePicker
                        required
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Tanggal Mulai"
                        value={selectedDateStart}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid spacing={5}>
                    <KeyboardDatePicker
                        required
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Tanggal Selesai"
                        value={selectedDateFinish}
                        onChange={handleFinishDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box mb={4}>
                    <Grid container direction={'row'}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={3}>
                        <KeyboardTimePicker
                        required
                        margin="normal"
                        id="time-picker"
                        label="Waktu Mulai"
                        value={selectedTimeStart}
                        onChange={handleStartTimeChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        />
                    </Grid>
                    <Grid spacing={5}>
                        <KeyboardTimePicker
                        required
                        margin="normal"
                        id="time-picker"
                        label="Waktu Selesai"
                        value={selectedTimeFinish}
                        onChange={handleFinishTimeChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={6}>
            <Box mb={2}>
            <Typography variant="h4">Ajukan Kepada</Typography>
            <Divider className={classes.divider} />
            <Autocomplete
            required
            {...defaultProps}
            id="staffNamesColumn"
            renderInput={(params) => <TextField {...params} placeholder='Cari nama pegawai disini...' variant="outlined" fullWidth="true" />}
            />
            </Box>
            </Grid>
            <Grid container alignItems="center" justify="center">
            <Link to ="/pengajuan">
                <Button variant="contained" color="secondary">
                    Ajukan
                </Button>
            </Link>
            </Grid>
          </CardContent>
        </Card>
      </TemplateNavigation>
    );
}

export default OrderForm;