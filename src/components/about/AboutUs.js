// src/components/about/AboutUs.js
import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About JustInTime MRP</h1>
      <p>JustInTime MRP is dedicated to revolutionizing the manufacturing industry by providing state-of-the-art resource planning solutions. Founded in 2021, our mission is to empower manufacturers with technology that optimizes production, reduces waste, and enhances efficiency.</p>
      <h2>Our Mission</h2>
      <p>To empower manufacturers worldwide with innovative technology, insightful data, and user-friendly solutions to drive their success and sustainability in the global market.</p>
      <h2>Meet the Team</h2>
      <p>Our team of experts in technology, manufacturing, and business strategy works tirelessly to ensure that JustInTime MRP meets the highest standards of quality and innovation.</p>
      {/* Consider adding team member profiles here */}
      <h2>Our Achievements</h2>
      <ul>
        <li>2022 Tech Innovator Award</li>
        <li>Over 500 successful deployments in manufacturing plants worldwide</li>
        {/*  will add Add more achievements */}
      </ul>
    </div>
  );
}

export default AboutUs;
