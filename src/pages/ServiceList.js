// pages/ServiceList.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/ServicesData'; // Datos simulados

function ServiceList() {
  const { category } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Filtrar servicios por categoría
    const filteredServices = servicesData.filter(service => service.category === category);
    setServices(filteredServices);
  }, [category]);

  return (
    <div>
      <h2>Servicios de {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="service-list">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
