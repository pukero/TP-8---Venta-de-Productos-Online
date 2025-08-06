import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Navegación</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/productos" className="footer-link">Productos</Link></li>
              <li><Link to="/quienes-somos" className="footer-link">Quienes somos</Link></li>
              <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="footer-info">
              <p>📧 info@empresa.com</p>
              <p>📞 +54 11 1234-5678</p>
              <p>📍 Buenos Aires, Argentina</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
