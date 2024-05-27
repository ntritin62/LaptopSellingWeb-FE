import React from 'react';
import { Alert } from '@material-tailwind/react';
import { useState } from 'react';
import AlertCustomStyles from '../../../../components/Alert';
import CouponForm from '../components/CouponForm';
import { useLoaderData } from 'react-router-dom';
const EditCoupon = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const coupon = useLoaderData();
  return (
    <>
      {messageIsShowed && (
        <AlertCustomStyles msg="Sửa mã giảm giá thành công" />
      )}
      <h1 className="text-center text-5xl mt-[70px] font-bold">
        Sửa mã giảm giá
      </h1>
      <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
        <CouponForm setShow={setMessageIsShowed} coupon={coupon} />
      </div>
    </>
  );
};

export default EditCoupon;
