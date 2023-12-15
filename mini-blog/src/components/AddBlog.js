import React, { useState } from "react";



const AddBlog = ({handleAddBlog}) => {
    
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    
    const handleBlog = (e) => {
        e.preventDefault();
        const blog = {title,content};

        handleAddBlog(blog);
        setTitle('');
        setContent('');
    }


    return ( 
        <div>
            <h2>Add a new Blog</h2>
            <form>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e=> setTitle(e.target.value)} />
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={e=> setContent(e.target.value)} />
                
                <button onClick={handleBlog}>Add Blog</button>
            </form>
        </div>
     );
}
 
export default AddBlog;