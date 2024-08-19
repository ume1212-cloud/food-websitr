// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import  Screen1  from './Screen1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
     <Screen1/>
      {/* <Screen1/> */}
    </div>
  );
}

export default App;
