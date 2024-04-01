import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import HomePage from './components/homepage/HomePage';
import OrdersPage from './components/orders/OrdersPage';
import PaymentPage from './components/payment/PaymentPage';
import ProductionPlanningPage from './components/production/ProductionPlanningPage';
import ResourceManagementPage from './components/resources/ResourceManagementPage';
import ReportsPage from './components/reports/ReportsPage';
import AboutUs from './components/about/AboutUs';
import HelpSupport from './components/support/HelpSupport';
import Products from './components/Products';
import UserProfile from './components/profiles/UserProfile';
import './App.css';

// Ensure that REACT_APP_STRIPE_PUBLIC_KEY is defined in your .env file
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <Router>
      <div className="site-container">
        <NavBar />
        <Elements stripe={stripePromise}> {/* Stripe Elements provider added */}
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/production" element={<ProductionPlanningPage />} />
              <Route path="/resources" element={<ResourceManagementPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/help" element={<HelpSupport />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profiles" element={<UserProfile />} />
            </Routes>
          </div>
        </Elements> {/* Closing the Stripe Elements provider */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
