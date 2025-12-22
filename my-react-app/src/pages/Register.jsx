import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = register(email, password);
    if (result.success) {
      navigate('/posts');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="container">
      <h1>Регистрация</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Зарегистрироваться</button>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </form>
    </div>
  );
}