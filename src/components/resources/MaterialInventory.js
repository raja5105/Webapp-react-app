// src/components/MaterialInventory.js
import React, { useState } from 'react';

function MaterialInventory() {
  const initialMaterials = [
    { id: "R001", name: "Aluminum Sheets", quantity: 500 },
    { id: "R002", name: "Titanium Rods", quantity: 200 },
  ];

  const [materials, setMaterials] = useState(initialMaterials);

  const updateQuantity = (id, delta) => {
    const newMaterials = materials.map(material =>
      material.id === id ? { ...material, quantity: material.quantity + delta } : material
    );
    setMaterials(newMaterials);
  };

  return (
    <div>
      <h3>Material Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>Material ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {materials.map(material => (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.name}</td>
              <td>{material.quantity}</td>
              <td>
                <button onClick={() => updateQuantity(material.id, 1)}>+</button>
                <button onClick={() => updateQuantity(material.id, -1)} disabled={material.quantity <= 0}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaterialInventory;
