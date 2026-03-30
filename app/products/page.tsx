import React from 'react';
import { Product } from '../components/Product';
import { products } from '../data/products';
import '../styles/products.css';

const ProductsPage = () => {
  return (
    <div className="products-container">
      <h1>Products Catalog</h1>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
