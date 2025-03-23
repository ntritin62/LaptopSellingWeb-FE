import React from 'react';
import CardItem from '../../components/CardItem';
import { Link, useNavigate } from 'react-router-dom';
import CartBox from '../../components/Cart';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress } from '../../redux/cartSlice';
import AddressFormModal from '../../components/AddressFormModal';
import * as ROUTES from '../../constants/routes';
import { Helmet } from 'react-helmet';
import { Alert } from '@material-tailwind/react';
import AlertCustomStyles from '../../components/Alert';

const ShippingPage = () => {
  const [addressModelIsShowed, setAddressModelIsShowed] = useState({
    status: '',
    data: null,
  });
  const cart = useSelector((state) => state.cart);
  const [messageIsShowed, setMessageIsShowed] = useState(false);

  const { user } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.address.addresses.length > 0) {
      setSelectedOption(user.address.addresses[0].id);
      dispatch(setAddress(user.address.addresses[0].id));
    }
  }, [user]);
  const handleInputChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10));
    dispatch(setAddress(parseInt(event.target.value, 10)));
  };

  const closeAddressModal = () => {
    setAddressModelIsShowed({ status: false });
  };

  const showAddressModal = (data) => {
    setAddressModelIsShowed({ status: true, data: data });
  };

  return (
    <>
      <Helmet>
        <title>Thanh toán | Giao hàng</title>
      </Helmet>
      {messageIsShowed && <AlertCustomStyles msg="Áp mã giảm giá thành công" />}
      {addressModelIsShowed.status && (
        <AddressFormModal
          closeForm={closeAddressModal}
          info={addressModelIsShowed.data}
          setSelectedOption={setSelectedOption}
        />
      )}
      <div className="container pt-[10px]">
        <div className="flex text-checkout-text text-2xl font-medium gap-[20px] mt-[30px] rounded-[10px] shadow-md bg-background p-[20px] dark:bg-dark-sidebar">
          <Link to={ROUTES.HOME}>Trang chủ</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <Link to={ROUTES.CART}>Giỏ hàng</Link>
          <img src="/icons/arrow-right.svg" alt="" />
          <Link to={ROUTES.SHIPPING} className="text-primary">
            Vận chuyển
          </Link>
        </div>
      </div>
      <div className="container grid grid-cols-11 xl:flex xl:flex-col my-[30px]  gap-[30px] dark:text-checkout-text">
        <div className="col-span-8 p-[30px] rounded-[20px] bg-background shadow-xl dark:bg-dark-sidebar">
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center justify-between sm:flex-col sm:gap-[16px] sm:items-start">
              <div>
                <h2 className="text-3xl font-medium">Địa chỉ nhận hàng</h2>
                {/* <p className="text-2xl">Where should we deliver your order?</p> */}
              </div>
              <button
                onClick={() => {
                  showAddressModal(null);
                }}
                className="flex  gap-[10px] py-[10px] px-[20px] bg-primary text-white hover:opacity-80 text-3xl font-medium rounded-full sm:mx-auto "
              >
                <img
                  src="/icons/cong.svg"
                  alt=""
                  className=" w-[20px] h-[20px] white-icon"
                />
                Thêm địa chỉ mới
              </button>
            </div>
            <ul className="max-h-[200px] overflow-y-auto flex flex-col gap-[30px]">
              {user.address.addresses.length == 0 && (
                <p className="text-red-500 text-center font-bold text-3xl">
                  Bạn phải thêm địa chỉ để tiếp tục.
                </p>
              )}
              {user.address.addresses.length != 0 &&
                user.address.addresses.map((address) => (
                  <li key={address.id} className="flex justify-between sm:flex-col sm:gap-[16px]">
                    <div className="flex gap-[16px]">
                      <input
                        type="radio"
                        name="address"
                        id={address.id}
                        value={address.id}
                        checked={selectedOption === address.id}
                        onChange={handleInputChange}
                        hidden
                      />
                      <label
                        htmlFor={address.id}
                        className="w-[19px] h-[19px] shrink-0 "
                      >
                        {selectedOption === address.id ? (
                          <img
                            src="/icons/check.svg"
                            alt=""
                            className="w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full border-solid border-[1.5px] rounded-lg border-[#1A162E] dark:border-[#B9BABE] "></div>
                        )}
                      </label>
                      <div>
                        <p className="text-3xl font-medium sm:text-2xl">
                          {address.recipientName}
                        </p>
                        <p className="text-2xl sm:text-xl">
                          {address.deliveryAddress}
                        </p>
                        <ul className="list-disc flex gap-[30px] mt-[20px] sm:text-xl ml-[15px]">
                          <li>Giao hàng tận nơi</li>
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        showAddressModal(address);
                      }}
                      className="flex gap-[10px] mt-auto mr-[15px] text-primary"
                    >
                      <img
                        src="/icons/edit.svg"
                        alt=""
                        className="action-icon"
                      />
                      <span>Sửa</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <h2 className="text-3xl font-medium mt-[30px]">Chi tiết sản phẩm</h2>
          <ul className="flex flex-col gap-[30px] mt-[30px]">
            {cart.products.map((product) => (
              <>
                <CardItem product={product} />
                <div className="h-[1px] w-full bg-border bg-top-menu-border"></div>
              </>
            ))}
          </ul>
          <div className="flex mt-[30px] items-end justify-between sm:hidden">
            <Link className="flex gap-[10px] items-center">
              <img
                src="/icons/arrow-left.svg"
                alt=""
                className="dark-icon w-[24px] h-[24px]"
              />
              <p className="text-3xl font-medium">Tiếp tục mua sắm</p>
            </Link>
            <div className="w-[283px]">
              <div className="flex justify-between text-3xl font-medium">
                <p>Tổng cộng:</p>
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
              <div className="h-[1px] w-full dark:bg-[#B9BABE] bg-top-menu-border my-[30px]"></div>
              <div className="flex justify-between text-4xl font-bold">
                <p>Tổng:</p>
                <p>
                  {cart.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <CartBox
          path="shipping"
          setShow={setMessageIsShowed}
          address={selectedOption}
        />
      </div>
    </>
  );
};

export default ShippingPage;
