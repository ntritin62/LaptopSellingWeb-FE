import React, { useEffect } from 'react';
import CardItem from '../../components/CardItem';
import { Link } from 'react-router-dom';
import CartBox from '../../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import * as ROUTES from '../../constants/routes';
import { Helmet } from 'react-helmet';
import { getUserCart } from '../../redux/cartSlice';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUserCart());
  }, [location]);

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <div className="container pt-[10px]">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] shadow-md mt-[20px] rounded-[10px] bg-background p-[15px] dark:bg-dark-sidebar">
          <Link to={ROUTES.HOME}>Trang chủ</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <p className="text-primary dark:text-dark-text">Giỏ hàng</p>
        </div>
      </div>
      {cart.products.length === 0 && (
        <div className="container items-center flex flex-col my-[30px] gap-[30px] dark:text-checkout-text">
          <img
            src="/icons/no-cart.png"
            alt=""
            className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px]"
          />
          <p className="text-5xl font-medium sm:text-3xl text-center">
            Bạn không có sản phẩm nào trong giỏ hàng.
          </p>
          <Link
            to={ROUTES.HOME}
            className="text-3xl min-w-[150px] hover:opacity-80 text-center block  bg-primary text-white p-[20px] rounded-lg font-medium"
          >
            Trở về
          </Link>
        </div>
      )}
      {cart.products.length > 0 && (
        <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px] gap-[30px] dark:text-checkout-text">
          <div className="col-span-8 p-[30px] rounded-[20px] bg-background  shadow-xl dark:bg-dark-sidebar">
            <ul className="flex flex-col gap-[30px]">
              {cart.products.map((product) => {
                return (
                  <li key={product._id}>
                    <CardItem product={product} />
                    <div className="h-[1px] w-full bg-border bg-top-menu-border"></div>
                  </li>
                );
              })}
            </ul>
            <div className="flex mt-[30px] items-end justify-between sm:hidden">
              <Link to={ROUTES.HOME} className="flex gap-[10px] items-center">
                <img
                  src="/icons/arrow-left.svg"
                  alt=""
                  className="dark-icon w-[24px] h-[24px]"
                />
                <p className="text-3xl font-medium">Tiếp tục mua sắm</p>
              </Link>
              <div className="w-[283px]">
                <div className="flex justify-between text-3xl font-medium">
                  <p>Tổng:</p>
                  <p>
                    {cart.totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </p>
                </div>
                <div className="flex justify-between text-3xl font-medium mt-[10px]">
                  <p>Vận chuyển:</p>
                  <p>Free</p>
                </div>
                <div className="h-[1px] w-full bg-border  my-[30px]"></div>
                <div className="flex justify-between text-4xl font-bold">
                  <p>Tổng cộng:</p>
                  <p>
                    {cart.totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CartBox />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
