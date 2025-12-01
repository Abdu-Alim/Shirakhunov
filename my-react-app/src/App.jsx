import {Routes, Route} from 'react-router-dom';
import PostList from './pages/PostList.jsx';
import PostDetail from './pages/PostDetail.jsx';

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<PostList />} />
      <Route path='/posts/:id' element={<PostDetail />} />
    </Routes>
  );
}