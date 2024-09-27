import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddPost';
import HomePage from './components/Home';
import BlogDetail from './components/BlogDetail';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addpost' element={<AddBlog />} />
          <Route path='/viewblog/:id' element={<BlogDetail />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
