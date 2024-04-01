import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';


import FrypanImage from './Frypan.webp';
import PotImage from './pot.webp';
import BluePotImage from './bluepot.webp';
import PlatesImage from './plates.webp';
import SofaImage from './sofa.webp';


const products = [
  { id: 1, name: 'Frying Pan', price: 29.99, imageUrl: FrypanImage },
  { id: 2, name: 'Pot', price: 49.99, imageUrl: PotImage },
  { id: 3, name: 'Blue Pot', price: 34.99, imageUrl: BluePotImage },
  { id: 4, name: 'Plates Set', price: 79.99, imageUrl: PlatesImage },
  { id: 5, name: 'Comfortable Sofa', price: 499.99, imageUrl: SofaImage },
];

const OrdersPage = () => {
  const navigate = useNavigate();

  const handleProductSelect = (product) => {
    
    const order_id = '123'; 
    navigate('/payment', { state: { product, order_id } });
  };

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={products} onProductSelect={handleProductSelect} />
    </div>
  );
};

export default OrdersPage;
