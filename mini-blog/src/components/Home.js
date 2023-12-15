import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Home = ({blogs}) => {
    //usestate is going to use here because we have to manage the state of the blog 
    //use to manage dynamic data becouse blogs can be deleted or added


    return ( 
        <div>
            <h2>Welcome to the Blog Page</h2>
            {/* display the currentli available blog pages */}

            <ul>
                    {/* insted of hardcoding we are going to dynamiclly change these things */}
                    
                    {blogs.map( blog => (

                        <li key={blog.id}>
                            <Link to={`blog/${blog.id}`}>{blog.title}</Link>
                        </li>    
                    ))}
            </ul>

            <Link to="/add">Add a New Blog</Link>
        </div>
     );
}
export default Home;