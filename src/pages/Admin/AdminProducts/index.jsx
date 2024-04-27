import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ADD_PRODUCT } from '../../../constants/routes';
import { Alert } from '@material-tailwind/react';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertCustomStyles() {
  return (
    <Alert
      icon={<Icon />}
      className="fixed top-[10px] z-30 flex items-center h-[50px] text-3xl rounded-none ml-auto animate-in slide-in-from-right border-l-4 border-[#2ec946] bg-[#2ec946]/30 font-medium text-[#2ec946]"
    >
      Xoá sản phẩm thành công
    </Alert>
  );
}
const AdminProducts = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const data = useLoaderData();
  const [laptops, setLaptops] = useState(data);

  const inputHandler = (e) => {
    setLaptops(
      data.filter((laptop) =>
        laptop.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      {messageIsShowed && <AlertCustomStyles />}
      <div className="flex justify-between items-center mt-[70px]">
        <h1 className="text-4xl font-bold ">Sản phẩm</h1>
        <Link to={ADD_PRODUCT}>
          <button className="bg-primary text-white shadow-lg px-[10px] py-[10px] flex font-medium gap-5 rounded-[10px]">
            <img
              src="/icons/plus.svg"
              alt=""
              className="white-icon w-[24px] h-[24px]"
            />
            Tạo mới
          </button>
        </Link>
      </div>
      <div className="mt-[30px] bg-white p-[20px] rounded-lg mb-[70px]">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="bg-white border-solid border-[1px] border-[#ccc] p-[10px] w-[250px] rounded-lg text-2xl"
          onChange={inputHandler}
        />
        <div className="w-full h-[1px] bg-[#ccc] my-[20px]"></div>
        <div className="grid grid-cols-5 h-[540px] overflow-auto gap-[15px]">
          {laptops.map((laptop) => (
            <ProductCard
              product={laptop}
              setShow={setMessageIsShowed}
              laptops={laptops}
              setLaptops={setLaptops}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
