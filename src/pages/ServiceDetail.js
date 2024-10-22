import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import servicesData from '../data/ServicesData';
import { useCart } from '../context/CartContext'; // Importa el contexto del carrito

function ServiceDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Usa el hook personalizado para acceder al carrito
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = servicesData.find((s) => s.id === parseInt(id));
    setService(selectedService);
  }, [id]);

  const handleAddToCart = () => {
    if (service) {
      addToCart(service); // Agrega el servicio al carrito
      alert(`${service.name} agregado al carrito.`);
    }
  };

  if (!service) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>Precio: ${service.basePrice}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}

export default ServiceDetail;
