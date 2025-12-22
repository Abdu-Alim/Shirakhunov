import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    const savedUser = localStorage.getItem('user');
    const savedPosts = localStorage.getItem('posts');
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          setPosts(res.data);
          localStorage.setItem('posts', JSON.stringify(res.data));
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const register = (email, password) => {
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Email уже занят' };
    }
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password,
    };
    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return { success: true };
  };

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) {
      return { success: false, message: 'Неверный email или пароль' };
    }
    setUser(foundUser);
    localStorage.setItem('user', JSON.stringify(foundUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  const isOwner = (postUserId) => user && user.id === postUserId;

  const createPost = async (title, body) => {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: user.id });
      const newPost = { ...res.data, userId: user.id };
      setPosts(prev => [newPost, ...prev]);
      return { success: true };
    } catch (err) {
      return { success: false, message: 'Ошибка создания' };
    }
  };

  const updatePost = async (id, title, body) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body, userId: user.id });
      setPosts(prev => prev.map(p => p.id === id ? { ...p, title, body } : p));
      return { success: true };
    } catch (err) {
      return { success: false, message: 'Ошибка обновления' };
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(prev => prev.filter(p => p.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, message: 'Ошибка удаления' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, users, posts, login, logout, register, isOwner, createPost, updatePost, deletePost }}>
      {children}
    </AuthContext.Provider>
  );
}