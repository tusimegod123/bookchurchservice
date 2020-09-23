import React from 'react';
import Navigation from "./components/Navbar";
import SignUp from "./components/SignUp";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <SignUp />
    </div>
  );
}

export default App;
