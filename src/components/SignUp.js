import React from "react";
// import Button from "@material-ui/core/Button";
import { Button } from "react-bootstrap";
//import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
//import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import "../Signup.css";

export default function SignUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  //const classes = useStyles();
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ORDER
      </Button> */}
      <Button variant="danger" id="butt" onClick={handleClickOpen}>
        Create a Free account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">
        
        </DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText id="dailog-content">
            <p>Welcome Back</p>
          </DialogContentText> */}
          <Grid item xs={12} sm={12}>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="danger">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Place Order
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
