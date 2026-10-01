import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Coffees } from './components/Coffees';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

const ToastNotification = () => {
  const { notification } = useCart();
  if (!notification) return null;

  return (
    <div className="toast-notification animate-fade-in">
      <CheckCircle2 size={20} className="toast-icon" />
      <span>{notification}</span>
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <About />
          <Coffees />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}

export default App;
