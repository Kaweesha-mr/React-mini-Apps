
import React, {useState} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetails"
import './app.css';


function App() {

  const [blogs,setBlogs] = useState([
    {id:1, title: 'Blog 1', content: 'content for Blog 1'},
    {id:2, title: 'Blog 2', content: 'content for Blog 2'},
])

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Home blogs={blogs} />}/>
          <Route path="/add" element={<AddBlog/>}/>
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs}/>}/>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
