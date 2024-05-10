import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { useStripe } from '@stripe/react-stripe-js';
const PaymentSuccess = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Success! Payment received.');
          break;

        case 'processing':
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case 'requires_payment_method':
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage('Payment failed. Please try another payment method.');
          break;

        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);
  return (
    <div className="container mt-[200px] flex items-center">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <div className="w-[100px] h-[100px]">
            <img src="/image/success.png" alt="" />
          </div>
          <span className="text-5xl font-medium">Payment Successful</span>
        </div>
        <div className="flex gap-[20px]">
          <Link
            to={ROUTES.HOME}
            className="inline-block mt-[30px] p-[20px] rounded-[10px] text-2xl font-medium bg-[#2dc9af40] "
          >
            Continue Shopping
          </Link>
          <Link
            to="/profile/orders"
            className="inline-block mt-[30px] p-[20px] rounded-[10px] text-2xl font-medium bg-active-sidebar"
          >
            Your orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
