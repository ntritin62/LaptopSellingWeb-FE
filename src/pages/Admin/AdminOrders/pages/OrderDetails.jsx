import React, { useState } from 'react';
const DUMMY_ORDER = {
  _id: 'I293DSA39',
  total: 32990000,
  createdAt: 'January 20, 2022',
  status: 'delivered',
  user: {
    name: 'Nguyễn Trí Tín',
    address: 'Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh',
    phoneNumber: '123456789',
  },
  orderItems: [
    {
      name: 'ASUS TUF Gaming A15 FA507UV LP090W',
      imageUrl:
        'https://product.hstatic.net/200000722513/product/3c8369547fcabdb9bb7246d4bfd_08d3a41e75cb4d01a3964f93b53f34b3_1024x1024_4e4ad72c9a5d4c4da144e68ef4de5dec_1024x1024.png',
      price: 32990000,
      product: {},
    },
    {
      name: 'ASUS TUF Gaming A15 FA507UV LP090W',
      imageUrl:
        'https://product.hstatic.net/200000722513/product/3c8369547fcabdb9bb7246d4bfd_08d3a41e75cb4d01a3964f93b53f34b3_1024x1024_4e4ad72c9a5d4c4da144e68ef4de5dec_1024x1024.png',
      price: 32990000,
      product: {},
    },
    {
      name: 'ASUS TUF Gaming A15 FA507UV LP090W',
      imageUrl:
        'https://product.hstatic.net/200000722513/product/3c8369547fcabdb9bb7246d4bfd_08d3a41e75cb4d01a3964f93b53f34b3_1024x1024_4e4ad72c9a5d4c4da144e68ef4de5dec_1024x1024.png',
      price: 32990000,
      product: {},
    },
  ],
};
import AlertCustomStyles from '../../../../components/Alert';
const OrderDetails = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const [order, setOrder] = useState(DUMMY_ORDER);
  const changeStatus = (e) => {
    setOrder((prev) => {
      return { ...prev, status: e.target.value };
    });
    setMessageIsShowed(true);
    setTimeout(() => {
      setMessageIsShowed(false);
    }, 1000);
  };
  return (
    <div className="container mb-[50px]">
      {messageIsShowed && (
        <AlertCustomStyles msg="Cập nhật trạng thái thành công" />
      )}

      <h1 className="text-4xl font-bold mt-[70px] ">Chi tiết đơn hàng</h1>
      <div
        key={order._id}
        className="mt-[10px] rounded-[10px] p-[20px] bg-white shadow-xl dark:bg-header-shadow"
      >
        <label
          htmlFor="status"
          className="text-[#595959] text-2xl font-medium mr-[10px]"
        >
          Cập nhật trạng thái:{' '}
        </label>
        <select
          name="status"
          id="status"
          className="w-[150px] bg-white text-text border-solid border-[1px] border-[#D1D5DB] p-[10px] rounded-xl"
          onChange={changeStatus}
          defaultValue={order.status}
        >
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
          <option value="paid">Paid</option>
          <option value="canceled">Canceled</option>
          <option value="failed">Failed</option>
        </select>
        <div className="flex justify-between items-center p-[10px]">
          <p>
            <span className="text-3xl font-medium">Ngày mua: </span>
            {new Date(order.createdAt).toLocaleDateString('vi-VI')}
          </p>
          <div className="flex gap-[10px]">
            {order.status === 'pending' && (
              <p className="px-[20px] py-[5px] text-3xl font-medium  bg-[#DBEAFE] text-[#1E40AF] border-[1px] border-solid border-[#93C5FD] w-[150px] text-center rounded-lg">
                Pending
              </p>
            )}
            {order.status === 'delivered' && (
              <p className="px-[20px] py-[5px] text-3xl font-medium  bg-[#D1FAE5] text-[#065F46] border-[1px] border-solid border-[#6EE7B7] w-[150px] text-center rounded-lg">
                Delivered
              </p>
            )}

            {order.status === 'paid' && (
              <p className="px-[20px] py-[5px] text-3xl font-medium  bg-[#FEF3C7] text-[#92400E] border-[1px] border-solid border-[#FCD34D] w-[150px] text-center rounded-lg">
                Paid
              </p>
            )}
            {order.status === 'canceled' && (
              <p className="px-[20px] py-[5px] text-3xl font-medium  bg-[#FCE7F3] text-[#9D174D] border-[1px] border-solid border-[#F9A8D4] w-[150px] text-center rounded-lg">
                Canceled
              </p>
            )}
            {order.status === 'failed' && (
              <p className="px-[20px] py-[5px] text-3xl font-medium  bg-[#FEE2E2] text-[#991B1B] border-[1px] border-solid border-[#FCA5A5] w-[150px] text-center rounded-lg">
                Failed
              </p>
            )}
          </div>
        </div>
        <div className="mt-[10px]">
          {order.orderItems.map(({ product, name, imageUrl, price }) => (
            <section key={product._id} className="">
              <section className="grid grid-cols-12">
                <img
                  src={imageUrl}
                  alt=""
                  className="col-span-2 sm:col-span-4 w-[100px] h-[100px] object-contain rounded-[10px] overflow-hidden"
                />
                <div className="col-span-8 sm:col-span-5 flex flex-col justify-between px-[10px]">
                  <p className="text-2xl font-medium">{name}</p>
                </div>
                <p className="col-span-2 sm:col-span-3 text-right">
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              </section>
              <div className="w-full h-[1px] my-[20px] bg-border"></div>
            </section>
          ))}
          <div className="sm:text-2xl mt-[20px] flex justify-between">
            <div className=" sm:pr-[20px]">
              <p>
                <span className="font-medium">Tên:</span> {order.user.name}
              </p>
              <p>
                <span className="font-medium">Địa chỉ:</span>{' '}
                {order.user.address}
              </p>
              <p>
                <span className="font-medium">SĐT:</span>{' '}
                {order.user.phoneNumber}
              </p>
            </div>
            <p className="text-right text-3xl font-bold">
              Tổng cộng:{' '}
              {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
