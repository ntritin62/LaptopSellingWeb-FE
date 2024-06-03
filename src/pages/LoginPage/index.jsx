import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useSubmit, useActionData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/userSlice';
const LoginPage = () => {
  const submit = useSubmit();
  const [passwordIsShowed, setPasswordIsShowed] = useState(false);

  const dispatch = useDispatch();
  const err = useActionData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    submit(data, {
      method: 'post',
      action: ROUTES.LOGIN,
    });
  };
  const showPassword = () => {
    setPasswordIsShowed((prevState) => !prevState);
  };
  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <main className="grid grid-cols-2 md:grid-cols-1 ">
        <div className="  md:hidden flex flex-col items-center  gap-[20px]">
          <div className="dark:bg-white rounded-full w-[250px] flex mt-[70px] items-center justify-center">
            <img src="/images/logo.png" alt="" className="" />
          </div>
          <img
            src="/images/banner-ls.png"
            alt=""
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
        <div className="bg-right-login dark:bg-dark-right-login w-full">
          <Form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col px-[130px] pt-[30px] gap-[50px] sm:px-[10px]"
          >
            <div className="flex items-center mx-auto justify-center gap-[14px] w-[200px] h-[50px]">
              <img
                src="/images/logo.png"
                alt=""
                className="w-full h-full text-center object-contain"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-5xl font-medium text-center ">Đăng nhập</h1>
            </div>
            {err && (
              <p className="text-2xl font-medium text-rose-900 mx-auto rounded-lg bg-[#ffdce0] border-solid border-[2px] border-[#e8cacf] w-full h-[50px] flex items-center justify-center">
                {err}
              </p>
            )}
            <div className="flex flex-col gap-[20px]">
              <div className="relative">
                <input
                  {...register('email', {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  type="text"
                  className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
                  placeholder="Email"
                />
                <img
                  src="/icons/mail.svg"
                  alt=""
                  className="icon absolute right-[10px] top-[25%]"
                />
                {errors.email && (
                  <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                    Email không hợp lệ
                  </p>
                )}
              </div>

              <div className="relative mt-[10px]">
                <input
                  {...register('password', { required: true, minLength: 6 })}
                  type={!passwordIsShowed ? 'password' : 'text'}
                  className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
                  placeholder="Mật khẩu"
                  autoComplete="off"
                />
                <img
                  src={
                    passwordIsShowed
                      ? '/icons/closed-eye.svg'
                      : '/icons/eye.svg'
                  }
                  alt=""
                  className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                  onClick={showPassword}
                />
                {errors.password && (
                  <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                    Mật khẩu cần phải có 6 ký tự
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className=" hover:opacity-80 rounded-[10px] bg-primary text-white py-[12px] text-3xl font-medium hover:shadow-xl"
            >
              Đăng nhập
            </button>

            <p className="font-normal text-2xl text-login-text text-center mt-[20px]">
              Bạn chưa có tài khoản?{' '}
              <Link to={ROUTES.SIGNUP} className="text-[#0071DC] font-medium ">
                Đăng ký
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
