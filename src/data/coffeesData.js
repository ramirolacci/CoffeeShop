export const COFFEES_DATA = [
  {
    id: 'coffee-1',
    name: 'Espresso Supremo',
    category: 'Espresso',
    price: 3.50,
    rating: 4.9,
    reviewsCount: 128,
    prepTime: '3-5 min',
    intensity: 'Fuerte (5/5)',
    origin: 'Granos Selección Huila, Colombia',
    description: 'Un shot concentrado de notas intensas a chocolate amargo, frutos secos y avellana tostada con una crema densa y persistente.',
    image: '/imgcoffee/coffee1.png',
    badge: 'Más Vendido',
    tastingNotes: ['Chocolate Negro', 'Avellanas', 'Caramelo Oscuro']
  },
  {
    id: 'coffee-2',
    name: 'Cappuccino Velvet Gold',
    category: 'Especialidad',
    price: 4.80,
    rating: 4.8,
    reviewsCount: 95,
    prepTime: '4-6 min',
    intensity: 'Medio (3/5)',
    origin: 'Mezcla Arábica Etiopía & Brasil',
    description: 'Espresso rico cubierto con una capa sedosa de leche micro-vaporizada y un toque de canela orgánica espolvoreada.',
    image: '/imgcoffee/coffee2.png',
    badge: 'Recomendación del Barista',
    tastingNotes: ['Cremoso', 'Canela Orgánica', 'Vainilla']
  },
  {
    id: 'coffee-3',
    name: 'Cold Brew Vainilla Artisan',
    category: 'Fríos',
    price: 5.20,
    rating: 4.9,
    reviewsCount: 110,
    prepTime: '2 min',
    intensity: 'Suave (2/5)',
    origin: 'Extracción en frío durante 18 Horas',
    description: 'Macerado lentamente en agua fría durante 18 horas para extraer una acidez sedosa y dulce, servido con crema dulce de vainilla.',
    image: '/imgcoffee/coffee3.png',
    badge: 'Refrescante',
    tastingNotes: ['Vainilla Bourbon', 'Nuez Moscada', 'Acidez Balanceada']
  },
  {
    id: 'coffee-4',
    name: 'Caramel Macchiato Royale',
    category: 'Especialidad',
    price: 5.50,
    rating: 4.7,
    reviewsCount: 84,
    prepTime: '5 min',
    intensity: 'Medio (3/5)',
    origin: 'Espresso Arábica 100% Orgánico',
    description: 'Leche manchada con espresso intenso y finalizada con hilos dorados de salsa artesanal de caramelo salado.',
    image: '/imgcoffee/coffee1.png',
    badge: 'Popular',
    tastingNotes: ['Caramelo Salado', 'Vainilla', 'Crema Batida']
  },
  {
    id: 'coffee-5',
    name: 'Iced Latte Avellana',
    category: 'Fríos',
    price: 4.90,
    rating: 4.8,
    reviewsCount: 67,
    prepTime: '3 min',
    intensity: 'Medio (3/5)',
    origin: 'Grano Arábica de Finca',
    description: 'Espresso doble servido sobre hielo, leche fresca de almendras o entera y jarabe artesanal de avellana tostada.',
    image: '/imgcoffee/coffee2.png',
    badge: 'Verano',
    tastingNotes: ['Avellana Tostada', 'Hielo Frappé', 'Leche Cremosa']
  },
  {
    id: 'coffee-6',
    name: 'Croissant Francés de Almendras',
    category: 'Repostería',
    price: 3.90,
    rating: 5.0,
    reviewsCount: 142,
    prepTime: 'Listo para servir',
    intensity: 'Complemento Ideal',
    origin: 'Horneo Diario con Mantequilla de Normandía',
    description: 'Hojaldre crujiente por fuera y tierno por dentro, relleno de frangipane y cubierto de almendras laminadas y azúcar impalpable.',
    image: '/imgcoffee/coffee3.png',
    badge: 'Horneo Fresco',
    tastingNotes: ['Mantequilla Fresca', 'Almendras', 'Hojaldre Crujiente']
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Valentina Rossi',
    role: 'Amante del Café',
    rating: 5,
    date: 'Hace 2 días',
    comment: '¡El Cappuccino Velvet es insuperable! El tostado de los granos tiene ese equilibrio perfecto entre dulzor y amargor. El ambiente y la atención son de 10.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Barista Aficionado',
    rating: 5,
    date: 'Hace 5 días',
    comment: 'Como conocedor de métodos de extracción, su Cold Brew de 18 horas es pura poesía. Sin amargor agresivo y con notas a vainilla muy marcadas.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Sofia Benítez',
    role: 'Diseñadora UX',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Es mi lugar favorito para trabajar por las tardes. El espresso supremo me da toda la energía necesaria y los croissants horneados al día son increíbles.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Mateo Fernández',
    role: 'Cliente Frecuente',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'La calidad del servicio y la velocidad en la entrega son impecables. Si no has probado el Caramel Macchiato Royale, te estás perdiendo de algo grande.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];
