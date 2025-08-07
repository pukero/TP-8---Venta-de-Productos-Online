import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="quienes-somos" element={<About />} />
            <Route path="productos" element={<Products />} />
            <Route path="productos/categoria/:categoria" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
