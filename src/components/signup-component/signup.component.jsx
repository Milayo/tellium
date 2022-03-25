import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

import "./signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "white", height: "80vh", padding: "60px" }}
      >
        <h3 className="title">Create Account</h3>

        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is Required";
            } else if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.password) {
              errors.password = "Password is required";
            } else if (values.password.length < 6) {
              errors.password = "Password should exceed 6 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              const { email, password, username } = values;
              try {
                const { user } = await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                );
                await createUserProfileDocument(user, username);
              } catch (error) {
                console.log(error);
              }
               values.email = "";
               values.password = "";
               values.username = "";
              setSubmitting(false);
             
            }, 400);
          }}
        >
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
              <TextField
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                label="Username"
                style={{ margin: 8 }}
                required={true}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <h6 className="formInput-error">
                {errors.username && touched.username && errors.username}
              </h6>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Email"
                style={{ margin: 8 }}
                required={true}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <h6 className="formInput-error">
                {errors.email && touched.email && errors.email}
              </h6>
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="Password"
                style={{ margin: 8 }}
                required={true}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <h6 className="formInput-error">
                {errors.password && touched.password && errors.password}
              </h6>

              <Button
                style={{
                  backgroundColor: "rgb(22, 1, 22)",
                  color: "white",
                  marginTop: "30px",
                }}
                variant="contained"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
               SIGN UP
              </Button>
            </form>
          )}
        </Formik>
      </Typography>
    </Container>
  );
};

export default SignUp;
