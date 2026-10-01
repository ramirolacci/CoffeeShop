import React from 'react';
import { Flame, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About = () => {
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
    <section className="about" id="about">
      <div className="about-overlay"></div>
      <div className="about-container">
        <h2 className="heading">Sobre <span className="highlight">Nosotros</span></h2>
        
        <div className="about-card glass-card">
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
            <span><CheckCircle2 size={16} className="check-icon" /> Granos de Calidad Gourmet (+85 Puntos SCA)</span>
            <span><CheckCircle2 size={16} className="check-icon" /> Leches Vegetales & Variedad Orgánica</span>
            <span><CheckCircle2 size={16} className="check-icon" /> Repostería Artesanal Horneada al Día</span>
          </div>
        </div>
      </div>
    </section>
  );
};
