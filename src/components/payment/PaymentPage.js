// src/components/payment/PaymentPage.js
import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import CardInput from './CardInput'; 

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { product, order_id } = location.state || { product: { name: 'Unknown Product' }, order_id: '' };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe has not loaded yet!');
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement('card'), 
    });

    if (error) {
      console.log('[error]', error);
      alert('Payment failed: ' + error.message);
      return;
    }

    console.log('[PaymentMethod]', paymentMethod);
    const paymentEndpoint = `http://127.0.0.1:8000/api/orders/${order_id}/process_payment`;

    try {
      const response = await fetch(paymentEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      });

      const data = await response.json();
      if (data.status === 'Completed') {
        alert('Payment Successful!');
      } else {
        alert('Payment Failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Payment failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Payment for {product?.name}</h2>
      <form onSubmit={handleSubmit}>
        <CardInput />
        <button type="submit" disabled={!stripe}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
