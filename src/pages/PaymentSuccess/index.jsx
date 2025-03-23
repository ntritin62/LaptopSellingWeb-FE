import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import PaymentStatus from './PaymentStatus';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import getAuthToken from '../../services/getToken';

const PaymentSuccess = () => {
  const token = getAuthToken();
  const [stripePromise, setStripePromise] = useState(null);
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

  return (
    <div className="container mt-[100px] flex items-center">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <div className="w-[100px] h-[100px]">
            <img src="/icons/success.png" alt="" />
          </div>
          <span className="text-5xl font-medium">
            {
              <Elements stripe={stripePromise}>
                <PaymentStatus />
              </Elements>
            }
          </span>
        </div>
        <div className="flex gap-[20px]">
          <Link
            to={ROUTES.HOME}
            className="inline-block mt-[30px] p-[20px] rounded-[10px] text-2xl font-medium bg-primary text-white hover:opacity-80 "
          >
            Tiếp tục mua sắm
          </Link>
          <Link
            to="/profile/orders"
            className="inline-block mt-[30px] p-[20px] rounded-[10px] text-2xl font-medium bg-active-sidebar"
          >
            Đến đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
