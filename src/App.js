import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormikBillingform from "./components/formik-billingform";
import Container from "@material-ui/core/Container";
import { initialValues } from "./components/forms-schema/formik-initialvalues";
import { schema } from "./components/forms-schema/formik-yupvalidation";
import FormDivider from "./components/forms-schema/form-divider";
import CustomHeaderBar from "./components/forms-schema/CustomHeaderBar";
import TitlePage from "./components/forms-schema/title-page";

function App() {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div>
      <div className={classes.root}>
        <CustomHeaderBar classes={classes} />
      </div>

      <Container>
        <TitlePage
          title={"Billing Information"}
          description={
            "The following information will be displayed on your invoices"
          }
        />
        <FormDivider />
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
