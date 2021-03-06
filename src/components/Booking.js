import React from "react";
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
import axios from "axios";
import "../Signup.css";

export default function Booking() {
  const [open, setOpen] = React.useState(false);
  const [churchname, setChurchName] = React.useState();
  const [service, setService] = React.useState();
  const [numberOfseats, setSeat] = React.useState();

  const handlenameChange = (e) => {
    setChurchName(e.target.value);
  };
   const handleserviceChange = (e) => {
     setService(e.target.value);
   };
 const handleseatChange = (e) => {
   setSeat(e.target.value);
 };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myBookingData = {
      churchName: churchname,
      service: service,
      numberOfseats: numberOfseats,
    };
   // console.log(myBookingData);
    axios.post("http://localhost:8000/booking", myBookingData).then(
      (response) => {
        console.log(response);
        window.location = "/login";
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const { register, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  //const classes = useStyles();
  return (
    <div>
      <Button variant="success" id="butt" onClick={handleClickOpen}>
        Book space
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please fill in the following to book your space.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dailog-content">
            <p>Welcome! </p>
          </DialogContentText>
          <Grid item xs={12} sm={12}>
            <form onSubmit={handleSubmit}>
              <h2 id="heading-two">Glad you're here,</h2>
              <Form.Label>Your Church or Mosque:</Form.Label>
              <Form.Control
                as="select"
                custom
                // type="text"
                name="churchName"
                id="input"
                onChange={handlenameChange}
                ref={register}
              >
                <option>Coming Soon</option>
                <option>Also coming soon</option>
                <option>Wait your church or Mosque to register</option>
                <option>Select</option>
                <option>Your church will appear here</option>
              </Form.Control>
              <Form.Label>Service slot:</Form.Label>
              <Form.Control
                as="select"
                custom
                // type="text"
                name="service"
                id="input"
                onChange={handleserviceChange}
                ref={register}
              >
                <option>Morning</option>
                <option>After noon</option>
                <option>Evening</option>
                {/* <option>4</option>
                <option>5</option> */}
              </Form.Control>

              <Form.Label>Number of seats:</Form.Label>
              <Form.Control
                as="select"
                custom
                // type="text"
                name="numberOfseats"
                id="input"
                ref={register}
                onChange={handleseatChange}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>You can only make a max of 5 seats</option>
              </Form.Control>
              {/* <input
                name="exampleRequired"
                ref={register({ required: true })}
              /> */}
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <br></br>
              <br></br>
              <Button type="submit" id="button">
                Book
              </Button>
            </form>
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
