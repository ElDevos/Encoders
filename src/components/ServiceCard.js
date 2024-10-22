// components/ServiceCard.js
import { useNavigate } from 'react-router-dom';

function ServiceCard({ service }) {
  const { id, name, description, basePrice, image } = service;
  const navigate = useNavigate(); // Hook para navegación

  const handleViewDetails = () => {
    navigate(`/service/${id}`); // Redirige al detalle del servicio
  };

  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-card-image" />
      <div className="service-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="service-card-price">Precio desde: ${basePrice}</p>
        <button className="service-card-button" onClick={handleViewDetails}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
