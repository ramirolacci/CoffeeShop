import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquarePlus, UserCheck, X, Sparkles, Quote } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/coffeesData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Reviews.css';

gsap.registerPlugin(ScrollTrigger);

export const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(INITIAL_REVIEWS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Cliente Frecuente',
    rating: 5,
    comment: '',
  });

  const reviewsRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: reviewsRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, reviewsRef);

    return () => ctx.revert();
  }, []);

  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const createdReview = {
      id: Date.now(),
      name: newReview.name,
      role: newReview.role,
      rating: Number(newReview.rating),
      date: 'Justo ahora',
      comment: newReview.comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    };

    setReviewsList([createdReview, ...reviewsList]);
    setIsAddModalOpen(false);
    setNewReview({ name: '', role: 'Cliente Frecuente', rating: 5, comment: '' });
  };

  return (
    <section className="reviews" id="reviews" ref={reviewsRef}>
      <div className="reviews-header-container">
        <div>
          <span className="heading-subtitle">
            <Sparkles size={14} /> Experiencias Reales
          </span>
          <h2 className="heading">
            Reseñas de <span className="highlight">Nuestros Clientes</span>
          </h2>
        </div>

        <button
          className="btn-primary add-review-trigger"
          onClick={() => setIsAddModalOpen(true)}
        >
          <MessageSquarePlus size={18} />
          Escribir una Reseña
        </button>
      </div>

      <div className="reviews-grid" ref={gridRef}>
        {reviewsList.map((review) => (
          <div key={review.id} className="review-card glass-card">
            <Quote size={36} className="quote-icon" />

            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < review.rating ? 'star-filled' : 'star-empty'}
                  fill={i < review.rating ? '#fbbf24' : 'none'}
                />
              ))}
            </div>

            <p className="review-text">"{review.comment}"</p>

            <div className="reviewer-profile">
              <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
              <div>
                <h4>{review.name}</h4>
                <p className="reviewer-role">{review.role}</p>
              </div>
              <span className="review-date">{review.date}</span>
            </div>

            <div className="verified-tag">
              <UserCheck size={13} /> Cliente Verificado
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Modal */}
      {isAddModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div className="add-review-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsAddModalOpen(false)}>
              <X size={22} />
            </button>

            <h3>Escribe tu Reseña 🌟</h3>
            <p className="modal-subtitle">Comparte tu opinión sobre nuestros granos y servicio barista.</p>

            <form onSubmit={handleAddReviewSubmit}>
              <div className="form-group">
                <label>Tu Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Ana Lucía"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Calificación</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5/5) Excelente</option>
                  <option value={4}>⭐⭐⭐⭐ (4/5) Muy Bueno</option>
                  <option value={3}>⭐⭐⭐ (3/5) Aceptable</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tu Comentario</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detalla tu experiencia..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-review-btn">
                Publicar Reseña
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
