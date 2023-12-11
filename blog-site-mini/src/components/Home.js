import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {

    const [post, setPost] = useState([
        { id: 1, title: "Post 1", body: "This is post 1 This is post 1 This is post 1" },
        { id: 2, title: "Post 2", body: "This is post 2 This is post 1 This is post 1" },
        { id: 3, title: "Post 3", body: "This is post 3 This is post 1 This is post 1" },
    ]);

    const handleDelete = (id) => {

        setPost(post.filter(post => post.id !== id));
    }


    return (<div>
        <h1>Blog Post</h1>

        <ul className="blogList">
            {post.map((post) => (
                <li className="item-container" key={post.id}>
                    <Link  className="item" to={`/post/${post.id}`}>{post.body}</Link>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>);
}

export default Home;