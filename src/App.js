import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/landing/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
