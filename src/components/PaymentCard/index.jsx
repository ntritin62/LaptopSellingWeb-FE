import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import getAuthToken from '../../services/getToken';

function Payment({ addressId }) {
  const token = getAuthToken();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/stripe`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (r) => {
        const { publishableKey } = await r.json();
        console.log(publishableKey);
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/orders`, {
      method: 'POST',
      body: JSON.stringify({ addressId: addressId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (result) => {
        var { clientSecret, order } = await result.json();

        setClientSecret(clientSecret);
        setOrder(order);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm order={order._id} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
