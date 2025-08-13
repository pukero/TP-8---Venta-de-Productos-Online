import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div class="contact">
      <div class="contact-container">
        <div class="contact-header">
          <h1 class="contact-title">Contáctanos</h1>
          <p class="contact-subtitle">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <h2>Información de Contacto</h2>
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-details">
                <h3>Email</h3>
                <p>info@empresa.com</p>
                <p>ventas@empresa.com</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-details">
                <h3>Teléfono</h3>
                <p>+54 11 1234-5678</p>
                <p>+54 11 8765-4321</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-details">
                <h3>Dirección</h3>
                <p>Av. Corrientes 1234</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">🕒</div>
              <div class="info-details">
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div class="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            <form class="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div class="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              
              <div class="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              <div class="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
