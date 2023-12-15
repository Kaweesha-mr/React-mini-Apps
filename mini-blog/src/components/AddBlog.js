import React, { useState } from "react";


const AddBlog = () => {
    
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    //when the submit button clicks there should be a function to handle it

    const handleAddBlog = (e) => {
        e.preventDefault();


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
                
                <button onClick={handleAddBlog}>Add Blog</button>
            </form>
        </div>
     );
}
 
export default AddBlog;