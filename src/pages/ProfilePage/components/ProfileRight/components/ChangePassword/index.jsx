import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../../../constants/routes';
import { useForm } from 'react-hook-form';
import { Form, useNavigation } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import { useFetcher } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AlertCustomStyles from '../../../../../../components/Alert';
import { useActionData } from 'react-router-dom';

const ChangePassword = () => {
  const [error, setError] = useState();
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const fetcher = useFetcher();
  const submit = useSubmit();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const [passwordIsShowed, setPasswordIsShowed] = useState({
    oldPassword: false,
    password: false,
    confirmPassword: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const text =
    navigation.state === 'submitting'
      ? 'Đang lưu...'
      : navigation.state === 'loading'
      ? 'Đã lưu!'
      : 'Lưu địa chỉ';

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
    } else if (
      fetcher.state === 'idle' &&
      fetcher.data &&
      fetcher.data.status !== 200
    ) {
      setError(fetcher.data);
    }
  }, [fetcher.data, fetcher.state]);

  const submitHandler = async (data) => {
    fetcher.submit(data, { method: 'post' });
  };
  return (
    <section className="col-span-8 p-[30px] bg-background dark:bg-dark-profile-right rounded-[20px]">
      {messageIsShowed && <AlertCustomStyles msg="Đổi mật khẩu thành công" />}
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icons/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Đổi mật khẩu</h2>
      </div>
      <Form onSubmit={handleSubmit(submitHandler)} className="mt-[30px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          <div className="relative mt-[10px]">
            <label htmlFor="oldPassword" className="text-3xl font-medium">
              Mật khẩu cũ
            </label>
            <input
              {...register('oldPassword', { required: true, minLength: 6 })}
              type={!passwordIsShowed.oldPassword ? 'password' : 'text'}
              className="mt-[20px] p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
              placeholder="Mật khẩu cũ"
              autoComplete="off"
              id="oldPassword"
            />
            <img
              src={
                passwordIsShowed.oldPassword
                  ? '/icons/closed-eye.svg'
                  : '/icons/eye.svg'
              }
              alt=""
              className="icon absolute w-[24px] h-[24px] right-[10px] top-[60%]"
              onClick={() => {
                setPasswordIsShowed((prevState) => {
                  return {
                    oldPassword: !prevState.oldPassword,
                    password: prevState.password,
                    confirmPassword: prevState.confirmPassword,
                  };
                });
              }}
            />
            {errors.oldPassword && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Mật khẩu cần phải có 6 ký tự
              </p>
            )}
          </div>
          <div className="relative mt-[10px]">
            <label htmlFor="password" className="text-3xl font-medium">
              Mật khẩu mới
            </label>
            <input
              {...register('newPassword', { required: true, minLength: 6 })}
              type={!passwordIsShowed.password ? 'password' : 'text'}
              className="mt-[20px] p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
              placeholder="Mật khẩu mới"
              autoComplete="off"
              id="password"
            />
            <img
              src={
                passwordIsShowed.password
                  ? '/icons/closed-eye.svg'
                  : '/icons/eye.svg'
              }
              alt=""
              className="icon absolute w-[24px] h-[24px] right-[10px] top-[60%]"
              onClick={() => {
                setPasswordIsShowed((prevState) => {
                  return {
                    oldPassword: prevState.oldPassword,
                    password: !prevState.password,
                    confirmPassword: prevState.confirmPassword,
                  };
                });
              }}
            />
            {errors.newPassword && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Mật khẩu cần phải có 6 ký tự
              </p>
            )}
          </div>

          <div className="relative mt-[10px]">
            <label htmlFor="confirmPassword" className="text-3xl font-medium">
              Xác nhận mật khẩu mới
            </label>
            <input
              {...register('confirmPassword', {
                required: true,
                validate: (value, formValues) =>
                  value === formValues.newPassword,
              })}
              type={!passwordIsShowed.confirmPassword ? 'password' : 'text'}
              className="mt-[20px] p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-text"
              placeholder="Xác nhận mật khẩu mới"
              autoComplete="off"
              id="confirmPassword"
            />
            <img
              src={
                passwordIsShowed.confirmPassword
                  ? '/icons/closed-eye.svg'
                  : '/icons/eye.svg'
              }
              alt=""
              className="icon absolute w-[24px] h-[24px] right-[10px] top-[60%]"
              onClick={() => {
                setPasswordIsShowed((prevState) => {
                  return {
                    oldPassword: prevState.oldPassword,
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
      </Form>
      {error && (
        <p className="text-right mt-[20px] text-rose-900 font-medium">
          {error}
        </p>
      )}
    </section>
  );
};

export default ChangePassword;
