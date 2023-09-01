import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
