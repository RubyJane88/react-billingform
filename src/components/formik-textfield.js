import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

const FormikTextfield = ({ id, placeholder, formikProps, label }) => {
  return (
    <section>
      <TextField
        id={id}
        value={formikProps.values[`${id}`]}
        variant="outlined"
        placeholder={placeholder}
        label={label}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
      />
    </section>
  );
};
export default FormikTextfield;
