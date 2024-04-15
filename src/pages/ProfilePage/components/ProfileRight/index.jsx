import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../../redux/userSlice';

const ProfileRight = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <section className="col-span-8  rounded-[20px] p-[30px] bg-background">
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
    </section>
  );
};

export default ProfileRight;
