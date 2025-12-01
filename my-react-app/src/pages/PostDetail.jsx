import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    if (!post) {
        return <h2>Loading...</h2>;
    }
    return (
        <div style={{ padding: 30 }}>
            <Link to="/">Back</Link>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );

}