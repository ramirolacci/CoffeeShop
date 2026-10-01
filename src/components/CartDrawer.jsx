import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle, Sparkles, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'card',
  });

  if (!isCartOpen) return null;

  const shippingFee = totalPrice > 0 ? 2.50 : 0.00;
  const grandTotal = totalPrice + shippingFee;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderCompleted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e4b381', '#d69e62', '#ffffff', '#fbbf24']
      });
    } catch (err) {
      console.log('Confetti effect');
    }

    setTimeout(() => {
      clearCart();
    }, 1200);
  };

  const closeAll = () => {
    setIsCheckoutModalOpen(false);
    setOrderCompleted(false);
    closeCart();
  };

  return (
    <>
      <div className="cart-backdrop" onClick={closeCart}>
        <div className="cart-drawer glass-card" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <div className="cart-title">
              <ShoppingBag size={22} className="cart-icon" />
              <h3>Tu Carrito Barista</h3>
              <span className="cart-count">({cart.length})</span>
            </div>
            <button className="cart-close-btn" onClick={closeCart} aria-label="Cerrar carrito">
              <X size={22} />
            </button>
          </div>

          <div className="cart-body">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={64} className="empty-icon" />
                <h4>Tu carrito está vacío</h4>
                <p>Explora nuestras especialidades y elige tu café favorito.</p>
                <button className="btn-primary" onClick={closeCart}>
                  Ver Menú de Cafés
                </button>
              </div>
            ) : (
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />

                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      
                      {item.customOptions && (item.customOptions.size || item.customOptions.milk) && (
                        <div className="cart-custom-specs">
                          {item.customOptions.size && <span>{item.customOptions.size}</span>}
                          {item.customOptions.milk && <span>• {item.customOptions.milk}</span>}
                        </div>
                      )}

                      <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>

                      <div className="cart-item-controls">
                        <div className="qty-buttons">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Disminuir cantidad"
                          >
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Aumentar cantidad"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          title="Eliminar producto"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío estimado:</span>
                <span>${shippingFee.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>

              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Vaciar
                </button>
                <button
                  className="btn-primary checkout-btn"
                  onClick={() => setIsCheckoutModalOpen(true)}
                >
                  Proceder al Pago
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="modal-backdrop" onClick={closeAll}>
          <div className="checkout-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsCheckoutModalOpen(false)}>
              <X size={22} />
            </button>

            {!orderCompleted ? (
              <form onSubmit={handleCheckoutSubmit} className="checkout-form">
                <h3>Finalizar Pedido ☕</h3>
                <p className="checkout-subtitle">Completa tus datos para recibir tu café de especialidad recien hecho.</p>

                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofia Martínez"
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    placeholder="sofia@ejemplo.com"
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Dirección de Entrega</label>
                  <input
                    type="text"
                    required
                    placeholder="Calle Principal #123, Depto 4B"
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Método de Pago</label>
                  <select
                    value={checkoutForm.paymentMethod}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
                  >
                    <option value="card">💳 Tarjeta de Crédito / Débito</option>
                    <option value="cash">💵 Efectivo al Entregar</option>
                    <option value="transfer">📱 Transferencia QR</option>
                  </select>
                </div>

                <div className="checkout-order-summary">
                  <span>Total Final: <strong>${grandTotal.toFixed(2)}</strong></span>
                </div>

                <button type="submit" className="btn-primary submit-checkout-btn">
                  Confirmar y Pagar
                </button>
              </form>
            ) : (
              <div className="order-success-screen">
                <div className="success-icon-wrapper">
                  <CheckCircle size={64} className="success-icon" />
                  <Sparkles size={32} className="sparkle-icon" />
                </div>
                <h2>¡Pedido Confirmado! 🎉</h2>
                <p>
                  Muchas gracias por tu compra, <strong>{checkoutForm.name || 'Cliente'}</strong>. 
                  Tu orden está en preparación por nuestro barista certificado y estará en tu puerta en 20-30 minutos.
                </p>
                <div className="order-number-badge">
                  Código de Rastreo: #{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button className="btn-primary" onClick={closeAll}>
                  Volver a la Tienda
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
