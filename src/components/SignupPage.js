import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "../Signup.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    // width:400,
    //height: 500,
    color: theme.palette.text.secondary,
  },
}));

export default function SignupPage() {
  const [name, setName] = React.useState();
  const [contact, setContact] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const handlecontactChange = (e) => {
    setContact(e.target.value);
  };
  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };
    
   const handleSubmit = (event) => {
     event.preventDefault();
     const myUserData = {
       fullName: name,
       contact: contact,
       email: email,
       password: password,
       //  comfirmPassword: "",
     };
     console.log(myUserData);
     axios.post("http://localhost:8000/logindetails", myUserData).then(
       (response) => {
         console.log(response);
         window.location = "/book";
       },
       (error) => {
         console.log(error);
       }
     );
   };
  const { register, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(watch("password")); // watch input value by passing the name of it

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} id="signup">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                id="input"
                onChange={handlenameChange}
                ref={register}
                required
              />
              <Form.Label>Contact:</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                onChange={handlecontactChange}
                id="input"
                ref={register}
                required
              />
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="input"
                onChange={handleemailChange}
              />
              {errors.email && errors.email.message}

              <Form.Label>Set Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="input"
                required
                onChange={handlepasswordChange}
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <br></br>
              <p>
                By signing in you agree with the terms of service and privacy
              </p>
              <Button type="submit" id="button">
                Sign Up
              </Button>
            </form>
            <br></br>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
