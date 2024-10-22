// pages/ServiceList.js
import { useParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/ServicesData'; 

function ServiceList() {
  const { category } = useParams(); // Captura la categoría de la URL

  // Filtra los servicios según la categoría de la URL
  const filteredServices = servicesData.filter(
    (service) => service.category === category
  );

  return (
    <div className="service-list-container">
      <h1>Servicios de {capitalize(category)}</h1>
      <div className="service-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p>No hay servicios disponibles para esta categoría.</p>
        )}
      </div>
    </div>
  );
}

// Función auxiliar para capitalizar el texto
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default ServiceList;
