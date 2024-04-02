import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useSelector } from 'react-redux';

const CartBox = ({ path }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="col-span-3 bg-background rounded-[20px] p-[30px] h-fit">
      <div className="flex justify-between text-3xl font-medium lg:text-3xl  ">
        <p>
          Tổng <span className="font-normal">(items)</span>
        </p>
        <p>{cart.products.length}</p>
      </div>
      <div className="flex justify-between text-3xl font-medium mt-[10px] lg:text-3xl  ">
        <p>
          Giá <span className="font-normal">(Total)</span>
        </p>
        <p>${cart.totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-3xl font-medium mt-[10px] lg:text-3xl  ">
        <p>Vận chuyển</p>
        <p>Free</p>
      </div>
      <div className="h-[1px] w-full bg-border bg-top-menu-border my-[30px]"></div>
      <div className="flex justify-between text-4xl font-bold  ">
        <p>Tổng cộng</p>
        <p>${cart.totalPrice.toFixed(2)}</p>
      </div>

      <Link
        to={path === 'shipping' ? ROUTES.PAYMENTMETHOD : ROUTES.SHIPPING}
        className="mt-[30px] bg-primary py-[18px] block rounded-full text-3xl font-medium w-full  text-center "
      >
        Tiếp tục thanh toán
      </Link>
    </div>
  );
};

export default CartBox;
