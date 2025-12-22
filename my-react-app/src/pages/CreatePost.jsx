import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { user, createPost } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return <h2 className="container">Нужно войти для создания поста</h2>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createPost(title, body);
    if (result.success) {
      navigate('/posts');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Создать Пост</h1>
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
          <button type="submit">Создать</button>
        </form>
      </div>
    </div>
  );
}