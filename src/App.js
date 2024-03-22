import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import {Routes} from 'react-router'
import Home from './pages/Home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes> 
    </>
  );
}

export default App;
