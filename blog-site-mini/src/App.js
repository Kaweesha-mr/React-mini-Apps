import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (

      <div className="App">

        <h1 style={
          {
            textAlign: "center",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
          }} > Blog Website</h1>

        <Navbar />
        <Routes>
          
        <Route path="/" element={<Home />} />

        </Routes>

      </div>
    
  );
}

export default App;
