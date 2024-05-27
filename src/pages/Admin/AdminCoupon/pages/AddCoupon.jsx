import React from 'react';
import { Alert } from '@material-tailwind/react';
import { useState } from 'react';
import AlertCustomStyles from '../../../../components/Alert';
import CouponForm from '../components/CouponForm';
const AddCoupon = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  return (
    <>
      {messageIsShowed && (
        <AlertCustomStyles msg="Thêm mã giảm giá thành công" />
      )}
      <h1 className="text-center text-5xl mt-[70px] font-bold">
        Thêm mã giảm giá
      </h1>
      <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
        <CouponForm setShow={setMessageIsShowed} />
      </div>
    </>
  );
};

export default AddCoupon;
