export const site = {
  name: 'El Legado Barbería',
  shortName: 'El Legado',
  tagline: 'Donde el estilo se convierte en legado.',
  description:
    'Barbería premium en Querétaro con 4 sucursales. Cortes de precisión, ritual de barba y una experiencia masculina de alto nivel. Agenda por WhatsApp.',
  url: 'https://publifix.github.io/el-legado-barberia',
  locale: 'es_MX',
  phoneDisplay: '442 614 7052',
  phoneE164: '+524426147052',
  whatsappNumber: '524426147052',
  email: 'ellegadobs@gmail.com',
  instagramHandle: '@barberiaellegado',
  instagramUrl: 'https://www.instagram.com/barberiaellegado',
  rating: 4.9,
  reviewCount: 700,
  branchCount: 4,
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  'Hola, me gustaría agendar una cita en El Legado Barbería.';

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sucursales', href: '#sucursales' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export type Service = {
  name: string;
  description: string;
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: 'Corte de Cabello',
    description:
      'Un corte de precisión adaptado a la forma de tu rostro y tu estilo de vida, con acabado en máquina y tijera para un resultado impecable.',
    icon: 'lucide:scissors',
  },
  {
    name: 'Corte para Niños',
    description:
      'La misma atención al detalle de un corte adulto, en un ambiente paciente y cómodo pensado para las primeras visitas a la barbería.',
    icon: 'lucide:baby',
  },
  {
    name: 'Clásico de Barba',
    description:
      'Perfilado, definición de línea y acabado con navaja caliente para una barba prolija que enmarca tu rostro con carácter.',
    icon: 'lucide:axe',
  },
  {
    name: 'Cabello y Rostro Pack',
    description:
      'Corte completo más tratamiento facial exprés: limpieza, hidratación y relajación para salir con la piel tan cuidada como el cabello.',
    icon: 'lucide:sparkles',
  },
  {
    name: 'Corte y Barba Pack',
    description:
      'Nuestra combinación más pedida: corte de autor y barba perfilada en una sola sesión, pensada para quienes no negocian el detalle.',
    icon: 'lucide:combine',
  },
  {
    name: 'Mascarilla Negra',
    description:
      'Limpieza profunda con carbón activado que remueve impurezas y deja la piel del rostro visiblemente renovada y descongestionada.',
    icon: 'lucide:sparkle',
  },
  {
    name: 'Ritual El Legado',
    description:
      'Nuestra experiencia insignia: corte, barba y tratamiento facial en un solo ritual pausado, diseñado para quienes buscan mucho más que un corte.',
    icon: 'lucide:crown',
  },
  {
    name: 'Ritual El Legado Pack',
    description:
      'La experiencia completa llevada al máximo nivel: ritual integral más cuidados adicionales para una jornada de bienestar de principio a fin.',
    icon: 'lucide:gem',
  },
];

export type Branch = {
  name: string;
  address: string;
  mapsQuery: string;
  image: string;
};

export const branches: Branch[] = [
  {
    name: 'Jardines de la Hacienda',
    address:
      'José Antonio García Jimeno 1001, Jardines de la Hacienda, Querétaro, Qro. 76180',
    mapsQuery:
      'José Antonio García Jimeno 1001, Jardines de la Hacienda, Querétaro, Qro. 76180',
    image: 'barberia-3',
  },
  {
    name: 'Los Arcos',
    address:
      'Blvd. Bernardo Quintana Arrioja 12 Planta Baja, Calesa 2da Sección, Santiago de Querétaro, Qro. 76020',
    mapsQuery:
      'Blvd. Bernardo Quintana Arrioja 12, Calesa 2da Sección, Santiago de Querétaro, Qro. 76020',
    image: 'barberia-6',
  },
  {
    name: 'Sonterra',
    address:
      'Avenida Sonterra, Libramiento Norponiente Km. 10.5, Querétaro, Qro. 76230',
    mapsQuery: 'Avenida Sonterra, Libramiento Norponiente Km. 10.5, Querétaro, Qro. 76230',
    image: 'barberia-2',
  },
  {
    name: 'El Mirador',
    address:
      'Prolongación Constituyentes Oriente, Residencial del Parque, El Marqués, Qro. 76246',
    mapsQuery:
      'Prolongación Constituyentes Oriente, Residencial del Parque, El Marqués, Qro. 76246',
    image: 'barberia-1',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Excelente servicio, Mike te escucha, te asesora y recomienda el corte ideal para tu estilo.',
    author: 'Cliente El Legado',
  },
  {
    quote: 'Todo el personal te hace sentir cómodo desde que llegas.',
    author: 'Cliente El Legado',
  },
  {
    quote:
      'Buen ambiente, excelente atención y recomendaciones para cuidar tu cabello.',
    author: 'Cliente El Legado',
  },
  {
    quote:
      'Siempre salgo satisfecho, la experiencia completa vale totalmente la pena.',
    author: 'Cliente El Legado',
  },
];

export type WhyBlock = {
  title: string;
  description: string;
  icon: string;
};

export const whyChooseUs: WhyBlock[] = [
  {
    title: 'Barberos especializados',
    description:
      'Un equipo formado en técnica clásica y tendencias actuales, que domina cada corte, línea y acabado.',
    icon: 'lucide:award',
  },
  {
    title: 'Atención personalizada',
    description:
      'Cada visita comienza con una asesoría real sobre tu estilo, tu tipo de cabello y lo que buscas proyectar.',
    icon: 'lucide:user-check',
  },
  {
    title: 'Ambiente premium',
    description:
      'Espacios contemporáneos de madera natural y acero negro, pensados para que la espera sea parte de la experiencia.',
    icon: 'lucide:armchair',
  },
  {
    title: 'Productos profesionales',
    description:
      'Trabajamos exclusivamente con línea profesional para un resultado y una sensación que duran hasta tu próxima visita.',
    icon: 'lucide:flask-conical',
  },
];
