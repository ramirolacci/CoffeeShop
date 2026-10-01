import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Coffee, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'coffees', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'coffees', label: 'Cafés' },
    { id: 'reviews', label: 'Reseñas' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="logo"
        >
          <div className="logo-icon-wrapper">
            <Coffee className="logo-icon" size={24} />
          </div>
          <span className="logo-text">
            Coffee<span className="highlight">SHOP</span>
          </span>
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <span className="nav-active-pill" />}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="cart-trigger"
            onClick={openCart}
            aria-label="Abrir carrito de compras"
          >
            <ShoppingBag size={22} />
            <span className="cart-trigger-text">Carrito</span>
            {totalItems > 0 && (
              <span className="cart-badge animate-pop">{totalItems}</span>
            )}
          </button>

          <button
            className="menu-icon-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menú de navegación"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};
