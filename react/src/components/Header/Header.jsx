import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import { getCategories } from '../../services/api';
import './Header.css';

const Header = () => {
  const [categorias, setCategorias] = useState([]);
  const [estaAbiertoDesplegable, setEstaAbiertoDesplegable] = useState(false);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const datosCategorias = await getCategories();
        setCategorias(datosCategorias);
      } catch (error) {
        console.error('Error cargando categorías:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerCategorias();
  }, []);

  const manejarCambioDesplegable = () => {
    setEstaAbiertoDesplegable(!estaAbiertoDesplegable);
  };

  const manejarCierreDesplegable = () => {
    setEstaAbiertoDesplegable(false);
  };

  // Formatear nombre de categoría para mostrar
  const formatearNombreCategoria = (categoria) => {
    // Si es un string simple
    if (typeof categoria === 'string') {
      return categoria
        .split('-')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    }
    
    // Si es un objeto con name
    if (categoria && categoria.name) {
      return categoria.name
        .split('-')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    }
    
    return categoria || '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={manejarCambioDesplegable}
              >
                Productos
                <span className={`dropdown-arrow ${estaAbiertoDesplegable ? 'open' : ''}`}>▼</span>
              </button>
              {estaAbiertoDesplegable && (
                <div className="dropdown-menu">
                  <Link 
                    to="/productos" 
                    className="dropdown-item"
                    onClick={manejarCierreDesplegable}
                  >
                    Ver todos
                  </Link>
                  {cargando ? (
                    <div className="dropdown-item loading">Cargando...</div>
                  ) : (
                    categorias.map((categoria) => (
                      <Link
                        key={categoria.slug || categoria}
                        to={`/productos/categoria/${categoria.slug || categoria}`}
                        className="dropdown-item"
                        onClick={manejarCierreDesplegable}
                      >
                        {formatearNombreCategoria(categoria)}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/quienes-somos" className="nav-link">Quiénes somos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
