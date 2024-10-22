import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import servicesData from '../data/ServicesData';
import { useCart } from '../context/CartContext'; // Contexto del carrito
import '../styles/ServiceDetail.css';
function ServiceDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = servicesData.find((s) => s.id === parseInt(id));
    setService(selectedService);
  }, [id]);

  const handleAddToCart = () => {
    if (service) {
      addToCart(service);
      alert(`${service.name} agregado al carrito.`);
      navigate('/cart');
    }
  };

  if (!service) return <p>Cargando...</p>;

  return (
    <div className="service-detail-container">
      <img src={service.image} alt={service.name} className="service-image" />
      <div className="service-info">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <h2>Precio: <span>${service.basePrice}</span></h2>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;
