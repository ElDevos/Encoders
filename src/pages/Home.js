// pages/Home.js
import '../styles/styles.css';

// Importamos las imágenes una por una
import agriculturaM from '../assets/agriculturaM.jpeg';
import asesores from '../assets/asesores.webp';
import punta from '../assets/punta.jpg';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Encoders</h1>
        <p>Bienvenidos al Marketplace de Servicios Agrícolas</p>
      </header>
      <section className="impact-section">
        <h2>Impacto Social del eCommerce</h2>
        <p>
          El eCommerce ha democratizado el acceso a productos y servicios, 
          permitiendo que personas en áreas rurales y urbanas accedan a nuevas oportunidades. 
          Además, fomenta la creación de empleos digitales, impulsando el desarrollo económico. 
          Con plataformas en línea, los pequeños negocios ahora pueden competir en igualdad de condiciones 
          con grandes empresas, promoviendo la equidad y el crecimiento social.
        </p>
      </section>
      <section className="intro-section">
        <img src={agriculturaM} alt="Agricultura moderna" />
        <div>
          <h2>Servicios Especializados</h2>
          <p>Contamos con expertos en instalaciones, veterinaria, mantenimiento, transporte, y más.</p>
        </div>
      </section>

      <section className="intro-section reverse">
        <img src={punta} alt="Uso de tecnología agrícola de punta" />
        <div>
          <h2>Tecnología Aplicada</h2>
          <p>Implementa la última tecnología en tus procesos para maximizar tu productividad.</p>
        </div>
      </section>
      <section className="intro-section">
        <img src={asesores} alt="Asesores brindando soporte personalizado" />
        <div>
          <h2>Atención Personalizada</h2>
          <p>Nuestros expertos brindan asesorías y soporte adaptado a tus necesidades específicas.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
