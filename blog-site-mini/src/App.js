import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (


    <Router>    
      <div className="App">

        <h1 style={
          {
            textAlign:"center",
            padding:"10px",
            backgroundColor:"black",
            color:"white",
          }} > Blog Website</h1>
        
        <Navbar />
        
      


    </div>
    </Router>
  );
}

export default App;
