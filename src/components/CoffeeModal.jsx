import React, { useState } from 'react';
import { X, ShoppingBag, Star, Clock, Flame, Globe, Plus, Minus, Shield, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CoffeeModal.css';

export const CoffeeModal = ({ coffee, onClose }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(coffee?.sizes ? coffee.sizes[0] : null);
  const [selectedMilk, setSelectedMilk] = useState(coffee?.milks ? coffee.milks[0] : null);
  const [quantity, setQuantity] = useState(1);

  if (!coffee) return null;

  const basePrice = coffee.price;
  const sizeAddOn = selectedSize ? selectedSize.priceAdd || 0 : 0;
  const milkAddOn = selectedMilk && selectedMilk.includes('+0.50$') ? 0.50 : selectedMilk && selectedMilk.includes('+0.60$') ? 0.60 : 0;
  const unitPrice = basePrice + sizeAddOn + milkAddOn;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const customizedItem = {
      ...coffee,
      id: `${coffee.id}-${selectedSize ? selectedSize.id : 'std'}-${selectedMilk || 'default'}`,
      name: `${coffee.name} ${selectedSize ? `(${selectedSize.label})` : ''}`,
      price: unitPrice,
      customOptions: {
        size: selectedSize ? selectedSize.label : null,
        milk: selectedMilk || null,
      },
    };

    addToCart(customizedItem, quantity);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="coffee-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={22} />
        </button>

        <div className="modal-grid">
          <div className="modal-visual-side">
            <div className="modal-img-container">
              <img src={coffee.image} alt={coffee.name} />
            </div>
            <div className="modal-badge-row">
              <span className="badge-tag">{coffee.badge}</span>
              {coffee.scaScore && (
                <span className="sca-tag">
                  <Shield size={14} /> {coffee.scaScore}
                </span>
              )}
            </div>
          </div>

          <div className="modal-content-side">
            <span className="modal-category">{coffee.category}</span>
            <h2>{coffee.name}</h2>

            <div className="modal-rating">
              <Star size={16} fill="currentColor" className="star-icon" />
              <span className="rating-num">{coffee.rating}</span>
              <span className="reviews-count">({coffee.reviewsCount} opiniones)</span>
            </div>

            <p className="modal-description">{coffee.description}</p>

            <div className="modal-specs">
              <div className="spec-card">
                <Globe size={16} className="spec-icon" />
                <div>
                  <small>Origen</small>
                  <p>{coffee.origin}</p>
                </div>
              </div>
              <div className="spec-card">
                <Clock size={16} className="spec-icon" />
                <div>
                  <small>Preparación</small>
                  <p>{coffee.prepTime}</p>
                </div>
              </div>
              <div className="spec-card">
                <Flame size={16} className="spec-icon" />
                <div>
                  <small>Intensidad</small>
                  <p>{coffee.intensity}</p>
                </div>
              </div>
            </div>

            {/* Sizes Options */}
            {coffee.sizes && (
              <div className="option-section">
                <h4>Selecciona el Tamaño:</h4>
                <div className="option-grid">
                  {coffee.sizes.map((sz) => (
                    <button
                      key={sz.id}
                      className={`option-btn ${selectedSize?.id === sz.id ? 'active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      <span>{sz.label}</span>
                      {sz.priceAdd > 0 && <small>+${sz.priceAdd.toFixed(2)}</small>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Milk Options */}
            {coffee.milks && (
              <div className="option-section">
                <h4>Tipo de Leche / Bebida:</h4>
                <div className="option-pills">
                  {coffee.milks.map((milk, idx) => (
                    <button
                      key={idx}
                      className={`pill-btn ${selectedMilk === milk ? 'active' : ''}`}
                      onClick={() => setSelectedMilk(milk)}
                    >
                      {selectedMilk === milk && <Check size={14} />}
                      {milk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer & Actions */}
            <div className="modal-footer-action">
              <div className="total-display">
                <small>Total a Pagar</small>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>

              <div className="quantity-picker">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>

              <button className="btn-primary modal-add-btn" onClick={handleAddToCart}>
                <ShoppingBag size={18} />
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
