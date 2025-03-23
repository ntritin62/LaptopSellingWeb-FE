import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import getAuthToken from '../../services/getToken';

function Payment({ addressId }) {
  const token = getAuthToken();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/orders/stripe`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (r) => {
        const resData = await r.json();
        setStripePromise(loadStripe(resData.data.publishableKey));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/createPaymentIntent`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (result) => {
        const resData = await result.json();
        setClientSecret(resData.data.clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm address={addressId} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
