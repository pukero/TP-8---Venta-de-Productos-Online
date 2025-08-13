
const API_BASE_URL = 'https://dummyjson.com';

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Error al obtener categorías');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getAllProducts = async (limit = 30, skip = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category, limit = 30, skip = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Error al obtener productos por categoría');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener producto');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }
};

export const searchProducts = async (query, limit = 30, skip = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${query}&limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Error al buscar productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};
