import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        Menu
      </button>
      <ul className={`nav-links ${isNavExpanded ? "nav-links-expanded" : ""}`}>
        <li><Link className="nav-link" to="/" onClick={() => setIsNavExpanded(false)}>Home</Link></li>
        <li><Link className="nav-link" to="/orders" onClick={() => setIsNavExpanded(false)}>Orders</Link></li>
        <li><Link className="nav-link" to="/production" onClick={() => setIsNavExpanded(false)}>Production</Link></li>
        <li><Link className="nav-link" to="/resources" onClick={() => setIsNavExpanded(false)}>Resources</Link></li>
        <li><Link className="nav-link" to="/reports" onClick={() => setIsNavExpanded(false)}>Reports</Link></li>
        <li><Link className="nav-link" to="/about">About Us</Link></li>
        <li><Link className="nav-link" to="/help">Help & Support</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

