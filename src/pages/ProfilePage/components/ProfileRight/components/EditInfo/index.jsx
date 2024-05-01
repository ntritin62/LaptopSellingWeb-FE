import React, { useEffect } from 'react';
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
import { Alert } from '@material-tailwind/react';
import { useState } from 'react';

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
      className="fixed top-[200px] right-0 w-[300px] z-30 flex items-center h-[50px] text-3xl rounded-none  animate-in slide-in-from-right border-l-4 border-[#2ec946] bg-[#2ec946]/30 font-medium text-[#2ec946]"
    >
      Lưu thông tin thành công
    </Alert>
  );
}

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
    <section className="col-span-8 p-[30px] bg-background dark:bg-dark-profile-right rounded-[20px]">
      {messageIsShowed && <AlertCustomStyles />}
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
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Full name"
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
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Email"
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
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Phone number"
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
          {/* <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="password" className="text-3xl font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-[#D2D1D6]"
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Invalid password.
              </p>
            )}
          </div> */}
        </div>
        <div className="mt-[30px] flex justify-end gap-[30px] items-center">
          <Link to={ROUTES.PROFILE} className="text-2xl font-medium">
            Huỷ
          </Link>
          <button
            type="submit"
            className="text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-primary text-[#1A162E]"
          >
            {text}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditInfo;
