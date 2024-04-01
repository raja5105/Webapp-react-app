// src/components/ResourceManagementPage.js
import React from 'react';
import MachineDashboard from './MachineDashboard';
import MaterialInventory from './MaterialInventory';

function ResourceManagementPage() {
  return (
    <div>
      <h2>Resource Management</h2>
      {/* Machine Dashboard for displaying and toggling machine statuses */}
      <MachineDashboard />
      
      {/* Material Inventory for displaying materials and updating their quantities */}
      <MaterialInventory />
    </div>
  );
}

export default ResourceManagementPage;
