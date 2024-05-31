import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useSubmit, useActionData } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Helmet } from 'react-helmet';

const SignUpPage = () => {
  const submit = useSubmit();
  const [passwordIsShowed, setPasswordIsShowed] = useState({
    password: false,
    confirmPassword: false,
  });
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
      action: ROUTES.SIGNUP,
    });
  };

  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
      </Helmet>
      <main className="grid grid-cols-2 md:grid-cols-1 ">
        <div className="  md:hidden flex flex-col items-center  gap-[20px]">
          <div className="dark:bg-white rounded-full w-[250px] h-[250px] flex mt-[70px] items-center justify-center">
            <img src="/images/logo.png" alt="" className="" />
          </div>
          <img
            src="/images/banner-ls.png"
            alt=""
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
        <div className="bg-right-login dark:bg-dark-right-login w-full">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col px-[130px] pt-[30px] gap-[50px] pb-[50px] sm:px-[10px]"
          >
            <div className="flex items-center justify-center gap-[14px]">
              <img
                src="/images/logo.png"
                alt=""
                className="w-[200px] h-[50px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-4xl font-medium text-center">Đăng ký</h1>
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
                  src="/icon/mail.svg"
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
                  type={!passwordIsShowed.password ? 'password' : 'text'}
                  className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
                  placeholder="Mật khẩu"
                  autoComplete="off"
                />
                <img
                  src={
                    passwordIsShowed.password
                      ? '/icons/closed-eye.svg'
                      : '/icons/eye.svg'
                  }
                  alt=""
                  className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                  onClick={() => {
                    setPasswordIsShowed((prevState) => {
                      return {
                        password: !prevState.password,
                        confirmPassword: prevState.confirmPassword,
                      };
                    });
                  }}
                />
                {errors.password && (
                  <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                    Mật khẩu cần phải có 6 ký tự
                  </p>
                )}
              </div>

              <div className="relative mt-[10px]">
                <input
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value, formValues) =>
                      value === formValues.password,
                  })}
                  type={!passwordIsShowed.confirmPassword ? 'password' : 'text'}
                  className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
                  placeholder="Xác nhận mật khẩu"
                  autoComplete="off"
                />
                <img
                  src={
                    passwordIsShowed.confirmPassword
                      ? '/icons/closed-eye.svg'
                      : '/icons/eye.svg'
                  }
                  alt=""
                  className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                  onClick={() => {
                    setPasswordIsShowed((prevState) => {
                      return {
                        password: prevState.password,
                        confirmPassword: !prevState.confirmPassword,
                      };
                    });
                  }}
                />
                {errors.confirmPassword && (
                  <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                    Xác nhận mật khẩu không khớp
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-80  text-white rounded-[10px] bg-primary hover:shadow-2xl  py-[12px] text-3xl font-medium"
            >
              Đăng ký
            </button>
            <p className="font-normal text-2xl text-login-text text-center mt-[20px]">
              Đã có tài khoản ?{' '}
              <Link to={ROUTES.LOGIN} className="text-[#0071DC] font-medium ">
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
