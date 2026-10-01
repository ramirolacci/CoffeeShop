import React, { useEffect, useRef } from 'react';
import { Flame, Leaf, HeartHandshake, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const aboutRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 70, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: <Flame size={24} />,
      title: 'Tostado de Precisión',
      desc: 'Tostamos nuestros granos semanalmente en lotes pequeños para garantizar máxima frescura y resaltar notas complejas.'
    },
    {
      icon: <Leaf size={24} />,
      title: 'Origen Ético & Sostenible',
      desc: 'Trabajamos directamente con fincas cafetaleras respetando el comercio justo y prácticas agrícolas sostenibles.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Pasión por el Detalle',
      desc: 'Nuestros baristas certificados calibran cada extracción para ofrecer la taza de café perfecta en todo momento.'
    }
  ];

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-bg-overlay"></div>

      <div className="about-container-wrapper">
        <div className="heading-container">
          <span className="heading-subtitle">
            <Sparkles size={14} /> La Filosofía CoffeeSHOP
          </span>
          <h2 className="heading">
            Sobre <span className="highlight">Nosotros</span>
          </h2>
        </div>

        <div className="about-card glass-card" ref={cardRef}>
          <div className="about-badge">
            <ShieldCheck size={16} /> Certificación SCA +88 Pts
          </div>
          <h3>Nuestra Misión: Elevar tu Momento de Café</h3>
          <p>
            En CoffeeSHOP nacimos con la convicción de que el café no es solo una bebida, sino un ritual diario. 
            Seleccionamos únicamente granos Arábica 100% de especialidad de las mejores regiones cafetaleras del mundo.
          </p>

          <div className="about-grid">
            {highlights.map((item, index) => (
              <div key={index} className="about-item">
                <div className="about-item-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-checklist">
            <span><CheckCircle2 size={18} className="check-icon" /> Granos de Calidad Gourmet (+85 Puntos SCA)</span>
            <span><CheckCircle2 size={18} className="check-icon" /> Leches Vegetales & Variedad Orgánica</span>
            <span><CheckCircle2 size={18} className="check-icon" /> Repostería Artesanal Horneada al Día</span>
          </div>
        </div>
      </div>
    </section>
  );
};
