import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const { posts, isOwner } = useContext(AuthContext);
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h2 className="container">Пост не найден</h2>;

  return (
    <div className="container">
      <div className="card">
        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-text">{post.body}</p>
        {isOwner(post.userId) && (
          <Link to={`/edit/${post.id}`}>Редактировать</Link>
        )}
      </div>
    </div>
  );
}