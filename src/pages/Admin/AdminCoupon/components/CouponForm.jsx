import React from 'react';
import getAuthToken from '../../../../services/getToken';
import { useSubmit, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as ROUTES from '../../../../constants/routes';
import axios from 'axios';
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const CouponForm = ({ coupon, setShow }) => {
  const token = getAuthToken();
  const submit = useSubmit();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (coupon) {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/coupons/${coupon._id}`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setShow(true);
        setTimeout(() => {
          navigate(ROUTES.ADMIN_COUPON);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/coupons`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setShow(true);
        setTimeout(() => {
          navigate(ROUTES.ADMIN_COUPON);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <label htmlFor="name" className="mt-[20px]">
          Tên mã giảm giá
        </label>
        <input
          type="text"
          name="name"
          id="name"
          {...register('name', { required: true })}
          defaultValue={coupon && coupon.name ? coupon.name : ''}
          placeholder="Nhập tên mã giảm giá"
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
        />
        {errors.name && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Tên không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="amount" className="mt-[20px]">
          Giảm giá
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          {...register('amount', { required: true })}
          defaultValue={coupon && coupon.amount ? coupon.amount : ''}
          placeholder="Nhập giảm giá"
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
        />
        {errors.amount && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Giảm giá không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="code" className="mt-[20px]">
          Code giảm giá
        </label>
        <input
          type="text"
          name="code"
          id="code"
          {...register('code', { required: true })}
          defaultValue={coupon && coupon.code ? coupon.code : ''}
          placeholder="Nhập code giảm giá"
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
        />
        {errors.code && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            code giảm giá không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="expiredDate" className="mt-[20px]">
          Ngày hết hạn
        </label>
        <input
          type="date"
          name="expiredDate"
          id="expiredDate"
          {...register('expiredDate', { required: true })}
          defaultValue={
            coupon && coupon.expiredDate
              ? new Date(coupon.expiredDate).toISOString().split('T')[0]
              : ''
          }
          placeholder="Nhập expiredDate giảm giá"
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
        />
        {errors.expiredDate && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Ngày hết hạn không được để trống
          </span>
        )}
      </div>
      <button
        type="submit"
        className="mt-[30px] bg-primary text-white w-[200px] px-[20px] py-[5px] font-medium rounded-lg mx-auto"
      >
        Lưu mã giảm giá
      </button>
    </form>
  );
};

export default CouponForm;
