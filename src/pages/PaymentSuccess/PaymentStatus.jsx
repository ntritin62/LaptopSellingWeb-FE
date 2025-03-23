import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import getAuthToken from '../../services/getToken';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartSlice';

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const token = getAuthToken();
  const stripe = useStripe();
  const { id } = useParams();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(async ({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Thanh toán thành công');
            console.log(paymentIntent);
            dispatch(resetCart());
            await axios.post(
              `${
                import.meta.env.VITE_SERVER_URL
              }/api/v1/orders/createOrderStripe`,
              {
                paymentIntentId: paymentIntent.id,
                addressId: id,
                clientSecret: clientSecret,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            break;

          case 'processing':
            setMessage(
              "Payment processing. We'll update you when payment is received."
            );

            break;

          case 'requires_payment_method':
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);

  return message;
};

export default PaymentStatus;
