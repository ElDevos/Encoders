// pages/ServiceCustomization.js
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import servicesData from '../data/ServicesData';

function ServiceCustomization() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [customization, setCustomization] = useState({
    size: 1,
    condition: 'estándar',
    materials: 'básico',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const selectedService = servicesData.find(service => service.id === parseInt(id));
    setService(selectedService);
  }, [id]);

  useEffect(() => {
    if (service) {
      const calculatePrice = () => {
        let price = service.basePrice;
        price += (customization.size - 1) * service.pricePerUnit;
        if (customization.condition === 'difícil') price += 200;
        if (customization.materials === 'premium') price += 500;
        setTotalPrice(price);
      };
      calculatePrice();
    }
  }, [customization, service]);
  

  const handleChange = (e) => {
    setCustomization({
      ...customization,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
    navigate('/cart');
  };

  if (!service) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Personalizar {service.name}</h2>
      <form>
        <label>
          Tamaño (hectáreas o número de animales):
          <input type="number" name="size" value={customization.size} onChange={handleChange} min="1" />
        </label>
        <label>
          Condiciones:
          <select name="condition" value={customization.condition} onChange={handleChange}>
            <option value="estándar">Estándar</option>
            <option value="difícil">Difícil</option>
          </select>
        </label>
        <label>
          Materiales:
          <select name="materials" value={customization.materials} onChange={handleChange}>
            <option value="básico">Básico</option>
            <option value="premium">Premium</option>
          </select>
        </label>
      </form>
      <p>Precio Total: ${totalPrice}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}

export default ServiceCustomization;
