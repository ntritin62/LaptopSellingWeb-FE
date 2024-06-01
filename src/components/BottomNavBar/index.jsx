import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const BottomNavbar = ({ setSidebarIsShowed }) => {
  return (
    <div className="bg-white h-[60px] shadow-2xl border-t-solid border-t-[2px] border-t-primary p-[10px]">
      <ul className="flex justify-around">
        <NavLink
          to={ROUTES.HOME}
          className="hover:text-active-sidebar w-full text-center"
        >
          {({ isActive }) => (
            <li className="flex flex-col items-center justify-center gap-[5px]">
              <img
                src="/icons/home.svg"
                alt=""
                className={`w-[24px] h-[24px] ${
                  isActive ? ' action-icon ' : ''
                }`}
              />
              <p className={`text-base ${isActive ? ' text-primary ' : ''}`}>
                Trang chủ
              </p>
            </li>
          )}
        </NavLink>
        <button
          onClick={() => {
            setSidebarIsShowed(true);
          }}
          className="hover:text-active-sidebar w-full text-center"
        >
          <li className="flex flex-col items-center justify-center gap-[5px]">
            <img
              src="/icons/category.svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="text-base">Danh mục</p>
          </li>
        </button>
        <NavLink
          to={ROUTES.CART}
          className="hover:text-active-sidebar w-full text-center"
        >
          {({ isActive }) => (
            <li className="flex flex-col items-center justify-center gap-[5px]">
              <img
                src="/icons/cart.svg"
                alt=""
                className={`w-[24px] h-[24px] ${
                  isActive ? ' action-icon' : ''
                }`}
              />
              <p className={`text-base ${isActive ? ' text-primary ' : ''}`}>
                Giỏ hàng
              </p>
            </li>
          )}
        </NavLink>
        <NavLink
          to={ROUTES.PROFILE}
          className="hover:text-active-sidebar w-full text-center"
        >
          {({ isActive }) => (
            <li className="flex flex-col items-center justify-center gap-[5px]">
              <img
                src="/icons/profile.svg"
                alt=""
                className={`w-[24px] h-[24px] ${
                  isActive ? ' action-icon' : ''
                }`}
              />
              <p className={`text-base ${isActive ? ' text-primary ' : ''}`}>
                Tài khoản
              </p>
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
};

export default BottomNavbar;
