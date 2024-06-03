import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ProfileLeft = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <aside className="col-span-3 rounded-3xl h-[500px] bg-background shadow-xl overflow-hidden">
      <section className="relative flex flex-col items-center z-0 overflow-hidden bg-[url('../public/images/profile-bg-avatar.png')]   bg-cover pt-[40px] px-[40px] pb-[20px]  after:content-[''] after:bg-gradient-to-b after:from-[rgba(26,22,46,0)] to-[#1A162E] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute after:z-100 ">
        <img
          src="/images/avatar.jpg"
          alt=""
          className="w-[116px] h-[116px] rounded-full border-[5px] border-solid border-[rgba(255,255,255,0.20)]"
        />
        <h1 className="text-3xl font-bold text-white">{user.fullName}</h1>
        <p className="text-2xl font-medium text-white">
          Ngày đăng ký: {moment(user.createdAt).format('Do MMMM YYYY')}
        </p>
      </section>
      <ul className="p-[30px] bg-top-act-group rounded-b-3xl dark:bg-dark-header-bg">
        <h2 className="text-3xl font-medium">Quản lý tài khoản</h2>
        <li className="mt-[16px]">
          <NavLink
            to="/profile/edit-info"
            className={({ isActive }) =>
              isActive
                ? 'flex gap-[10px] items-center text-active-sidebar'
                : 'flex gap-[10px] items-center'
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src="/icons/profile.svg"
                  alt=""
                  className={isActive ? 'action-icon' : ''}
                />
                <p className={isActive ? 'text-primary' : ''}>
                  Xem thông tin cá nhân
                </p>
              </>
            )}
          </NavLink>
        </li>
        <li className="mt-[10px]">
          <NavLink
            to="/profile/add-address"
            className={({ isActive }) =>
              isActive
                ? 'flex gap-[10px] items-center text-active-sidebar'
                : 'flex gap-[10px] items-center'
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src="/icons/profile.svg"
                  alt=""
                  className={isActive ? 'action-icon' : ''}
                />
                <p className={isActive ? 'text-primary' : ''}>Thêm địa chỉ</p>
              </>
            )}
          </NavLink>
        </li>
        <li className="mt-[10px]">
          <NavLink
            to="/profile/change-password"
            className={({ isActive }) =>
              isActive
                ? 'flex gap-[10px] items-center text-active-sidebar'
                : 'flex gap-[10px] items-center'
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src="/icons/profile.svg"
                  alt=""
                  className={isActive ? 'action-icon' : ''}
                />
                <p className={isActive ? 'text-primary' : ''}>Đổi mật khẩu</p>
              </>
            )}
          </NavLink>
        </li>
        <h2 className="mt-[20px] text-3xl font-medium">Sản phẩm</h2>
        <li className="mt-[10px]">
          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              isActive
                ? 'flex gap-[10px] items-center text-active-sidebar'
                : 'flex gap-[10px] items-center'
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src="/icons/profile.svg"
                  alt=""
                  className={isActive ? 'action-icon' : ''}
                />
                <p className={isActive ? 'text-primary' : ''}>Đơn hàng</p>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default ProfileLeft;
