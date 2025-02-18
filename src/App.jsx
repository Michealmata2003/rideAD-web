import Blog from './pages/Blog';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </Router>
  )
}

export default App
