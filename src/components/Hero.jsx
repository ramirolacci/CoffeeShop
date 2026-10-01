import React, { useEffect, useRef } from 'react';
import { ShoppingBag, ArrowRight, Award, Users, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);

  const countClientsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(badgeRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, delay: 0.1 })
        .fromTo(titleRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, '-=0.6')
        .fromTo(descRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, '-=0.6')
        .fromTo(actionsRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, '-=0.6')
        .fromTo(statsRef.current.children, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, stagger: 0.15 }, '-=0.5');

      // Animated counter number for clients
      if (countClientsRef.current) {
        gsap.fromTo(
          countClientsRef.current,
          { textContent: 0 },
          {
            textContent: 15000,
            duration: 2.2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 90%',
            },
            onUpdate: function () {
              if (countClientsRef.current) {
                const val = Math.floor(this.targets()[0].textContent);
                countClientsRef.current.innerText = `+${val.toLocaleString()}`;
              }
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

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
    <section className="home" id="home" ref={heroRef}>
      <div className="home-background-overlay"></div>
      
      <div className="home-wrapper">
        <div className="home-content">
          <div className="hero-badge" ref={badgeRef}>
            <Award size={16} />
            <span>Experiencia de Café de Especialidad</span>
          </div>

          <h1 ref={titleRef} className="hero-main-heading">
            Bienvenido a <br />
            Coffee<span className="highlight">SHOP</span>
          </h1>

          <p ref={descRef} className="hero-subtitle">
            Descubre el aroma inigualable de nuestros granos seleccionados a mano y tostados 
            con maestría artesanal. Cada taza es un viaje sensorial diseñado para despertar tus sentidos.
          </p>

          <div className="hero-actions-row" ref={actionsRef}>
            <a href="#coffees" onClick={scrollToCoffees} className="btn-primary hero-btn">
              <ShoppingBag size={20} />
              Ordenar Ahora
            </a>
            <a href="#about" onClick={scrollToAbout} className="btn-secondary hero-btn">
              Nuestra Historia
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="hero-stats-row" ref={statsRef}>
            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper"><Award size={22} /></div>
              <div>
                <h4>100%</h4>
                <p>Granos de Origen</p>
              </div>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper"><Users size={22} /></div>
              <div>
                <h4 ref={countClientsRef}>+15,000</h4>
                <p>Clientes Felices</p>
              </div>
            </div>

            <div className="stat-card glass-card">
              <div className="stat-icon-wrapper"><Star size={22} /></div>
              <div>
                <h4>4.9 / 5.0</h4>
                <p>Calificación SCA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
