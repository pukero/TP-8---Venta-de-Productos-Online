import React from 'react';
import { Link } from 'react-router-dom';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div class="QuienesSomos">
      <div class="QuienesSomos-container">
        <div class="QuienesSomos-header">
          <h1 class="QuienesSomos-title">Quiénes Somos</h1>
          <p class="QuienesSomos-subtitle">
            Conoce nuestra historia, misión y los valores que nos impulsan cada día.
          </p>
        </div>

        <section class="QuienesSomos-story">
          <div class="story-content">
            <div class="story-text">
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
            <div class="story-image">
              <div class="placeholder-image">
                <span>📈</span>
                <p>Nuestro Crecimiento</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mission-vision">
          <div class="mv-grid">
            <div class="mv-card">
              <div class="mv-icon">🎯</div>
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar productos de calidad excepcional que mejoren la vida 
                de nuestros clientes, manteniendo siempre los más altos estándares 
                de servicio y satisfacción.
              </p>
            </div>
            <div class="mv-card">
              <div class="mv-icon">👁️</div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como la empresa líder en nuestro sector, 
                expandiendo nuestra presencia a nivel nacional e internacional, 
                siempre manteniendo nuestros valores fundamentales.
              </p>
            </div>
          </div>
        </section>

        <section class="values-section">
          <h2 class="section-title">Nuestros Valores</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas basadas en la transparencia y honestidad.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">⭐</div>
              <h3>Calidad</h3>
              <p>Nos comprometemos a ofrecer solo productos que cumplan con los más altos estándares.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🚀</div>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de mejorar y evolucionar.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">❤️</div>
              <h3>Compromiso</h3>
              <p>Estamos dedicados al éxito de nuestros clientes y al crecimiento mutuo.</p>
            </div>
          </div>
        </section>

        <section class="team-section">
          <h2 class="section-title">Nuestro Equipo</h2>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">👨‍💼</div>
              <h3>Juan Pérez</h3>
              <p class="member-role">Director General</p>
              <p class="member-description">
                Con más de 15 años de experiencia en el sector, Juan lidera 
                nuestra visión estratégica y crecimiento empresarial.
              </p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👩‍💼</div>
              <h3>María González</h3>
              <p class="member-role">Directora de Operaciones</p>
              <p class="member-description">
                María se encarga de optimizar nuestros procesos y garantizar 
                la excelencia en cada etapa de nuestro servicio.
              </p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👨‍💻</div>
              <h3>Carlos Rodríguez</h3>
              <p class="member-role">Director de Tecnología</p>
              <p class="member-description">
                Carlos impulsa la innovación tecnológica y el desarrollo 
                de nuestras plataformas digitales.
              </p>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="cta-content">
            <h2>¿Quieres formar parte de nuestra historia?</h2>
            <p>Únete a miles de clientes satisfechos que ya confían en nosotros</p>
            <Link to="/productos" class="cta-button">Conocer Productos</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuienesSomos;
