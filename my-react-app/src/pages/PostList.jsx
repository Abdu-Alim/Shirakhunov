import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostList() {
    const [posts, setPosts] = useState([]); // Изменил setPost на setPosts

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div style={{padding: 20}}>
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id} style={{marginBottom: 15}}>
                    <h3>{post.title}</h3>
                    {/* Изменил /post/ на /posts/ чтобы соответствовать App.jsx */}
                    <Link to={`/posts/${post.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
}