import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App
