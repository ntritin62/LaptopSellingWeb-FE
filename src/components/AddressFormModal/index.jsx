import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, useNavigation } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import axios from 'axios';
import getAuthToken from '../../services/getToken';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/userSlice';

const AddressFormModal = ({ closeForm, info, setSelectedOption }) => {
  const dispatch = useDispatch();
  const token = getAuthToken();
  const submit = useSubmit();
  const navigation = useNavigation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipientName: info ? info.recipientName : '',
      contactNumber: info ? info.contactNumber : '',
      deliveryAddress: info ? info.deliveryAddress : '',
    },
  });

  const submitHandler = async (data) => {
    if (!info) {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/addresses/`,
        {
          ...data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getUser());
      closeForm();
    } else {
      await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/addresses/${info.id}`,
        {
          ...data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getUser());
      closeForm();
    }
  };
  return (
    <>
      <div
        className="bg-[#000] opacity-70 fixed inset-0 z-10"
        onClick={closeForm}
      ></div>
      <section className="p-[50px] sm:p-[20px] fixed top-[50%] left-[50%] w-[50%]  lg:w-[90%] translate-y-[-50%] translate-x-[-50%] z-20 col-span-8 bg-background dark:bg-dark-profile-right rounded-[20px]">
        <button className="block ml-auto select-none" onClick={closeForm}>
          <img
            src="/icons/close.svg"
            alt=""
            className="action-icon w-[42px] h-[42px]"
          />
        </button>
        <Form onSubmit={handleSubmit(submitHandler)} className="mt-[30px] text">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-[30px]">
            <div className="flex flex-col sm:col-span-2 gap-[20px] relative">
              <label htmlFor="name" className="text-3xl font-medium">
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-[12px] border-[1px] border-solid border-border rounded-[10px] placeholder:text-[rgba(0,0,0,0.3)]"
                placeholder="Họ tên"
                {...register('recipientName', { required: true })}
              />
              {errors.recipientName && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Họ tên không được để trống.
                </p>
              )}
            </div>
            <div className="flex flex-col sm:col-span-2 gap-[20px] relative">
              <label htmlFor="phoneNumber" className="text-3xl font-medium">
                Số điện thoại
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="p-[12px] border-[1px] border-solid border-border rounded-[10px] placeholder:text-[rgba(0,0,0,0.3)]"
                placeholder="Số điện thoại"
                {...register('contactNumber', {
                  required: true,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm,
                })}
              />
              {errors.contactNumber && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Số điện thoại không được để trống.
                </p>
              )}
            </div>

            <div className="flex flex-col col-span-2 gap-[20px] relative">
              <label htmlFor="address" className="text-3xl font-medium">
                Địa chỉ
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="p-[12px] border-[1px] border-solid border-border rounded-[10px] placeholder:text-[rgba(0,0,0,0.3)]"
                placeholder="Địa chỉ"
                {...register('deliveryAddress', {
                  required: true,
                })}
              />
              {errors.deliveryAddress && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Địa chỉ không được để trống.
                </p>
              )}
            </div>
          </div>
          <div className="mt-[30px] flex justify-end gap-[30px] items-center">
            <button className="text-2xl font-medium" onClick={closeForm}>
              Huỷ
            </button>
            <button
              type="submit"
              className="text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-primary text-white hover:opacity-80 "
            >
              Lưu
            </button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default AddressFormModal;
