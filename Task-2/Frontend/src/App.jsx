import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddPost';
import HomePage from './components/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addpost' element={<AddBlog />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
