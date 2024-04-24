import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
const AdminProducts = () => {
  const data = useLoaderData();
  const [laptops, setLaptops] = useState(data);

  const inputHandler = (e) => {
    console.log(e.target.value);
    setLaptops(
      data.filter((laptop) =>
        laptop.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.log(laptops);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[70px]">
        <h1 className="text-4xl font-bold ">Sản phẩm</h1>
        <Link>
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
            <ProductCard product={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
