import React from "react";
import { Form, Formik } from "formik";
import FormikTextfield from "./formik-textfield";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormikAutoCompleteCountryPhone from "./forms-schema/formik-autocomplete-country-phone";
import FormikValuesViewer from "./formik-values-viewer";

const FormikBillingform = ({ initialValues, validationSchema }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        alert(`values : ${JSON.stringify(values, null, 2)}`);
        // await axios.post(url, values)
      }}
    >
      {(formikProps) => (
        <Form className={`${classes.rootInput}`}>
          <FormikTextfield
            classes={classes}
            id={"companyName"}
            label={"Company Name"}
            placeholder={"🙈"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"fullName"}
            label={"Full Name"}
            placeholder={"🥒"}
            formikProps={formikProps}
          />

          <FormikAutoCompleteCountryPhone
            id={"country"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"region"}
            label={"Region/State/Province"}
            placeholder={"🏝️"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"address"}
            label={"Address"}
            placeholder={"😀"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"city"}
            label={"City"}
            placeholder={"🙃"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"zipCode"}
            label={"Zip Code"}
            placeholder={"🙃"}
            formikProps={formikProps}
          />

          <FormikTextfield
            classes={classes}
            id={"vatId"}
            label={"VAT ID"}
            placeholder={"🙃"}
            formikProps={formikProps}
          />

          <section className={classes.full}>
            <Button
              size={"large"}
              className={classes.full}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </section>

          <FormikValuesViewer formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};
export default FormikBillingform;

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

  full: {
    width: "100%",
  },
  rootInput: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  errorColor: {
    color: "red",
  },
}));
