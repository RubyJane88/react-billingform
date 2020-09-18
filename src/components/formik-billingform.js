import React from "react";
import { Form, Formik } from "formik";
import FormikTextfield from "./formik-textfield";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormikAutoCompleteCountryPhone from "./forms-schema/formik-autocomplete-country-phone";
import FormikValuesViewer from "./formik-values-viewer";
import CheckboxLabels from "./forms-schema/formik-checkbox";
import { useMediaQuery } from "@material-ui/core";
import FormDivider from "./forms-schema/form-divider";
import TitlePage from "./forms-schema/title-page";

const FormikBillingform = ({ initialValues, validationSchema }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:720px)");
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
          {/*/!* Sample of how to use grid *!/*/}

          {/*<div*/}
          {/*  style={{*/}
          {/*    display: "grid",*/}
          {/*    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",*/}
          {/*    // gridGap: "1rem",*/}
          {/*    width: "100%",*/}
          {/*    gridColumnGap: "1rem",*/}
          {/*    gridRowGap: "8rem",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <div style={{ background: "green" }}>Hello</div>*/}
          {/*  <div style={{ background: "blue" }}>Hello</div>*/}
          {/*  <div style={{ background: "red" }}>Hello</div>*/}
          {/*  <div style={{ background: "pink" }}>Hello</div>*/}
          {/*  <div style={{ background: "grey" }}>Hello</div>*/}
          {/*  <div style={{ background: "black" }}>Hello</div>*/}
          {/*</div>*/}
          <div className={classes.divStyle}>
            <div>Company Name</div>
            <FormikTextfield
              classes={classes}
              id={"companyName"}
              label={"Company Name"}
              placeholder={"🏢"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Full Name</div>
            <FormikTextfield
              classes={classes}
              id={"fullName"}
              label={"Full Name"}
              placeholder={"🧍"}
              formikProps={formikProps}
            />
          </div>

          <FormDivider />

          <div className={classes.divStyle}>
            <div>Country</div>
            <FormikAutoCompleteCountryPhone
              id={"country"}
              formikProps={formikProps}
              classes={classes}
            />
          </div>

          <div
            className={classes.divStyle}
            style={{ fontSize: isMobile ? "0.75rem" : "1rem" }}
          >
            <div> Region / State / Province</div>
            <FormikTextfield
              classes={classes}
              id={"region"}
              label={"Region/State/Province"}
              placeholder={"🗺️"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> Address</div>

            <FormikTextfield
              classes={classes}
              id={"address"}
              label={"Address"}
              placeholder={"🏠"}
              formikProps={formikProps}
            />
          </div>

          <div className={classes.divStyle}>
            <div> City</div>
            <FormikTextfield
              classes={classes}
              id={"city"}
              label={"City"}
              placeholder={"🏙️"}
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

          <FormDivider />

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

          <FormDivider />

          <div
            className={
              isMobile ? classes.invoiceGridMobile : classes.invoiceGrid
            }
          >
            <div>
              <TitlePage description={"Invoice"} />
            </div>

            <div>
              <CheckboxLabels />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Button type="submit" variant="contained" color="inherit">
              Save Changes
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
    width: "100%",
  },
  invoiceGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "25% 25% 30%",
  },
  invoiceGridMobile: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "30% 50%",
  },
}));
