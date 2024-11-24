import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted successfully:", values);
    alert("Registration successful!");
    resetForm(); // Reset the form after successful submission
  };
  return (
    <div>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <label htmlFor="username">User Name:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
            <br />
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            <br />
            <label htmlFor="password">Password</label>
            <Field type="text" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
