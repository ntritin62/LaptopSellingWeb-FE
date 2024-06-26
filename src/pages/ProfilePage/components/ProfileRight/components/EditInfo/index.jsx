import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as ROUTES from '../../../../../../constants/routes';
import { Link, useFetcher } from 'react-router-dom';
import {
  useSubmit,
  useNavigation,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../../../redux/userSlice';

import AlertCustomStyles from '../../../../../../components/Alert';

const EditInfo = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const fetcher = useFetcher();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });

  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();
  const text =
    navigation.state === 'submitting'
      ? 'Đang lưu...'
      : navigation.state === 'loading'
      ? 'Đã lưu!'
      : 'Lưu';

  useEffect(() => {
    if (
      fetcher.state === 'idle' &&
      fetcher.data &&
      fetcher.data.status === 200
    ) {
      setMessageIsShowed(true);
      setTimeout(() => {
        navigate('..');
      }, 1000);
    }
  }, [fetcher.data, fetcher.state]);

  const submitHandler = async (data) => {
    fetcher.submit(data, { method: 'post' });
  };

  return (
    <section className="col-span-8 p-[30px] bg-background shadow-xl dark:bg-dark-profile-right rounded-[20px]">
      {messageIsShowed && <AlertCustomStyles msg="Lưu thông tin thành công" />}
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icons/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Thông tin cá nhân</h2>
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className="mt-[30px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="name" className="text-3xl font-medium">
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
              placeholder="Họ và tên"
              {...register('fullName', { required: true })}
            />
            {errors.fullName && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Họ và tên không được để trống.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="email" className="text-3xl font-medium">
              Địa chỉ email
            </label>
            <input
              type="text"
              id="email"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
              placeholder="Địa chỉ mail"
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Địa chỉ email không hợp lệ.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="phone" className="text-3xl font-medium">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
              placeholder="Số điện thoại"
              {...register('phoneNumber', {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm,
              })}
            />
            {errors.phoneNumber && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Số điện thoại không hợp lệ.
              </p>
            )}
          </div>
        </div>
        <div className="mt-[30px] flex justify-end gap-[30px] items-center">
          <Link to={ROUTES.PROFILE} className="text-2xl font-medium">
            Huỷ
          </Link>
          <button
            type="submit"
            className="bg-primary hover:opacity-80  text-white  text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-primary text-[#1A162E]"
          >
            {text}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditInfo;
