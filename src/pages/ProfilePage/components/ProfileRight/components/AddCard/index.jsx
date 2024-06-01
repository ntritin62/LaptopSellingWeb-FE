import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../../../constants/routes';
import { useForm } from 'react-hook-form';
import { Form, useNavigation } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import { useFetcher } from 'react-router-dom';
import AlertCustomStyles from '../../../../../../components/Alert';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const submit = useSubmit();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const fetcher = useFetcher();
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

  const submitHandler = (data) => {
    fetcher.submit(data, { method: 'post' });
  };
  return (
    <section className="col-span-8 p-[30px] bg-background shadow-xl dark:bg-dark-profile-right rounded-[20px]">
      {messageIsShowed && <AlertCustomStyles msg="Lưu thông tin thành công" />}
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icons/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Thêm địa chỉ</h2>
      </div>
      <Form onSubmit={handleSubmit(submitHandler)} className="mt-[30px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-1">
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="name" className="text-3xl font-medium">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
              placeholder="Họ và tên"
              {...register('recipientName', { required: true })}
            />
            {errors.recipientName && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Họ và tên không được để trống.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[20px] relative">
            <label htmlFor="phoneNumber" className="text-3xl font-medium">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
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
              className="p-[12px] border-[1px] border-solid border-[#D2D1D6] rounded-[10px] placeholder:text-text"
              placeholder="Địa chỉ"
              {...register('deliveryAddress', {
                required: true,
              })}
            />
            {errors.deliveryAddress && (
              <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                Địa chỉ không được để trống..
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
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-80  text-white text-2xl font-medium py-[10px] px-[20px] rounded-[30px] bg-primary text-[#1A162E]"
          >
            {text}
          </button>
        </div>
      </Form>
    </section>
  );
};

export default AddCard;
