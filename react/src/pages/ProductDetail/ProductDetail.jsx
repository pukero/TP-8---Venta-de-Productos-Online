import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../../services/api';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (err) {
        setError('Error al cargar el producto');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Aquí se implementaría la lógica del carrito
    alert(`Agregado al carrito: ${quantity} x ${product.title}`);
  };

  const handleBuyNow = () => {
    // Aquí se implementaría la lógica de compra directa
    alert(`Compra directa: ${quantity} x ${product.title}`);
  };

  if (loading) {
    return (
      <div className="product-detail">
        <div className="product-detail-container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando producto...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail">
        <div className="product-detail-container">
          <div className="error-container">
            <h2>Error</h2>
            <p>{error || 'Producto no encontrado'}</p>
            <button onClick={() => navigate('/productos')}>
              Volver a productos
            </button>
          </div>
        </div>
      </div>
    );
  }

  const originalPrice = product.discountPercentage > 0 
    ? product.price / (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/productos">Productos</Link>
          <span>/</span>
          <Link to={`/productos/categoria/${product.category}`}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="product-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage] || product.thumbnail} 
                alt={product.title}
                className="main-product-image"
              />
              {product.discountPercentage > 0 && (
                <div className="discount-badge">
                  -{Math.round(product.discountPercentage)}%
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="rating-text">({product.rating}) - {product.reviews?.length || 0} reseñas</span>
            </div>

            <div className="product-price">
              {product.discountPercentage > 0 ? (
                <>
                  <span className="original-price">{formatPrice(originalPrice)}</span>
                  <span className="current-price">{formatPrice(product.price)}</span>
                  <span className="savings">
                    Ahorras {formatPrice(originalPrice - product.price)}
                  </span>
                </>
              ) : (
                <span className="current-price">{formatPrice(product.price)}</span>
              )}
            </div>

            <div className="product-description">
              <h3>Descripción</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-details">
              <div className="detail-item">
                <span className="detail-label">Marca:</span>
                <span className="detail-value">{product.brand}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Categoría:</span>
                <span className="detail-value">{product.category}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">SKU:</span>
                <span className="detail-value">{product.sku}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Stock:</span>
                <span className={`detail-value ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                  {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                </span>
              </div>
            </div>

            {product.stock > 0 && (
              <div className="purchase-section">
                <div className="quantity-selector">
                  <label>Cantidad:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="action-buttons">
                  <button 
                    onClick={handleAddToCart}
                    className="add-to-cart-btn"
                  >
                    Agregar al Carrito
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="buy-now-btn"
                  >
                    Comprar Ahora
                  </button>
                </div>
              </div>
            )}

            {product.tags && product.tags.length > 0 && (
              <div className="product-tags">
                <h4>Etiquetas:</h4>
                <div className="tags-list">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-info">
          <div className="info-tabs">
            <div className="tab-content">
              <h3>Información adicional</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Dimensiones:</strong>
                  <span>
                    {product.dimensions?.width}cm x {product.dimensions?.height}cm x {product.dimensions?.depth}cm
                  </span>
                </div>
                <div className="info-item">
                  <strong>Peso:</strong>
                  <span>{product.weight}kg</span>
                </div>
                <div className="info-item">
                  <strong>Garantía:</strong>
                  <span>{product.warrantyInformation}</span>
                </div>
                <div className="info-item">
                  <strong>Envío:</strong>
                  <span>{product.shippingInformation}</span>
                </div>
                <div className="info-item">
                  <strong>Política de devolución:</strong>
                  <span>{product.returnPolicy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
