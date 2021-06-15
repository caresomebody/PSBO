import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import "date-fns";

import TemplateNavigation from "components/layouts/TemplateNavigation";
import React, { useState } from "react";
import FormikOrderForm from "components/formik/FormikOrderForm";
import BaseAlert from "components/lab/BaseAlert";

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

function OrderForm({ match }) {
  const classes = useStyles();

  const [alertStatus, setAlertStatus] = useState({
    severity: "info",
    message: "Isi form untuk pesan ruangan",
  });

  return (
    <TemplateNavigation>
      <Box mb={3}>
        <Typography variant="h2">Form Pengajuan</Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h4">Unggah Dokumen</Typography>
          <Divider className={classes.divider} />
          <Box>
            <BaseAlert status={alertStatus} />
          </Box>
          <FormikOrderForm
            id={match.params.id}
            setAlertStatus={setAlertStatus}
          />
        </CardContent>
      </Card>
    </TemplateNavigation>
  );
}

export default OrderForm;
