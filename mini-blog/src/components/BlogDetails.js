import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({match,blogs}) => {
    

    //useParams is a hook that returns an object of key/value pairs of URL parameters. 
    //The id is destructured directly from the returned object. This id corresponds to 
    //the :id part of the path in your route definition
    
    const { id } = useParams();
    const blogId = parseInt(id);

    //this will find and return the blog with the id that matches the id in the url
    const blog = blogs.find(blog => blog.id === blogId);
    
    return ( 

        <div className="blog-details">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.content}</div>
        </div>

     );
}
 
export default BlogDetails;