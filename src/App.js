import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <Router>
        <Switch>
          <Route path="//" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
