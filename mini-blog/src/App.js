
import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetails"


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddBlog/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
