import React from 'react';
import { Coffee, Mail, Globe, Share2 } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" onClick={() => handleNavClick('home')} className="logo">
            <Coffee size={28} className="logo-icon" />
            Coffee<span>SHOP</span>
          </a>
          <p>Pasión por el verdadero café de especialidad. Tostado con amor, servido con maestría.</p>
        </div>

        <div className="social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#coffees" onClick={(e) => { e.preventDefault(); handleNavClick('coffees'); }}>
              Productos
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>
              Reseñas
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              Contacto
            </a>
          </li>
        </ul>

        <div className="copyright">
          © {currentYear} Creado por <span className="underline">WaveFrame</span> | Todos los Derechos Reservados
        </div>
      </div>
    </footer>
  );
};
