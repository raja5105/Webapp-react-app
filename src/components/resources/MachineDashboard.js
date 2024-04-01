// src/components/MachineDashboard.js
import React, { useState } from 'react';

function MachineDashboard() {
  const initialMachines = [
    { id: "M001", name: "Lathe", status: "Operational" },
    { id: "M002", name: "Milling Machine", status: "Maintenance Required" },
  ];

  const [machines, setMachines] = useState(initialMachines);

  const updateStatus = (id) => {
    const newMachines = machines.map(machine =>
      machine.id === id ? { ...machine, status: machine.status === "Operational" ? "Maintenance Required" : "Operational" } : machine
    );
    setMachines(newMachines);
  };

  return (
    <div>
      <h3>Machine Dashboard</h3>
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>
            {`${machine.name} - ${machine.status} `}
            <button onClick={() => updateStatus(machine.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MachineDashboard;
