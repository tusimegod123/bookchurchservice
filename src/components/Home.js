/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
//import { useForm } from "react-hook-form";
//import { Form } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import axios from "axios";
import Book from "./Book";
//import Booking from "./Booking";
import Signup from "./SignUp";

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
export default function Home() {
 // const { register, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  // const [name, setName] = React.useState();
  // const [contact, setContact] = React.useState();
  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();

  // const handlenameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handlecontactChange = (e) => {
  //   setContact(e.target.value);
  // };
  // const handleemailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlepasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const myUserData = {
  //     fullName: name,
  //     contact: contact,
  //     email: email,
  //     password: password,
  //     //  comfirmPassword: "",
  //   };
  //   // console.log(myUserData);
  //   axios.post("http://localhost:8000/user", myUserData).then(
  //     (response) => {
  //       console.log(response);
  //       window.location = "/login";
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <marquee id="marque">
        With the presidential directive of allowing only 70 people in a
        worshiping place, woudn't it be safer to book a place to be part of a
        worship than being bounced because your the eccess person??{" "}
      </marquee> */}
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={1}></Grid> */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} id="intro">
            <h3>
              Online Booking System for your{" "}<br></br>
              <span> Church or Mosque Services in Uganda</span>
            </h3>
            <p id="home-paragraph">
              Avoid being bounced back from not attending church service because<br></br>
              you are the extra 71st person. Simply Register with your details<br></br>
              and search for your Church or Mosque and book a slot to be part of<br></br>
              a specified service at your Church or Mosque.
            </p>

            {/* <Button variant="danger" id="butto1"> */}
              <Signup />
            {/* </Button> */}
            {/* <Button  variant="success" id="butto"> */}
              <Book />
            {/* </Button> */}
            {/* <Button variant="success" id="butto2">
              <Booking />
            </Button> */}
            {/* <img
              src={require("../static/images/church-image.jpg")}
              alt=""
              className="main-image"
            /> */}
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} id="signup">
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
                ref={register}
              />
              <Form.Label>Set Password:</Form.Label>
              <Form.Control
                type="text"
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
        </Grid> */}
      </Grid>
      <p></p>
      <footer id="footer">
        {" "}
        &copy; Designed and developed by Tusime Godwin call me on{" "}
        <a href="tel:+256759755313" id="footer-link">
          {" "}
          +2567013938916
        </a>
      </footer>
    </div>
  );
}
