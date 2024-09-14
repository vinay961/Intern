
import AddTask from "./Task/AddTask.jsx";
import ViewTask from "./Task/ViewTask.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/tasks" element={<ViewTask />} />
      </Routes>
    </ Router>
  )
}

export default App
