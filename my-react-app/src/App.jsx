import { Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList.jsx';
import PostDetail from './pages/PostDetail.jsx';
import Layout from './layout/Layout.jsx';

export default function App() {
  return (
    <Routes>

      <Route path='/' element={<Layout />}>

        <Route index element={<PostList />} />
        <Route path='posts/:id' element={<PostDetail />} />

      </Route>

    </Routes>
  );
}