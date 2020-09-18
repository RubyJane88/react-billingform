import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./forms-schema/formik-error-message";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must have at least 2 characters")
    .max(225, "Must be less than 255 characters")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(225, "Must be less than 255 characters")
    .required("Must enter an email"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: " " }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        {
          /* let's use setTimeout to fake a delay of the submission of this data
        since we don't have an actual server */
        }

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {/* render props*/}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {/* to show values in the UI for debugging purposes */}
          {JSON.stringify(values, null, 2)}

          <div className="input-row">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
            />
            <Error touched={touched.name} message={errors.name} />
          </div>

          <div className="input-row">
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            />

            <Error touched={touched.email} message={errors.email} />
          </div>

          <div className={input - row}>
            <button type="submit" disabled={isSubmitting}>
              Submit{" "}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
