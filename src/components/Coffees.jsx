import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Eye, Star, Coffee as CoffeeIcon, Sparkles, ArrowUpDown, Shield } from 'lucide-react';
import { COFFEES_DATA } from '../data/coffeesData';
import { useCart } from '../context/CartContext';
import { CoffeeModal } from './CoffeeModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Coffees.css';

gsap.registerPlugin(ScrollTrigger);

export const Coffees = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [activeModalCoffee, setActiveModalCoffee] = useState(null);
  const { addToCart } = useCart();

  const gridRef = useRef(null);

  const categories = ['Todos', 'Espresso', 'Especialidad', 'Fríos', 'Repostería'];

  const filteredCoffees = COFFEES_DATA.filter((coffee) => {
    const matchesCategory =
      selectedCategory === 'Todos' || coffee.category === selectedCategory;
    const matchesSearch =
      coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (coffee.tastingNotes && coffee.tastingNotes.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="coffees" id="coffees">
      <div className="heading-container">
        <span className="heading-subtitle">
          <Sparkles size={14} /> Selección de la Casa
        </span>
        <h2 className="heading">
          Nuestros <span className="highlight">Cafés & Especialidades</span>
        </h2>
      </div>

      <div className="coffees-filter-wrapper">
        <div className="search-box glass-card">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por nombre, nota de cata..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-selector glass-card">
          <ArrowUpDown size={16} className="sort-icon" />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Orden Recomendado</option>
            <option value="price-low">Precio: Menor a Mayor</option>
            <option value="price-high">Precio: Mayor a Menor</option>
            <option value="rating">Mejor Calificados</option>
          </select>
        </div>
      </div>

      {filteredCoffees.length === 0 ? (
        <div className="no-results glass-card">
          <CoffeeIcon size={48} className="no-results-icon" />
          <h3>No encontramos resultados</h3>
          <p>Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
        </div>
      ) : (
        <div className="coffees-grid" ref={gridRef}>
          {filteredCoffees.map((coffee) => (
            <div key={coffee.id} className="coffee-card glass-card">
              <div className="card-badge-header">
                <span className="badge-tag">{coffee.badge}</span>
                {coffee.scaScore && (
                  <span className="sca-score-tag">
                    <Shield size={12} /> {coffee.scaScore}
                  </span>
                )}
              </div>

              <div className="coffees-img-wrapper" onClick={() => setActiveModalCoffee(coffee)}>
                <img src={coffee.image} alt={coffee.name} loading="lazy" />
                <div className="card-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalCoffee(coffee);
                    }}
                    title="Personalizar & Ver detalles"
                  >
                    <Eye size={20} /> Personalizar
                  </button>
                </div>
              </div>

              <div className="coffee-card-body">
                <div className="coffee-card-header">
                  <h4>{coffee.name}</h4>
                  <span className="coffee-price">${coffee.price.toFixed(2)}</span>
                </div>

                <div className="coffee-card-meta">
                  <span className="coffee-category-badge">{coffee.category}</span>
                  <span className="coffee-rating">
                    <Star size={14} fill="currentColor" /> {coffee.rating}
                  </span>
                </div>

                <p className="coffee-desc">{coffee.description}</p>

                {coffee.tastingNotes && (
                  <div className="tasting-tags">
                    {coffee.tastingNotes.slice(0, 3).map((note, i) => (
                      <span key={i} className="tasting-pill">{note}</span>
                    ))}
                  </div>
                )}

                <div className="coffee-card-footer">
                  <button
                    className="btn-secondary details-btn"
                    onClick={() => setActiveModalCoffee(coffee)}
                  >
                    Opciones
                  </button>
                  <button
                    className="btn-primary add-btn"
                    onClick={() => addToCart(coffee)}
                    aria-label={`Agregar ${coffee.name} al carrito`}
                  >
                    <ShoppingBag size={16} />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeModalCoffee && (
        <CoffeeModal
          coffee={activeModalCoffee}
          onClose={() => setActiveModalCoffee(null)}
        />
      )}
    </section>
  );
};
