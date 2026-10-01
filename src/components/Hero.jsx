import React from 'react';
import { ShoppingBag, ArrowRight, Award, Users, Star } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const scrollToCoffees = (e) => {
    e.preventDefault();
    const element = document.getElementById('coffees');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-overlay"></div>
      <div className="home-content animate-fade-in">
        <div className="hero-badge">
          <Award size={16} />
          <span>Experiencia de Café de Especialidad</span>
        </div>

        <h3>Bienvenido a</h3>
        <h1>Coffee<span className="highlight">SHOP</span></h1>

        <p>
          Descubre el aroma inigualable de nuestros granos seleccionados a mano y tostados con maestría artesanal. 
          Cada taza es un viaje sensorial diseñado para despertar tus sentidos.
        </p>

        <div className="hero-actions">
          <a href="#coffees" onClick={scrollToCoffees} className="btn-primary">
            <ShoppingBag size={18} />
            Ordenar Ahora
          </a>
          <a href="#about" onClick={scrollToAbout} className="btn-secondary">
            Nuestra Historia
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon"><Award size={20} /></div>
            <div>
              <h4>100%</h4>
              <p>Granos de Origen</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Users size={20} /></div>
            <div>
              <h4>+15,000</h4>
              <p>Clientes Felices</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Star size={20} /></div>
            <div>
              <h4>4.9 / 5.0</h4>
              <p>Calificación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
