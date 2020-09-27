import React from "react";
import axios from "axios";
// import Button from "@material-ui/core/Button";
import { Button } from "react-bootstrap";
//import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import "../Signup.css";

export default function Book() {
  const [open, setOpen] = React.useState(false);
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
  //const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  //const classes = useStyles();
  return (
    <div>
      <Button id="butt" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please, kindly Login to book your space
        </DialogTitle>

        <DialogContent>
          <Grid item xs={12} sm={12}>
            <DialogContentText id="dailog-content">
              <p>Welcome Back</p>
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                id="input"
                onChange={handlePhoneChange}
                //ref={register}
              />
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                id="input"
                name="password"
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
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="danger">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
