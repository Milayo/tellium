import React from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils.js";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

import "./signin.scss";

const SignIn = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "white", height: "80vh", padding: "60px" }}
      >
        <h3 className="title1">Hello!</h3>
        <h6 className="title2">Sign Into Your Account</h6>

        <Formik
          initialValues={{ password: "", email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.username = "Email is Required";
            } else if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
             console.log("subsddwdwdwdwd");
            setTimeout(async () => {
              const { email, password } = values;
             

              try {
                await signInWithEmailAndPassword(auth, email, password);
                values.email = "";
                values.password = "";
              } catch (error) {
                console.log(error);
                alert(error.messaage)
              }

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
                required="true"
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
               SIGN IN
              </Button>
            </form>
          )}
        </Formik>
      </Typography>
    </Container>
  );
};

export default SignIn;
