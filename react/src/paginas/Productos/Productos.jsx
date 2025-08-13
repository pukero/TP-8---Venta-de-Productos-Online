import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const skip = (currentPage - 1) * productsPerPage;
        let url = '';

        if (categoria) {
          url = `https://dummyjson.com/products/category/${categoria}?limit=${productsPerPage}&skip=${skip}`;
        } else {
          url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener productos');
        }
        const data = await response.json();

        setProducts(data.products);
        setTotalProducts(data.total);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria, currentPage]);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoria]);

  const formatCategoryName = (category) => {
    if (!category) return '';
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div class="products">
        <div class="products-container">
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Cargando productos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div class="products">
        <div class="products-container">
          <div class="error-container">
            <h2>Error</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="products">
      <div class="products-container">
        <div class="products-header">
          <h1>
            {categoria ? `Productos - ${formatCategoryName(categoria)}` : 'Todos los Productos'}
          </h1>
          <p class="products-count">
            Mostrando {products.length} de {totalProducts} productos
          </p>
        </div>

        <div class="products-grid">
          {products.map((product) => (
            <div key={product.id} class="product-card">
              <Link to={`/producto/${product.id}`} class="product-link">
                <div class="product-image-container">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title}
                    class="product-image"
                    loading="lazy"
                  />
                  {product.discountPercentage > 0 && (
                    <div class="discount-badge">
                      -{Math.round(product.discountPercentage)}%
                    </div>
                  )}
                </div>
                <div class="product-info">
                  <h3 class="product-title">{product.title}</h3>
                  <p class="product-description">
                    {product.description.length > 100 
                      ? `${product.description.substring(0, 100)}...` 
                      : product.description
                    }
                  </p>
                  <div class="product-rating">
                    <div class="stars">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span class="rating-text">({product.rating})</span>
                  </div>
                  <div class="product-price">
                    {product.discountPercentage > 0 ? (
                      <>
                        <span class="original-price">
                          {formatPrice(product.price / (1 - product.discountPercentage / 100))}
                        </span>
                        <span class="current-price">{formatPrice(product.price)}</span>
                      </>
                    ) : (
                      <span class="current-price">{formatPrice(product.price)}</span>
                    )}
                  </div>
                  <div class="product-stock">
                    {product.stock > 0 ? (
                      <span class="in-stock">En stock ({product.stock})</span>
                    ) : (
                      <span class="out-of-stock">Sin stock</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div class="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              class="pagination-btn"
            >
              Anterior
            </button>
            
            <div class="pagination-numbers">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    class={`pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              class="pagination-btn"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
