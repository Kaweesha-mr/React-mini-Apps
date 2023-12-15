import React from "react";

const BlogDetails = ({match,blogs}) => {
    const blogId = match.params.id;

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