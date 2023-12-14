import React from 'react'

import { useParams } from 'react-router-dom'


const BlogPost = ({ posts }) => {
    const { id } = useParams();

    const post = posts.find(post => post.id.toString() === id)

    if (!post) {
        return <div> Blog Post not found</div>
    }

    return (
        <div>
            <h2>
                {post.title}
            </h2>

            <p> {post.body}</p>
        </div>
    );
}

export default BlogPost;