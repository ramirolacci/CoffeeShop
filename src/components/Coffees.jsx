import React, { useState } from 'react';
import { Search, ShoppingBag, Eye, Star, Coffee as CoffeeIcon } from 'lucide-react';
import { COFFEES_DATA } from '../data/coffeesData';
import { useCart } from '../context/CartContext';
import { CoffeeModal } from './CoffeeModal';
import './Coffees.css';

export const Coffees = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCoffee, setActiveModalCoffee] = useState(null);
  const { addToCart } = useCart();

  const categories = ['Todos', 'Espresso', 'Especialidad', 'Fríos', 'Repostería'];

  const filteredCoffees = COFFEES_DATA.filter((coffee) => {
    const matchesCategory =
      selectedCategory === 'Todos' || coffee.category === selectedCategory;
    const matchesSearch =
      coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="coffees" id="coffees">
      <h2 className="heading">Nuestros <span className="highlight">Cafés & Especialidades</span></h2>

      <div className="coffees-filter-container">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar tu café favorito..."
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
      </div>

      {filteredCoffees.length === 0 ? (
        <div className="no-results glass-card">
          <CoffeeIcon size={48} className="no-results-icon" />
          <h3>No se encontraron cafés</h3>
          <p>Prueba con otros términos de búsqueda o selecciona otra categoría.</p>
        </div>
      ) : (
        <div className="coffees-container">
          {filteredCoffees.map((coffee) => (
            <div key={coffee.id} className="coffees-box glass-card">
              <div className="coffees-img-wrapper">
                <img src={coffee.image} alt={coffee.name} />
                <span className="badge-tag">{coffee.badge}</span>
                <div className="card-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={() => setActiveModalCoffee(coffee)}
                    title="Ver detalles"
                  >
                    <Eye size={22} />
                  </button>
                </div>
              </div>

              <div className="coffees-info">
                <div className="coffees-header">
                  <h4>{coffee.name}</h4>
                  <span className="coffees-price">${coffee.price.toFixed(2)}</span>
                </div>

                <div className="coffees-meta">
                  <span className="coffee-cat">{coffee.category}</span>
                  <span className="coffee-rating">
                    <Star size={14} fill="currentColor" /> {coffee.rating}
                  </span>
                </div>

                <p>{coffee.description}</p>

                <div className="coffees-card-footer">
                  <button
                    className="btn-secondary view-details-btn"
                    onClick={() => setActiveModalCoffee(coffee)}
                  >
                    Detalles
                  </button>
                  <button
                    className="btn-primary add-btn"
                    onClick={() => addToCart(coffee)}
                    aria-label={`Agregar ${coffee.name} al carrito`}
                  >
                    <ShoppingBag size={18} />
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
