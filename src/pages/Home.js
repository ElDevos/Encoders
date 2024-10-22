// pages/Home.js
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Marketplace de Servicios Agrícolas</h1>
        <p>Facilitando el acceso a servicios especializados para el sector agrícola y ganadero.</p>
      </header>

      <section className="intro-section">
        <img 
          src="./ecommerce.svg" 
          alt="Agricultura moderna" 
        />
        <div>
          <h2>Servicios Especializados</h2>
          <p>Contamos con expertos en instalaciones, veterinaria, mantenimiento, transporte, y más.</p>
        </div>
      </section>

      <section className="intro-section reverse">
        <img 
          src="https://via.placeholder.com/300x200" 
          alt="Tecnología agrícola" 
        />
        <div>
          <h2>Tecnología Aplicada</h2>
          <p>Implementa la última tecnología en tus procesos para maximizar tu productividad.</p>
        </div>
      </section>

      <section className="intro-section">
        <img 
          src="https://via.placeholder.com/300x200" 
          alt="Atención personalizada" 
        />
        <div>
          <h2>Atención Personalizada</h2>
          <p>Nuestros expertos brindan asesorías y soporte adaptado a tus necesidades específicas.</p>
        </div>
      </section>

      <section className="services-section">
        <h2>Explora Nuestros Servicios</h2>
        <div className="services-buttons">
          <Link to="/services/instalaciones" className="service-button">
            Instalaciones de Sistemas
          </Link>
          <Link to="/services/veterinarios" className="service-button">
            Servicios Veterinarios
          </Link>
          <Link to="/services/asesorias" className="service-button">
            Asesorías Especializadas
          </Link>
          <Link to="/services/mantenimiento" className="service-button">
            Mantenimiento y Reparaciones
          </Link>
          <Link to="/services/transporte" className="service-button">
            Servicios de Transporte
          </Link>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Marketplace de Servicios Agrícolas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
