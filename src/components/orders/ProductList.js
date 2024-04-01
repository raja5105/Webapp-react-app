// src/components/orders/ProductList.js

import React from 'react';
import Product from './Product';
import './ProductList.css'; 

const ProductList = ({ products, onProductSelect }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product 
          key={product.id} 
          product={product} 
          onProductSelect={onProductSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
