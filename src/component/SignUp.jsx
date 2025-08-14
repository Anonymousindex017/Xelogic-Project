import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from 'react';
import * as Yup from "yup";
import "../css/signup.css";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("User name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

const SignUp = () => {

  return (
    <div className="signup-container container mb-5">
      <div className="signup-form">
        <h1 className="text-center fw-bolder">Sign Up</h1>

        <Formik
          //initialValues is here
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}

          // form validation here
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Data:", values);
          }}
        >
          {() => (
            // start form here 
            <Form>
              <div className="signup-form-group">
                <label htmlFor="name">User Name</label>
                <Field type="text" id="name" name="name" placeholder="Enter Your Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Enter Your Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" placeholder="Enter Your Password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Your Password" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;

