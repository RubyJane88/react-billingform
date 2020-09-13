import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormikBillingform from "./components/formik-billingform";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { initialValues } from "./components/forms-schema/formik-initialvalues";
import { schema } from "./components/forms-schema/formik-yupvalidation";

function App() {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            />
            <Typography variant="h6" className={classes.title}>
              Dashboard
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Container>
        <h1> Billing Information</h1>
        <p> The following information will be displayed on your invoices</p>
        <FormikBillingform
          initialValues={initialValues}
          validationSchema={schema}
        />
      </Container>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  rootInput: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
