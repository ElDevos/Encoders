const servicesData = [
  {
    id: 1,
    category: 'instalaciones',
    name: 'Instalación de Sistema de Riego por Goteo',
    description: 'Diseño e instalación completa de un sistema de riego por goteo.',
    basePrice: 500,
    pricePerUnit: 200,
    image: `${process.env.PUBLIC_URL}/images/riego.jpeg`,
  },
  {
    id: 2,
    category: 'veterinarios',
    name: 'Examinación General de Animales',
    description: 'Evaluación completa de la salud de animales de granja.',
    basePrice: 50,
    pricePerUnit: 20,
    image: `${process.env.PUBLIC_URL}/images/ExamG.jpeg`,
  },
  {
    id: 3,
    name: 'Instalación de Paneles Solares',
    description: 'Sistemas solares para energizar instalaciones agrícolas.',
    basePrice: 3000,
    pricePerUnit: 500,
    category: 'instalaciones',
    image: `${process.env.PUBLIC_URL}/images/solares.jpeg`,
  },
  {
    id: 4,
    name: 'Sistema de Almacenamiento de Agua',
    description: 'Tanques de almacenamiento y sistemas de distribución de agua.',
    basePrice: 1000,
    pricePerUnit: 100,
    category: 'instalaciones',
    image: `${process.env.PUBLIC_URL}/images/agua.jpeg`,
  },
  {
    id: 5,
    category: 'veterinarios',
    name: 'Vacunación de Animales',
    description: 'Vacunación rutinaria de animales para prevenir enfermedades.',
    basePrice: 20,
    image: `${process.env.PUBLIC_URL}/images/vacuan.png`,
  },
  {
    id: 6,
    category: 'veterinarios',
    name: 'Tratamiento de Enfermedades',
    description: 'Aplicación de antibióticos y tratamientos especializados.',
    basePrice: 100,
    image: `${process.env.PUBLIC_URL}/images/antibioticos.jpeg`,
  },
  {
    id: 7,
    category: 'veterinarios',
    name: 'Control de Parásitos',
    description: 'Desparasitación de animales para mantener la salud del ganado.',
    basePrice: 30,
    image: `${process.env.PUBLIC_URL}/images/parasitos.jpeg`,
  },
  {
    id: 8,
    category: 'veterinarios',
    name: 'Chequeo Previo a la Venta de Animales',
    description: 'Exámenes de salud para asegurar la calidad de los animales vendidos.',
    basePrice: 150,
    image: `${process.env.PUBLIC_URL}/images/chequeo.jpeg`,
  },
  {
    id: 9,
    category: 'veterinarios',
    name: 'Asistencia en Parto',
    description: 'Atención especializada para el parto seguro de animales.',
    basePrice: 200,
    image: `${process.env.PUBLIC_URL}/images/parto.webp`,
  },
  {
    id: 10,
    category: 'veterinarios',
    name: 'Implantación de Chips de Identificación',
    description: 'Colocación de chips electrónicos para rastreo y control de ganado.',
    basePrice: 50,
    image: `${process.env.PUBLIC_URL}/images/chips.jpeg`,
  },
  // Nuevos servicios para Asesorías
  {
    id: 11,
    category: 'asesorias',
    name: 'Asesoría en Cultivo de Café',
    description: 'Recomendaciones personalizadas para mejorar el cultivo de café.',
    basePrice: 300,
    image: `${process.env.PUBLIC_URL}/images/cafe.jpeg`,
  },
  {
    id: 12,
    category: 'asesorias',
    name: 'Asesoría en Control de Plagas',
    description: 'Evaluación y plan de control de plagas para cultivos.',
    basePrice: 200,
    image: `${process.env.PUBLIC_URL}/images/parasitos.jpeg`,
  },
  {
    id: 13,
    category: 'asesorias',
    name: 'Asesoría en Fertilización de Suelo',
    description: 'Análisis del suelo y estrategias de fertilización.',
    basePrice: 150,
    image: `${process.env.PUBLIC_URL}/images/ferti.jpg`,
  },
  // Nuevos servicios para Mantenimiento
  {
    id: 14,
    category: 'mantenimiento',
    name: 'Mantenimiento de Maquinaria Agrícola',
    description: 'Servicio completo de mantenimiento para maquinaria agrícola.',
    basePrice: 500,
    image: `${process.env.PUBLIC_URL}/images/transA.webp`,
  },
  {
    id: 15,
    category: 'mantenimiento',
    name: 'Reparación de Sistemas de Riego',
    description: 'Reparación y optimización de sistemas de riego.',
    basePrice: 250,
    image: `${process.env.PUBLIC_URL}/images/rereigo.jpeg`,
  },
  {
    id: 16,
    category: 'mantenimiento',
    name: 'Inspección de Infraestructura',
    description: 'Revisión completa de infraestructura agrícola.',
    basePrice: 300,
    image: `${process.env.PUBLIC_URL}/images/mante.webp`,
  },
  // Nuevos servicios para Transporte
  {
    id: 17,
    category: 'transporte',
    name: 'Transporte de Productos Agrícolas',
    description: 'Traslado de productos cosechados a los puntos de venta.',
    basePrice: 100,
    pricePerUnit: 10,
    image: `${process.env.PUBLIC_URL}/images/transA.webp`,
  },
  {
    id: 18,
    category: 'transporte',
    name: 'Transporte de Maquinaria',
    description: 'Transporte seguro de maquinaria agrícola a diferentes ubicaciones.',
    basePrice: 500,
    image: `${process.env.PUBLIC_URL}/images/maqui.jpeg`,
  },
  {
    id: 19,
    category: 'transporte',
    name: 'Logística de Insumos Agrícolas',
    description: 'Coordinación y entrega de insumos necesarios para la producción.',
    basePrice: 150,
    image: `${process.env.PUBLIC_URL}/images/logisica.jpeg`,
  },
];

export default servicesData;
