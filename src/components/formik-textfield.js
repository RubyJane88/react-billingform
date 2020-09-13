import React from "react";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage } from "formik";

const FormikTextfield = ({ id, placeholder, formikProps, label, classes }) => {
  return (
    <section className={classes.full}>
      <TextField
        className={classes.full}
        id={id}
        value={formikProps.values[`${id}`]}
        variant="outlined"
        placeholder={placeholder}
        label={label}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
      />

      <div className={classes.errorColor}>
        <ErrorMessage name={id} />
      </div>
    </section>
  );
};
export default FormikTextfield;
