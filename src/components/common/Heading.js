// src/components/common/Heading.js
import React from 'react';
import './Heading.css'; 

function Heading({ text }) {
  return <h2 className="page-heading">{text}</h2>;
}

export default Heading;
