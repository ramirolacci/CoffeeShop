export const COFFEES_DATA = [
  {
    id: 'coffee-1',
    name: 'Espresso Supremo Huila',
    category: 'Espresso',
    price: 3.50,
    rating: 4.9,
    reviewsCount: 142,
    prepTime: '3-4 min',
    intensity: 'Intenso (5/5)',
    scaScore: '89 Pts SCA',
    origin: 'Huila, Colombia • 1,800m',
    process: 'Lavado Artesanal',
    roastLevel: 'Tueste Medio Oscuro',
    description: 'Shot doble concentrado con cremosidad dorada persistente. Presenta notas vibrantes a chocolate amargo, avellana tostada y caramelo oscuro.',
    image: '/imgcoffee/coffee1.png',
    badge: 'Más Vendido',
    tastingNotes: ['Chocolate Negro', 'Avellana', 'Caramelo'],
    sizes: [
      { id: 'single', label: 'Single Shot (1oz)', priceAdd: 0 },
      { id: 'double', label: 'Doble Shot (2oz)', priceAdd: 1.00 },
      { id: 'triple', label: 'Ristretto Triple (3oz)', priceAdd: 1.80 }
    ]
  },
  {
    id: 'coffee-2',
    name: 'Cappuccino Velvet Gold',
    category: 'Especialidad',
    price: 4.80,
    rating: 4.9,
    reviewsCount: 118,
    prepTime: '4-5 min',
    intensity: 'Equilibrado (3/5)',
    scaScore: '87 Pts SCA',
    origin: 'Yirgacheffe, Etiopía & Brasil',
    process: 'Natural Macerado',
    roastLevel: 'Tueste Medio',
    description: 'Base de espresso doble enriquecida con microespuma de leche sedosa velvet y una delicada lluvia de canela orgánica de Ceylán.',
    image: '/imgcoffee/coffee2.png',
    badge: 'Insignia Barista',
    tastingNotes: ['Canela Orgánica', 'Vainilla', 'Mantequilla'],
    sizes: [
      { id: 'reg', label: 'Mediano (12oz)', priceAdd: 0 },
      { id: 'large', label: 'Grande (16oz)', priceAdd: 0.90 }
    ],
    milks: ['Leche Entera', 'Leche de Almendras (+0.50$)', 'Leche de Avena (+0.60$)', 'Sin Lactosa']
  },
  {
    id: 'coffee-3',
    name: 'Cold Brew Vainilla Artisan',
    category: 'Fríos',
    price: 5.20,
    rating: 4.9,
    reviewsCount: 156,
    prepTime: 'Listo al instante',
    intensity: 'Suave & Sedoso (2/5)',
    scaScore: '90 Pts SCA',
    origin: 'Antigua, Guatemala',
    process: 'Maceración en Frío 18h',
    roastLevel: 'Tueste Claro Especial',
    description: 'Extracción en frío durante 18 horas ininterrumpidas. Dulzor natural sin amargor, infusionado con vainilla pura de Bourbon y hielo cristalino.',
    image: '/imgcoffee/coffee3.png',
    badge: 'Técnica 18 Horas',
    tastingNotes: ['Vainilla Bourbon', 'Nuez Moscada', 'Cacao Suave'],
    sizes: [
      { id: 'med', label: 'Mediano (12oz)', priceAdd: 0 },
      { id: 'large', label: 'Grande (16oz)', priceAdd: 0.80 }
    ]
  },
  {
    id: 'coffee-4',
    name: 'Caramel Macchiato Royale',
    category: 'Especialidad',
    price: 5.60,
    rating: 4.8,
    reviewsCount: 98,
    prepTime: '5 min',
    intensity: 'Medio Dulce (3/5)',
    scaScore: '86 Pts SCA',
    origin: 'Valle Central, Costa Rica',
    process: 'Honey Dorado',
    roastLevel: 'Tueste Medio',
    description: 'Leche texturizada manchada suavemente con espresso espresso de origen, coronada con hilos artesanales de caramelo salado de la casa.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito Dulce',
    tastingNotes: ['Caramelo Salado', 'Vainilla', 'Crema Batida'],
    sizes: [
      { id: 'reg', label: 'Mediano (12oz)', priceAdd: 0 },
      { id: 'large', label: 'Grande (16oz)', priceAdd: 0.90 }
    ],
    milks: ['Leche Entera', 'Leche de Almendras (+0.50$)', 'Leche de Avena (+0.60$)']
  },
  {
    id: 'coffee-5',
    name: 'Iced Matcha Latte Ceremonial',
    category: 'Fríos',
    price: 5.90,
    rating: 4.9,
    reviewsCount: 84,
    prepTime: '3-4 min',
    intensity: 'Herbal Suave (2/5)',
    scaScore: 'Grado Ceremonial A+',
    origin: 'Uji, Kioto, Japón',
    process: 'Sombreado & Molido en Piedra',
    roastLevel: 'Verde Ceremonial',
    description: 'Matcha japonés de primer brote, batido tradicionalmente con chasen de bambú y servido helado sobre leche vegetal cremosa.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    badge: 'Superfood',
    tastingNotes: ['Té Verde Fresco', 'Umami Suave', 'Leche de Almendras'],
    sizes: [
      { id: 'reg', label: 'Mediano (12oz)', priceAdd: 0 },
      { id: 'large', label: 'Grande (16oz)', priceAdd: 0.90 }
    ],
    milks: ['Leche de Avena', 'Leche de Almendras', 'Leche Entera']
  },
  {
    id: 'coffee-6',
    name: 'Flat White Australiano',
    category: 'Espresso',
    price: 4.50,
    rating: 4.8,
    reviewsCount: 112,
    prepTime: '3-4 min',
    intensity: 'Fuerte & Cremoso (4/5)',
    scaScore: '88 Pts SCA',
    origin: 'Sidama, Etiopía',
    process: 'Lavado Orgánico',
    roastLevel: 'Tueste Medio',
    description: 'Doble ristretto concentrado fundido con una fina capa de leche microvaporizada sin espuma gruesa. Sabor a café denso y sedoso.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    badge: 'Intenso & Sedoso',
    tastingNotes: ['Flor de Azahar', 'Chocolate de Leche', 'Ciruela'],
    sizes: [
      { id: 'standard', label: 'Taza Única (6oz)', priceAdd: 0 }
    ]
  },
  {
    id: 'coffee-7',
    name: 'Croissant Francés de Almendras',
    category: 'Repostería',
    price: 4.20,
    rating: 5.0,
    reviewsCount: 189,
    prepTime: 'Horneado Hoy',
    intensity: 'Crujiente Dulce',
    scaScore: 'Mantequilla Normandía',
    origin: 'Receta Artesanal Francesa',
    process: 'Laminado 72 Horas',
    roastLevel: 'Dorado Crujiente',
    description: 'Hojaldre 100% mantequilla de Normandía, relleno de crema frangipane de almendras y decorado con láminas tostadas y azúcar impalpable.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    badge: 'Horneo Diario',
    tastingNotes: ['Mantequilla', 'Frangipane', 'Almendra Tostada']
  },
  {
    id: 'coffee-8',
    name: 'Affogato al Caffè Artisanal',
    category: 'Especialidad',
    price: 5.00,
    rating: 4.9,
    reviewsCount: 76,
    prepTime: '2 min',
    intensity: 'Postre & Espresso (4/5)',
    scaScore: 'Gelato Fior di Latte',
    origin: 'Espresso Huila & Gelato Italiano',
    process: 'Extracción Caliente sobre Helado',
    roastLevel: 'Tueste Espresso',
    description: 'Una bola de helado artesanal de fior di latte o vainilla bañado al momento con un espresso caliente reciñen extraído.',
    image: 'https://images.unsplash.com/photo-1592321675774-3de57f36f407?auto=format&fit=crop&w=800&q=80',
    badge: 'Postre Barista',
    tastingNotes: ['Espresso Caliente', 'Helado Cremoso', 'Contraste Térmico']
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Valentina Rossi',
    role: 'Sommelier de Café',
    rating: 5,
    date: 'Hace 2 días',
    comment: '¡El Cappuccino Velvet es insuperable! El equilibrio entre el dulzor natural de la leche y la acidez compleja de los granos etíopes es sublime.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Barista Certificado SCA',
    rating: 5,
    date: 'Hace 5 días',
    comment: 'Como barismo profesional, valoro muchísimo la extracción en frío de 18 horas. Su Cold Brew no tiene ninguna nota agresiva y la presencia de vainilla Bourbon es natural.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Sofia Benítez',
    role: 'Diseñadora UX & Frecuente',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'El diseño de la experiencia y la calidez del lugar son de otro mundo. Pedir mi Flat White con un croissant recién salido del horno es mi ritual infaltable.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Mateo Fernández',
    role: 'Amante del Espresso',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'La velocidad de la entrega y la calidad empaquetada mantienen la crema del espresso intacta. Recomendado al 1000%.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS_DATA = [
  {
    q: '¿De dónde provienen sus granos de café?',
    a: 'Importamos granos 100% Arábica de especialidad de micro-lotes certificados en Colombia (Huila), Etiopía (Yirgacheffe), Guatemala y Costa Rica con puntuaciones superiores a 85 puntos SCA.'
  },
  {
    q: '¿Cómo garantizan la frescura del tostado?',
    a: 'Tostamos artesanalmente en pequeños lotes dos veces por semana en nuestra propia tostaduría para garantizar que recibas tu café en la ventana óptima de desgasificación y aroma.'
  },
  {
    q: '¿Ofrecen opciones para dietas veganas o sin lactosa?',
    a: '¡Por supuesto! Disponemos de leches vegetales orgánicas de almendras y avena, además de leche sin lactosa y opciones de repostería vegana y sin gluten.'
  },
  {
    q: '¿Cuánto tarda la entrega a domicilio?',
    a: 'Nuestros envíos dentro de la zona urbana tardan entre 20 y 35 minutos. El café viaja en empaques térmicos diseñados para mantener la temperatura y crema intactas.'
  }
];
