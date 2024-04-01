// src/components/orders/Product.js

import React from 'react';
import './Product.css'; 

const Product = ({ product, onProductSelect }) => {

  return (
    <div className="product" onClick={() => onProductSelect(product)}>
      <img 
        src={product?.imageUrl} 
        alt={product?.name || 'Product Image'} 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      <h3>{product?.name}</h3>
      <p>${product?.price?.toFixed(2)}</p> {/* Fixing it to call number  */}
    </div>
  );
};

export default Product;


