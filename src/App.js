import React,{useEffect,useState} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
//import './App.css';
import SignUp from './components/SignUp';
import Booking from './components/Booking';
import SignupPage from './components/SignupPage';
//import Book from './components/Book';

function App() {
   const [ setuser] = useState({});
  useEffect(() => {
    axios
      .get("/hello")
      .then((response) => {
        setuser(response.user);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <Router>
        <Switch>
          <Route path="//" component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/book" component={Booking}></Route>
          <Route pathn="/signuppage" component={SignupPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
