import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import "./PostList.css";

export default function PostList() {
  const { posts, isOwner, deletePost } = useContext(AuthContext);

  const handleDelete = async (id) => {
    const result = await deletePost(id);
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <div className="container">
      <h1>Все посты</h1>
      {posts.map(post => (
        <div key={post.id} className="post card">
          <h3>{post.title}</h3>
          <Link className="read-link" to={`/posts/${post.id}`}>Читать далее</Link>
          {isOwner(post.userId) && (
            <div className="actions">
              <Link to={`/edit/${post.id}`}>Редактировать</Link>
              <button onClick={() => handleDelete(post.id)}>Удалить</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}