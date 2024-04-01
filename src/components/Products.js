import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Ensure the URL is correct and points to your Django backend server
        // You might need to adjust 'http://127.0.0.1:8000/api/products/' if your server is configured differently
        fetch('http://127.0.0.1:8000/api/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []); // The empty array ensures this effect runs only once on mount

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p> {/* Ensure price is displayed correctly */}
                </div>
            ))}
        </div>
    );
}

export default Products;

