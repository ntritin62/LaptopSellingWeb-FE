import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useSelector } from 'react-redux';
import getAuthToken from '../../services/getToken';
import axios from 'axios';
import { data } from 'autoprefixer';
import { useDispatch } from 'react-redux';
import { getUserCart } from '../../redux/cartSlice';
const CartBox = ({ path, setShow, address }) => {
  const [error, setError] = useState('');
  const token = getAuthToken();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    const code = e.target.elements.couponCode.value;
    const data = { code };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/coupons/addCouponToCart`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(getUserCart());
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } catch (e) {
      setError(e.response.data.msg);
    }
  };

  return (
    <div className="col-span-3 shadow-xl bg-background rounded-[20px] p-[30px] h-fit">
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
        <p>
          {cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </p>
      </div>
      <div className="flex justify-between text-3xl font-medium mt-[10px] lg:text-3xl  ">
        <p>Vận chuyển</p>
        <p>Miễn phí</p>
      </div>
      <div className="h-[1px] w-full bg-border bg-top-menu-border my-[30px]"></div>
      <div className="flex justify-between text-4xl font-bold  ">
        <p>Tổng cộng</p>
        <p>
          {cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </p>
      </div>
      {path === 'shipping' && (
        <form
          onSubmit={submitHandler}
          className="relative my-[30px] rounded-lg w-full h-[50px] flex items-center justify-between p-[10px] border-solid border-[1px] border-[#ccc]"
        >
          <input
            type="text"
            name="couponCode"
            placeholder="Nhập mã giảm giá"
            className="placeholder:text-[#aaa]"
          />
          <button className="text-primary font-bold " type="submit">
            Check
          </button>
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            {error}
          </span>
        </form>
      )}
      <button
        className={`w-full ${
          address === '' ? 'pointer-events-none cursor-not-allowed' : ''
        }`}
      >
        <Link
          to={path === 'shipping' ? ROUTES.PAYMENTMETHOD : ROUTES.SHIPPING}
          className="mt-[30px]  bg-primary hover:opacity-80 text-white py-[18px] block rounded-full text-3xl font-medium w-full  text-center "
        >
          Tiếp tục thanh toán
        </Link>
      </button>
    </div>
  );
};

export default CartBox;
