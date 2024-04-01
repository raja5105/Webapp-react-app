// HomePage.js
import React from 'react';
import Landing from './Landing';
import './HomePage.css'; 
import manufacturingImage from './manufacturing.png'; 

function HomePage() {
  return (
    <div className="homePage">
      <header className="homeHeader">
        <h1 className="homeTitle">Welcome to the JustInTime MRP System</h1>
        <img src={manufacturingImage} alt="Manufacturing Plant" className="homeImage" />
      </header>
      <main className="homeMain">
        <Landing />
        <section className="introSection">
          <h2>Streamlining Your Manufacturing Processes</h2>
          <p>
            Our state-of-the-art MRP system integrates all facets of your operation,
            from planning to inventory management to scheduling, ensuring optimal efficiency.
          </p>
        </section>
        <section className="featuresSection">
          <h2>Key Features</h2>
          <div className="featuresGrid">
            <div className="featureItem">
              <h3>Inventory Tracking</h3>
              <p>Keep tabs on your materials and products with real-time inventory updates.</p>
            </div>
            <div className="featureItem">
              <h3>Order Management</h3>
              <p>Automate order processing and fulfillment for faster customer service.</p>
            </div>
            <div className="featureItem">
              <h3>Production Scheduling</h3>
              <p>Plan and schedule your production runs to maximize efficiency.</p>
            </div>
            <div className="featureItem">
              <h3>Analytics & Reporting</h3>
              <p>Gain insights into your operations with comprehensive analytics tools.</p>
            </div>
          </div>
        </section>
        {/* Additional sections can be added here */}
      </main>
      <footer className="homeFooter">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default HomePage;


