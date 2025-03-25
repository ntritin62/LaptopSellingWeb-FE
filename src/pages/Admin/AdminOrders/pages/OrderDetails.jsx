import React, { useState } from 'react';
const status = ['pending', 'paid', 'delivering', 'delivered', 'canceled'];
import AlertCustomStyles from '../../../../components/Alert';
import { useLoaderData } from 'react-router-dom';
import { CustomStepper } from '../../../../components/Stepper';
import getAuthToken from '../../../../services/getToken';
import axios from 'axios';
const OrderDetails = () => {
  const data = useLoaderData();
  const token = getAuthToken();
  console.log(data);

  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const [order, setOrder] = useState(data);
  const changeStatus = async (e) => {
    e.preventDefault();

    setOrder((prev) => {
      return { ...prev, status: e.target[0].value };
    });

    const response = await axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/updateOrderStatus`,
      { orderId: order.id, orderStatus: e.target[0].value },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
        <form onSubmit={changeStatus}>
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
            defaultValue={order.status}
          >
            <option value="delivering">Đang giao</option>
            <option value="delivered">Đã giao</option>
            <option value="canceled">Đã huỷ</option>
          </select>
          <button
            type="submit"
            className="bg-primary px-[20px] py-[10px] text-2xl font-medium text-white hover:opacity-80 rounded-md ml-[15px]"
          >
            Cập nhật
          </button>
        </form>
        <CustomStepper
          activeStep={status.findIndex((status) => status === order.status)}
        />
        <div className="flex justify-between items-center p-[10px]">
          <p>
            <span className="text-3xl font-medium">Ngày mua: </span>
            {new Date(order.created_at).toLocaleDateString('vi-VI')}
          </p>
        </div>
        <div className="mt-[10px]">
          {order.order_items.map((item) => (
            <section key={item.product.id} className="">
              <section className="grid grid-cols-12">
                <img
                  src={item.product.image_url}
                  alt=""
                  className="col-span-2 sm:col-span-4 w-[100px] h-[100px] object-contain rounded-[10px] overflow-hidden"
                />
                <div className="col-span-8 sm:col-span-5 flex flex-col justify-between px-[10px]">
                  <p className="text-2xl font-medium">{item.product.name}</p>
                </div>
                <p className="col-span-2 sm:col-span-3 text-right">
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              </section>
              <div className="w-full h-[1px] my-[20px] bg-border"></div>
            </section>
          ))}
          <div className="sm:text-2xl mt-[20px] flex justify-between">
            <div className=" sm:pr-[20px]">
              <p>
                <span className="font-medium">Tên:</span>{' '}
                {order.address && order.address.recipientName !== null
                  ? order.address.recipientName
                  : ''}
              </p>
              <p>
                <span className="font-medium">Địa chỉ:</span>{' '}
                {order.address && order.address.deliveryAddress !== null
                  ? order.address.deliveryAddress
                  : ''}
              </p>
              <p>
                <span className="font-medium">SĐT:</span>{' '}
                {order.address && order.address.contactNumber !== null
                  ? order.address.contactNumber
                  : ''}
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
