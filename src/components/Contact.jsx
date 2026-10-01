import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Ponte en <span className="highlight">Contacto</span></h2>

      <div className="contact-grid-container">
        <div className="contact-info-cards">
          <div className="info-card glass-card">
            <div className="info-icon"><MapPin size={24} /></div>
            <div>
              <h4>Visítanos</h4>
              <p>Av. Principal #450, Distrito del Café</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Phone size={24} /></div>
            <div>
              <h4>Llámanos</h4>
              <p>+1 800 555-COFFEE / +54 11 4321-9876</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Mail size={24} /></div>
            <div>
              <h4>Escríbenos</h4>
              <p>contacto@coffeeshop.com</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Clock size={24} /></div>
            <div>
              <h4>Horarios</h4>
              <p>Lun - Sáb: 7:00 AM - 9:00 PM</p>
              <p>Dom: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper glass-card">
          {submitted ? (
            <div className="form-success-message">
              <CheckCircle size={56} className="success-icon" />
              <h3>¡Mensaje Enviado con Éxito!</h3>
              <p>Gracias por escribirnos. Nuestro equipo se pondrá en contacto contigo muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Envíanos un Mensaje</h3>
              
              <div className="input-group-row">
                <div className="input-box">
                  <input
                    type="text"
                    required
                    placeholder="Nombre Completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    required
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="input-group-row">
                <div className="input-box">
                  <input
                    type="tel"
                    placeholder="Número de Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="input-box">
                <textarea
                  rows={6}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
