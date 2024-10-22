// components/ServiceCard.js
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Precio desde: ${service.basePrice}</p>
      <Link to={`/service/${service.id}`}>Ver Detalles</Link>
    </div>
  );
}

export default ServiceCard;
