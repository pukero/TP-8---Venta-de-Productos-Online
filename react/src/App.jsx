import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Home from './paginas/Home/Home';
import Contacto from './paginas/Contacto/Contacto';
import QuienesSomos from './paginas/QuienesSomos/QuienesSomos';
import Productos from './paginas/Productos/Productos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/categoria/:categoria" element={<Productos />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
