import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Sparkles, ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/coffeesData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const contactSectionRef = useRef(null);
  const cardsColumnRef = useRef(null);
  const formCardRef = useRef(null);
  const faqRef = useRef(null);
  const messageTextareaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of info cards
      if (cardsColumnRef.current) {
        gsap.fromTo(
          cardsColumnRef.current.children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            stagger: 0.15,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Form card reveal
      if (formCardRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { opacity: 0, x: 50, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            delay: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // FAQ accordion reveal
      if (faqRef.current) {
        gsap.fromTo(
          faqRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: faqRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, contactSectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4500);
  };

  const handleMessageInput = (e) => {
    setFormData({ ...formData, message: e.target.value });
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section className="contact" id="contact" ref={contactSectionRef}>
      <div className="heading-container">
        <span className="heading-subtitle">
          <Sparkles size={14} /> Atención Personalizada
        </span>
        <h2 className="heading">
          Ponte en <span className="highlight">Contacto</span>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-cards-column" ref={cardsColumnRef}>
          <div className="info-card glass-card">
            <div className="info-icon"><MapPin size={22} /></div>
            <div>
              <h4>Visítanos</h4>
              <p>Av. Principal #450, Distrito del Café</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Phone size={22} /></div>
            <div>
              <h4>Llámanos</h4>
              <p>+1 800 555-COFFEE / +54 11 4321-9876</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Mail size={22} /></div>
            <div>
              <h4>Escríbenos</h4>
              <p>contacto@coffeeshop.com</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon"><Clock size={22} /></div>
            <div>
              <h4>Horario Barista</h4>
              <p>Lun - Sáb: 7:00 AM - 9:00 PM</p>
              <p>Dom: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card glass-card" ref={formCardRef}>
          {submitted ? (
            <div className="form-success-box animate-fade-in">
              <CheckCircle size={64} className="success-icon" />
              <h3>¡Mensaje Enviado con Éxito!</h3>
              <p>Gracias por contactarnos. Nuestro equipo barista responderá a tu solicitud muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Envíanos un Mensaje ✉️</h3>
              <p className="form-subtitle">¿Tienes consultas sobre eventos, pedidos especiales o tostado personalizado?</p>

              <div className="form-row">
                <input
                  type="text"
                  required
                  placeholder="Nombre Completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  placeholder="Número de Teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <textarea
                ref={messageTextareaRef}
                rows={4}
                required
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onInput={handleMessageInput}
                className="contact-auto-expand-textarea"
              ></textarea>

              <div className="contact-form-actions">
                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={18} />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="faq-section" ref={faqRef}>
        <h3 className="faq-title">Preguntas Frecuentes</h3>
        <div className="faq-accordion-grid">
          {FAQS_DATA.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item glass-card ${openFaqIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="faq-header">
                <h4>{faq.q}</h4>
                <ChevronDown size={18} className="faq-arrow" />
              </div>
              {openFaqIndex === idx && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
