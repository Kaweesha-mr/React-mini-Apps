import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    //usestate is going to use here because we have to manage the state of the blog 
    //use to manage dynamic data becouse blogs can be deleted or added

    const [blogs,setBlogs] = useState([
        {id:1, title: 'Blog 1', content: 'content for Blog 1'},
        {id:2, title: 'Blog 2', content: 'content for Blog 2'},
    ])
    return ( 
        <div>
            <h2>Welcome to the Blog Page</h2>
            {/* display the currentli available blog pages */}

            <ul>
                    {/* insted of hardcoding we are going to dynamiclly change these things */}
                    
                    {blogs.map( blog => (

                        <li key={blog.id}>
                            <link to={`blog/${blog.id}`}>{blog.title}</link>
                        </li>    
                    ))}
            </ul>

            <Link to="/add-blog">Add a New Blog</Link>
        </div>
     );
}
export default Home;