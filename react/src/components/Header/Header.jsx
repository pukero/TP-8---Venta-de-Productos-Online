

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import { getCategories } from '../../services/api';
import './Header.css';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  // Formatear nombre de categoría para mostrar
  const formatCategoryName = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown" onMouseLeave={handleDropdownClose}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={handleDropdownToggle}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Productos
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link 
                    to="/productos" 
                    className="dropdown-item"
                    onClick={handleDropdownClose}
                  >
                    Ver todos
                  </Link>
                  {loading ? (
                    <div className="dropdown-item loading">Cargando...</div>
                  ) : (
                    categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/productos/categoria/${category.slug}`}
                        className="dropdown-item"
                        onClick={handleDropdownClose}
                      >
                        {formatCategoryName(category.name)}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/quienes-somos" className="nav-link">Quienes somos</Link>
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
