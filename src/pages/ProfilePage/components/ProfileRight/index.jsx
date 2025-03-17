import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../../redux/userSlice';
import AddressFormModal from '../../../../components/AddressFormModal';
import { Alert } from '@material-tailwind/react';
import AlertCustomStyles from '../../../../components/Alert';
import axios from 'axios';
import getAuthToken from '../../../../services/getToken';

const ProfileRight = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [messageIsShowed, setMessageIsShowed] = useState(false);

  const [addressModelIsShowed, setAddressModelIsShowed] = useState({
    status: '',
    data: null,
  });
  const closeAddressModal = () => {
    setMessageIsShowed(true);
    setTimeout(() => {
      setMessageIsShowed(false);
    }, 1000);

    setAddressModelIsShowed({ status: false });
  };
  const [msg, setMsg] = useState();

  const showAddressModal = (data) => {
    setAddressModelIsShowed({ status: true, data: data });
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const deleteHandler = async (address) => {
    const token = getAuthToken();
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/addresses/${address.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getUser());
      setMsg('Xoá địa chỉ thành công');
      setMessageIsShowed(true);
      setTimeout(() => {
        setMessageIsShowed(false);
        setMsg('');
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="col-span-8  rounded-[20px] p-[30px] bg-background shadow-xl">
      {messageIsShowed && (
        <AlertCustomStyles msg={msg || 'Sửa địa chỉ thành công'} />
      )}
      {addressModelIsShowed.status && (
        <AddressFormModal
          closeForm={closeAddressModal}
          info={addressModelIsShowed.data}
          setMessageIsShowed={setMessageIsShowed}
          // setSelectedOption={setSelectedOption}
        />
      )}
      <h2 className="text-4xl font-bold mt-[30px]">Thông tin tài khoản</h2>
      <p className="text-2xl mt-[4px] ">Địa chỉ, thông tin liên hệ</p>
      <Link
        to="./edit-info"
        className="grid grid-cols-2 sm:grid-cols-1 gap-[20px] mt-[16px] "
      >
        <div className="p-[10px] bg-bg-secondary dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]">
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icons/mail.svg" alt="" className="icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Địa chỉ email</p>
            <p className="text-xl mt-[6px]">{user.email}</p>
          </div>
        </div>
        <Link
          to="./edit-info"
          className="p-[10px] bg-bg-secondary dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]"
        >
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icons/phone.svg" alt="" className="icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Số điện thoại</p>
            {user.phoneNumber && (
              <p className="text-xl mt-[6px]">{user.phoneNumber}</p>
            )}
          </div>
        </Link>
        <Link
          to="./add-address"
          className="p-[10px] bg-bg-secondary dark:bg-dark-profile-card flex items-center gap-[10px] rounded-[10px]"
        >
          <div className="p-[15px] bg-white rounded-[8px] dark:bg-dark-item-card">
            <img src="/icons/address.svg" alt="" className="dark-icon" />
          </div>
          <div>
            <p className="text-2xl font-medium">Thêm địa chỉ</p>
            {user.address.length > 0 && (
              <p className="text-xl mt-[6px]">{user.address[0].address}</p>
            )}
          </div>
        </Link>
      </Link>
      <h2 className="text-3xl mt-[20px]  font-bold">Danh sách địa chỉ</h2>
      {}
      <ul className=" mt-[20px] max-h-[300px] bg-bg-secondary  rounded-lg shadow-lg overflow-y-auto flex flex-col gap-[15px] bg-bg p-[20px]">
        {user.address.length === 0 && (
          <p className="text-center font-medium text-primary flex justify-center gap-[10px]">
            <img src="/icons/address.svg" alt="" className="action-icon" />
            Bạn chưa thêm địa chỉ nào.
          </p>
        )}
        {user.address.addresses.length != 0 &&
          user.address.addresses.map((address) => (
            <>
              <li className="flex items-center justify-between border-b-solid border-b-[1px] border-b-[#ccc] pb-[10px] sm:flex-col sm:gap-[16px]">
                <div className="flex gap-[16px]">
                  <div>
                    <p className="text-2xl font-medium sm:text-2xl">
                      <span className="font-medium">Tên: </span>
                      {address.recipientName}
                    </p>
                    <p className="text-xl sm:text-xl">
                      <span className="font-medium">Địa chỉ: </span>
                      {address.deliveryAddress}
                    </p>
                    <p className="text-xl sm:text-xl">
                      <span className="font-medium">Số điện thoại: </span>
                      {address.contactNumber}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[20px] ">
                  <button
                    onClick={() => {
                      showAddressModal(address);
                    }}
                    className="flex gap-[10px] text-2xl items-center mt-auto mr-[15px] text-primary"
                  >
                    <img
                      src="/icons/edit.svg"
                      alt=""
                      className="action-icon sm:w-[15px] sm:h-[15px]"
                    />
                    <span className="font-medium">Sửa</span>
                  </button>
                  <button
                    onClick={() => {
                      deleteHandler(address);
                    }}
                    className="flex gap-[10px] text-2xl items-center mt-auto mr-[15px] text-red-800"
                  >
                    <img
                      src="/icons/delete.svg"
                      alt=""
                      className="red-icon w-[24px] h-[24px] sm:w-[15px] sm:h-[15px]"
                    />
                    <span className="font-medium">Xoá</span>
                  </button>
                </div>
              </li>
            </>
          ))}
      </ul>
    </section>
  );
};

export default ProfileRight;
