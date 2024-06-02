import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ADD_COUPON, EDIT_COUPON } from '../../../constants/routes';
import * as ROUTES from '../../../constants/routes';
import axios from 'axios';
import getAuthToken from '../../../services/getToken';
import { useFetcher } from 'react-router-dom';
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

const AdminCoupon = () => {
  const token = getAuthToken();
  const data = useLoaderData();
  const [coupons, setCoupons] = useState(data);
  const fetcher = useFetcher();
  const clickHandler = async (couponId) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/coupons/${couponId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCoupons((prev) => {
      return prev.filter((coupon) => coupon._id !== couponId);
    });
  };
  return (
    <div className="mt-[70px] container">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Mã giảm giá</h1>
        <Link to={ADD_COUPON}>
          <button className="bg-primary hover:opacity-8 text-white shadow-lg px-[10px] py-[10px] flex font-medium gap-5 rounded-[10px]">
            <img
              src="/icons/plus.svg"
              alt=""
              className="white-icon w-[24px] h-[24px]"
            />
            Tạo mới
          </button>
        </Link>
      </div>
      <div className="mt-[50px] bg-white shadow-xl p-[20px] rounded-xl ">
        <div className="h-[500px] overflow-auto">
          <table className="w-full  ">
            <tr className="grid grid-cols-10 text-[#595959] text-xl">
              <thead className="col-span-2">Tên</thead>
              <thead className="col-span-2">Giảm giá</thead>
              <thead className="col-span-2">Code</thead>
              <thead className="col-span-2">Ngày hết hạn</thead>
              <thead className="col-span-2"></thead>
            </tr>
            <div className="bg-[#bfbfbf] h-[2px] w-full mt-[5px]"></div>
            {coupons.map((coupon) => (
              <tr className="grid grid-cols-10 mt-[20px] text-[#303030]">
                <td className="col-span-2">{coupon.name}</td>
                <td className="col-span-2">{coupon.amount}</td>
                <td className="col-span-2">{coupon.code}</td>
                <td className="col-span-2">
                  {new Date(coupon.expiredDate).toLocaleDateString(
                    'en-GB',
                    options
                  )}
                </td>
                <td className="col-span-1 flex items-center gap-[20px]">
                  <Link
                    to={`edit-coupon/${coupon._id}`}
                    className="flex gap-[5px]"
                  >
                    <img
                      src="/icons/edit.svg"
                      alt=""
                      className="w-[24px] h-[24px] action-icon"
                    />
                    <p className="text-primary font-medium">Sửa</p>
                  </Link>
                </td>
                <td className="col-span-1">
                  <button
                    className="flex gap-[10px]"
                    onClick={() => {
                      clickHandler(coupon._id);
                    }}
                  >
                    <img
                      src="/icons/delete.svg"
                      alt=""
                      className="w-[24px] h-[24px] red-icon"
                    />
                    <p className="text-red-800 font-medium">Xoá</p>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCoupon;
