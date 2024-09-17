import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import getAuthToken from '../../../../services/getToken';
const ProductCard = ({ product, setShow, laptops, setLaptops, setData }) => {
  const token = getAuthToken();

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/laptops/${product._id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShow(true);
      console.log(response);
      setTimeout(() => {
        setLaptops((prev) =>
          laptops.filter((laptop) => laptop._id !== product._id)
        );
        setData((prev) =>
          laptops.filter((laptop) => laptop._id !== product._id)
        );
        setShow(false);
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="p-[10px] col-span-1 border-[1px] border-solid border-[#ccc] rounded-lg h-[260px]">
      <img
        src={product.imageUrl}
        alt=""
        className="w-[150px] h-[150px] object-contain mx-auto"
      />
      <h2 className="text-text text-xl font-medium h-[30px]">{product.name}</h2>
      <div className="mt-[20px] flex items-center gap-[20px] justify-center">
        <Link to={`/admin/products/edit-product/${product._id}`}>
          <button className="flex border-[1px] border-solid border-[#ccc] py-[5px] px-[10px] rounded-lg text-2xl font-medium gap-[5px]">
            <img src="/icons/edit.svg" alt="" className="w-[20px]" />
            Sửa
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          className="flex border-[1px] border-solid border-[#ccc] py-[5px] px-[10px] rounded-lg text-2xl text-red-600 font-medium gap-[10px]"
        >
          <img src="/icons/delete.svg" alt="" className="red-icon w-[15px]" />
          Xoá
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
