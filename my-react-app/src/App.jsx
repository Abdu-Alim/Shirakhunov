import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PostList from './pages/PostList.jsx';
import PostDetail from './pages/PostDetail.jsx';
import CreatePost from './pages/CreatePost.jsx';
import EditPost from './pages/EditPost.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contact.jsx';
import Layout from './layout/Layout.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<PostList />} />
        <Route path='posts/:id' element={<PostDetail />} />
        <Route path='create' element={<CreatePost />} />
        <Route path='edit/:id' element={<EditPost />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
}