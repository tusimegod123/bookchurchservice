import React from "react";
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
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}></Grid>   
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} id="signup">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Login</h2>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="example"
                id="input"
                ref={register}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                id="input"
                name="example"
                ref={register}
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
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
