import React, { useState } from 'react';
import { Coffee, Send, Check } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="footer-logo">
            <div className="footer-logo-icon">
              <Coffee size={24} />
            </div>
            <span>Coffee<span className="highlight">SHOP</span></span>
          </a>
          <p>
            Artesanos del café de especialidad. Seleccionamos y tostamos en pequeños lotes 
            los mejores granos Arábica del mundo.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>Nosotros</a></li>
            <li><a href="#coffees" onClick={(e) => { e.preventDefault(); handleNavClick('coffees'); }}>Menú de Cafés</a></li>
            <li><a href="#reviews" onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>Reseñas</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contacto</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Únete al Club del Barista ☕</h4>
          <p>Recibe promociones exclusivas, guías de preparación y nuevos lotes recién tostados.</p>

          {subscribed ? (
            <div className="newsletter-success">
              <Check size={18} /> ¡Suscripción confirmada! Te enviaremos novedades.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" aria-label="Suscribirse al boletín">
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <p className="copyright-text">
          © {currentYear} <strong>CoffeeSHOP</strong>. Todos los Derechos Reservados. | Desarrollado por{' '}
          <a
            href="https://waveframe.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="dev-link"
          >
            WaveFrame Studio
          </a>
        </p>
      </div>
    </footer>
  );
};
