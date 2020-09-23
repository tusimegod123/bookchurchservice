/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Book from "./Book";
import Booking from "./Booking";
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
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <marquee id="marque">
        With the presidential directive of allowing only 70 people in a
        worshiping place, woudn't it be safer to book a place to be part of a
        worship than being bounced because your the eccess person??{" "}
      </marquee>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} id="intro">
            <h3>
              Online Booking System for your{" "}
              <span> Church Services in Uganda</span>
            </h3>
            <p>
              Avoid being bounced back from not attending church service because
              you are the extra 71 person. Simply Register with your details and
              search for your church and book a slot to be part of a specified
              service at your Church.
            </p>

            <Button variant="danger" id="butto1">
              <Signup />
            </Button>
            <Button id="butto">
              <Book />
            </Button>
            <Button variant="success" id="butto2">
              <Booking />
            </Button>
            <img
              src={require("../static/images/church-image.jpg")}
              alt=""
              className="main-image"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} id="signup">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Sign Up</h2>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="example"
                id="input"
                ref={register}
              />
              <Form.Label>Contact:</Form.Label>
              <Form.Control
                type="text"
                name="example"
                id="input"
                ref={register}
              />
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="example"
                id="input"
                ref={register}
              />
              <Form.Label>Set Password:</Form.Label>
              <Form.Control
                type="text"
                name="exampleRequired"
                id="input"
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
