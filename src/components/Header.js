import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Marketplace de Servicios Agrícolas</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link to="/services/instalaciones" className={location.pathname.includes('instalaciones') ? 'active' : ''}>
            Instalaciones
          </Link>
          <Link to="/services/veterinarios" className={location.pathname.includes('veterinarios') ? 'active' : ''}>
            Veterinarios
          </Link>
          <Link to="/services/asesorias" className={location.pathname.includes('asesorias') ? 'active' : ''}>
            Asesorías
          </Link>
          <Link to="/services/mantenimiento" className={location.pathname.includes('mantenimiento') ? 'active' : ''}>
            Mantenimiento
          </Link>
          <Link to="/services/transporte" className={location.pathname.includes('transporte') ? 'active' : ''}>
            Transporte
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            Sobre Nosotros
          </Link>
          {isAuthenticated && (
            <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
              Carrito
            </Link>
          )}
          {!isAuthenticated && (
            <>
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                Ingresar
              </Link>
              <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                Registro
              </Link>
            </>
          )}
          {isAuthenticated && (
            <button
              onClick={logout}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              Cerrar sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
