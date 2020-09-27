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

export default function Login() {
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = {
      phone: phone,
      password: password,
      //  comfirmPassword: "",
    };
    console.log(loginDetails);
    axios.post("http://localhost:8000/logindetails", loginDetails).then(
      (response) => {
        console.log(response);
        window.location = "/signup";
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
              <h2>Login</h2>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                id="input"
                onChange={handlePhoneChange}
                ref={register}
              />
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                id="input"
                // value="hghgjghgj"
                name="password"
                required
                onChange={handlePasswordChange}
                ref={register({ required: true })}
              />
              {/* <input
                name="exampleRequired"
                ref={register({ required: true })}
              /> */}
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <br></br>
              <Button type="submit" id="button">
                Login
              </Button>
              <p>
                Don't have an account?? <a href="/signup">Signup</a>
              </p>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
