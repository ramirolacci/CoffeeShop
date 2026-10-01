import React, { useState } from 'react';
import { X, ShoppingBag, Star, Clock, Flame, Globe, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CoffeeModal.css';

export const CoffeeModal = ({ coffee, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!coffee) return null;

  const handleAddToCart = () => {
    addToCart(coffee, quantity);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="coffee-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={24} />
        </button>

        <div className="modal-content-grid">
          <div className="modal-image-wrapper">
            <img src={coffee.image} alt={coffee.name} />
            <span className="modal-badge">{coffee.badge}</span>
          </div>

          <div className="modal-details">
            <span className="coffee-category-tag">{coffee.category}</span>
            <h2>{coffee.name}</h2>
            
            <div className="modal-rating">
              <Star size={18} className="star-icon" fill="currentColor" />
              <span className="rating-num">{coffee.rating}</span>
              <span className="reviews-count">({coffee.reviewsCount} reseñas)</span>
            </div>

            <p className="coffee-desc">{coffee.description}</p>

            <div className="coffee-specs">
              <div className="spec-item">
                <Globe size={18} />
                <div>
                  <small>Origen</small>
                  <p>{coffee.origin}</p>
                </div>
              </div>
              <div className="spec-item">
                <Clock size={18} />
                <div>
                  <small>Tiempo Prep.</small>
                  <p>{coffee.prepTime}</p>
                </div>
              </div>
              <div className="spec-item">
                <Flame size={18} />
                <div>
                  <small>Intensidad</small>
                  <p>{coffee.intensity}</p>
                </div>
              </div>
            </div>

            {coffee.tastingNotes && (
              <div className="tasting-notes">
                <h4>Notas de Cata:</h4>
                <div className="tags-wrapper">
                  {coffee.tastingNotes.map((note, index) => (
                    <span key={index} className="note-tag">{note}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-footer">
              <div className="modal-price">
                <small>Precio</small>
                <h3>${(coffee.price * quantity).toFixed(2)}</h3>
              </div>

              <div className="quantity-selector">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>

              <button className="btn-primary add-cart-btn" onClick={handleAddToCart}>
                <ShoppingBag size={18} />
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
