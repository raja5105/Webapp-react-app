// src/components/support/HelpSupport.js
import React from 'react';
import './HelpSupport.css'; 

function HelpSupport() {
  return (
    <div className="help-support">
      <h1>Help & Support</h1>
      <p>Find answers to common questions, guides to get you started, and ways to get in touch with our support team.</p>
      <h2>FAQs</h2>
      <ul>
        <li>How do I reset my password?</li>
        {/* Left place to put a link for ansering the order */}
        <li>What to do if my data isn't syncing?</li>
        {/*  Will ewrite more additional faqs Additional FAQs */}
      </ul>
      <h2>User Guides</h2>
      <p>Explore our comprehensive user guides to make the most out of JustInTime MRP.</p>
      {/* Considering linking to guides or including guide content */}
      <h2>Contact Support</h2>
      <p>If you're unable to find the solution to your problem, our support team is here to help.</p>
      <p>Email: support@justintimemrp.com</p>
      {/* Will include more in this */}
    </div>
  );
}

export default HelpSupport;
