import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { user, isOwner, updatePost } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch(() => {
        alert('Пост не найден');
        navigate('/posts');
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updatePost(id, title, body);
    if (result.success) {
      navigate(`/posts/${id}`);
    } else {
      alert(result.message);
    }
  };

  if (!user || !isOwner(1)) {
    return <h2 className="container">Доступ запрещён</h2>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Редактировать Пост</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Текст"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            style={{ minHeight: '200px', width: '100%' }}
          />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}