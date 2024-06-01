import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const PaymentCOD = () => {
  return (
    <div className="container mt-[100px] flex items-center">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <div className="w-[100px] h-[100px]">
            <img src="/icons/success.png" alt="" />
          </div>
          <span className="text-5xl font-medium">
            Xác nhận đơn hàng thành công
          </span>
        </div>
        <div className="flex gap-[20px] justify-center">
          <Link
            to={ROUTES.HOME}
            className="inline-block bg-primary text-white hover:opacity-80 mt-[30px] p-[20px] rounded-[10px] text-2xl font-medium"
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

export default PaymentCOD;
