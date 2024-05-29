import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Market from './pages/Market.jsx';
import Membership from './pages/Membership.jsx';

function App() {
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/market' element={<Market/>}/>
          <Route path='/member' element={<Membership/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
