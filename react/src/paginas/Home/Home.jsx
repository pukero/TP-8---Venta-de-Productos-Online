import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div class="home">
      <h1>Bienvenido a Nuestra Tienda</h1>
      <p>Descubre los mejores productos con la calidad que mereces.</p>
      <Link to="/productos" class="btn-primary">Ver Productos</Link>
    </div>
  );
};

export default Home;
