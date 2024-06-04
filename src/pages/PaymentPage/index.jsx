import React from 'react';
import { useEffect, useState } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link, useNavigate } from 'react-router-dom';
import PaymentCard from '../../components/PaymentCard';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { getUserCart } from '../../redux/cartSlice';
import getAuthToken from '../../services/getToken';
import { get } from 'react-hook-form';

const PaymentPage = () => {
  const token = getAuthToken();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [address, setAddress] = useState();

  useEffect(() => {
    setAddress(user.address.find((address) => address._id === cart.address));
  }, [cart, user]);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const onClickHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/createOrderCOD`,
        { addressId: address._id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(ROUTES.PAYMENTSUCCESS_COD);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   const onBeforeUnload = (event) => {
  //     alert('Bạn có chắc chắn muốn rời khỏi trang này không?');

  //     event.preventDefault();
  //     event.returnValue = '';
  //   };

  //   window.addEventListener('beforeunload', onBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', onBeforeUnload);
  //   };
  // }, []);

  return (
    <>
      <Helmet>
        <title>Checkout | Payment</title>
      </Helmet>
      <div className="container pt-[10px] ">
        <div className="flex text-checkout-text text-2xl lg:text-base font-medium gap-[20px] mt-[30px] rounded-[10px] bg-background shadow-md p-[20px] dark:bg-dark-sidebar">
          <Link to={ROUTES.HOME}>Trang chủ</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <Link to={ROUTES.CART}>Giỏ hàng</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <Link to={ROUTES.SHIPPING}>Vận chuyển</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <p className="text-primary">Phương thức thanh toán</p>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
        <div className="col-span-8">
          <div className="p-[30px] rounded-[20px] bg-background shadow-xl dark:bg-dark-sidebar">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium">1. Địa chỉ giao hàng</h2>
              <Link to={ROUTES.SHIPPING}>
                <button className="flex gap-[10px] mt-auto mr-[15px]">
                  <img src="/icons/edit.svg" alt="" className="dark-icon" />
                  <span>Sửa</span>
                </button>
              </Link>
            </div>
            <div className="my-[30px] bg-bg-secondary dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              {address && (
                <div>
                  <p className="text-2xl font-medium mb-[4px]">
                    {address.recipientName}
                  </p>
                  <p className="text-2xl font-medium">
                    Địa chỉ:{' '}
                    <span className="font-normal">
                      {address.deliveryAddress}
                    </span>
                  </p>
                  <p className="text-2xl font-medium">
                    Số điện thoại:{' '}
                    <span className="font-normal">{address.contactNumber}</span>
                  </p>
                </div>
              )}
              <div className="w-[31px] h-[31px]">
                <img src="/icons/check.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="my-[30px] bg-bg-secondary dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              <div>
                <p className="text-2xl font-medium mb-[4px]">Chi tiết</p>
                <p>{cart.products.length} sản phẩm</p>
              </div>
              <Link
                to={ROUTES.SHIPPING}
                className="underline underline-offset-5"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
          <div className="p-[30px] rounded-[20px] bg-background shadow-xl dark:bg-dark-sidebar mt-[30px]">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium">
                2. Phương thức vận chuyển
              </h2>
            </div>
            <div className="w-full h-[1px] my-[30px] bg-top-menu-border dark-bg-dark-body-bg"></div>
            <h3 className="text-2xl font-medium">
              Chọn phương thức vận chuyển
            </h3>
            <div className="my-[30px] bg-bg-secondary dark:bg-dark-body-bg p-[20px] rounded-[20px] flex justify-between items-center">
              <div className="flex items-center gap-[20px]">
                <div className="w-[70px] h-[54px] rounded-[10px] overflow-hidden">
                  <img
                    src="/icons/GHTK.png"
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium mb-[4px]">
                    Giao hàng tiết kiệm
                  </p>
                  <p>Giao: bây giờ</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-center">
                <p>Miễn phí</p>
                <div className="w-[19px] h-[19px]">
                  <img
                    src="/icons/check.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-[30px] rounded-[20px] bg-background shadow-xl dark:bg-dark-sidebar">
          <div className="flex justify-between text-2xl font-medium lg:text-3xl  ">
            <p>
              Tổng <span className="font-normal">(sản phẩm)</span>
            </p>
            <p>{cart.products.length}</p>
          </div>
          <div className="flex justify-between text-2xl font-medium mt-[10px] lg:text-3xl  ">
            <p>
              Giá <span className="font-normal">(Total)</span>
            </p>
            <p>
              {cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
          <div className="flex justify-between text-2xl font-medium mt-[10px] lg:text-3xl  ">
            <p>Vận chuyển</p>
            <p>Free</p>
          </div>
          <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-border my-[20px]"></div>
          <div className="flex justify-between text-2xl font-medium lg:text-3xl ">
            <p>Tổng cộng</p>
            <p>
              {cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
          <div className="border-b-solid border-b-[1px] border-b-[#cfd8db]">
            <Accordion open={open === 1} className="mt-[20px]">
              <AccordionHeader onClick={() => handleOpen(1)}>
                <p className="text-3xl">Thanh toán COD</p>
              </AccordionHeader>
              <AccordionBody>
                <button
                  onClick={onClickHandler}
                  className="bg-primary text-white hover:opacity-80 w-full hover:shadow-lg  py-[20px] rounded-lg font-bold text-3xl "
                >
                  Thanh toán COD
                </button>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="border-b-solid border-b-[1px] border-b-[#cfd8db]">
            <Accordion open={open === 2} className="mt-[20px]">
              <AccordionHeader onClick={() => handleOpen(2)}>
                <p className="text-3xl">Thanh toán online</p>
              </AccordionHeader>
              <AccordionBody>
                <div className="mt-[30px]">
                  {address && <PaymentCard addressId={address._id} />}
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
