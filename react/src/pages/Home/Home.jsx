import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido a Nuestra Tienda</h1>
            <p className="hero-description">
              Descubre los mejores productos con la calidad que mereces. 
              Ofrecemos una amplia variedad de artículos para satisfacer todas tus necesidades.
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="btn-primary">Ver Productos</Link>
              <Link to="/quienes-somos" className="btn-secondary">Conocer Más</Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Envío Gratis</h3>
                <p>Envío gratuito en compras superiores a $50.000</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Compra Segura</h3>
                <p>Tus datos están protegidos con la mejor tecnología</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Calidad Premium</h3>
                <p>Solo ofrecemos productos de la más alta calidad</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📞</div>
                <h3>Soporte 24/7</h3>
                <p>Estamos aquí para ayudarte cuando lo necesites</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>¿Listo para comenzar?</h2>
            <p>Explora nuestro catálogo y encuentra exactamente lo que buscas</p>
            <Link to="/productos" className="btn-primary">Explorar Productos</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
