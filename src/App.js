import React from 'react';
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <Home />
    </div>
  );
}

export default App;
