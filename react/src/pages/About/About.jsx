import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">Quiénes Somos</h1>
          <p className="about-subtitle">
            Conoce nuestra historia, misión y los valores que nos impulsan cada día.
          </p>
        </div>

        <section className="about-story">
          <div className="story-content">
            <div className="story-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundada en 2020, nuestra empresa nació con la visión de ofrecer productos 
                de alta calidad a precios accesibles. Lo que comenzó como un pequeño emprendimiento 
                familiar, hoy se ha convertido en una empresa líder en el sector.
              </p>
              <p>
                A lo largo de estos años, hemos crecido gracias a la confianza de nuestros 
                clientes y al compromiso constante con la excelencia en el servicio.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <span>📈</span>
                <p>Nuestro Crecimiento</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar productos de calidad excepcional que mejoren la vida 
                de nuestros clientes, manteniendo siempre los más altos estándares 
                de servicio y satisfacción.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como la empresa líder en nuestro sector, 
                expandiendo nuestra presencia a nivel nacional e internacional, 
                siempre manteniendo nuestros valores fundamentales.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas basadas en la transparencia y honestidad.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Calidad</h3>
              <p>Nos comprometemos a ofrecer solo productos que cumplan con los más altos estándares.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de mejorar y evolucionar.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compromiso</h3>
              <p>Estamos dedicados al éxito de nuestros clientes y al crecimiento mutuo.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Juan Pérez</h3>
              <p className="member-role">Director General</p>
              <p className="member-description">
                Con más de 15 años de experiencia en el sector, Juan lidera 
                nuestra visión estratégica y crecimiento empresarial.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>María González</h3>
              <p className="member-role">Directora de Operaciones</p>
              <p className="member-description">
                María se encarga de optimizar nuestros procesos y garantizar 
                la excelencia en cada etapa de nuestro servicio.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Carlos Rodríguez</h3>
              <p className="member-role">Director de Tecnología</p>
              <p className="member-description">
                Carlos impulsa la innovación tecnológica y el desarrollo 
                de nuestras plataformas digitales.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>¿Quieres formar parte de nuestra historia?</h2>
            <p>Únete a miles de clientes satisfechos que ya confían en nosotros</p>
            <Link to="/productos" className="cta-button">Conocer Productos</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
