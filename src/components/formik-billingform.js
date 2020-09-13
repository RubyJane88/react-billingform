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
          <div className={classes.divStyle}>
            <div>Company Name</div>
            <FormikTextfield
              classes={classes}
              id={"companyName"}
              label={"Company Name"}
              placeholder={"🙈"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Full Name</div>
            <FormikTextfield
              classes={classes}
              id={"fullName"}
              label={"Full Name"}
              placeholder={"🥒"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Country</div>
            <FormikAutoCompleteCountryPhone
              id={"country"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Region / State / Province</div>
            <FormikTextfield
              classes={classes}
              id={"region"}
              label={"Region/State/Province"}
              placeholder={"🏝️"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Address</div>

            <FormikTextfield
              classes={classes}
              id={"address"}
              label={"Address"}
              placeholder={"😀"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> City</div>
            <FormikTextfield
              classes={classes}
              id={"city"}
              label={"City"}
              placeholder={"🙃"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Zip Code</div>
            <FormikTextfield
              classes={classes}
              id={"zipCode"}
              label={"Zip Code"}
              placeholder={"🙃"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> VAT Id</div>
            <FormikTextfield
              classes={classes}
              id={"vatId"}
              label={"VAT ID"}
              placeholder={"🙃"}
              formikProps={formikProps}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Button
              size={"large"}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>

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
    width: "75%",
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

  divStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
}));
