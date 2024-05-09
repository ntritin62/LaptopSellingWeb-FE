import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import * as ROUTES from '../../../../../../constants/routes';
const OrdersPage = () => {
  const { orders } = useLoaderData();

  return (
    <section className="col-span-8 p-[30px] bg-background dark:bg-dark-profile-right rounded-[20px]">
      <div className="flex items-center gap-[10px]">
        <Link to={ROUTES.PROFILE}>
          <img src="/icons/arrow-left.svg" alt="" className="dark-icon" />
        </Link>
        <h2 className="text-3xl font-medium">Đơn hàng của tôi</h2>
      </div>

      {orders.length === 0 && (
        <>
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="/icons/no-order.png"
              alt=""
              className="w-[200px] h-[200px]"
            />
            <span className="mt-[30px] text-4xl font-medium">
              Bạn không có đơn hàng nào
            </span>
          </div>
        </>
      )}
      {orders.length > 0 && (
        <div className="mt-[30px] h-[500px] overflow-auto">
          <ul>
            {orders.map((order) => (
              <li
                key={order._id}
                className="mt-[10px] rounded-[10px] p-[20px] bg-bg-secondary dark:bg-header-shadow"
              >
                <div className="flex justify-between items-center p-[10px]">
                  <p>
                    <span className="text-3xl font-medium">Ngày mua: </span>
                    {new Date(order.createdAt).toLocaleDateString('vi-VI')}
                  </p>
                  <div className="flex gap-[10px]">
                    {order.status && (
                      <img
                        src="/icons/completed.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    )}
                    {!order.status && (
                      <img
                        src="/icons/clock.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    )}
                    <p
                      className={
                        order.status
                          ? 'text-[#11bc5d] text-3xl'
                          : 'text-[#5b9bf1] text-3xl'
                      }
                    >
                      {order.status ? 'Hoàn thành' : 'Đang xử lý'}
                    </p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  {order.products.map(({ productId, quantity, _id }) => (
                    <li key={productId._id}>
                      <section className="grid grid-cols-12">
                        <img
                          src={productId.images[0]}
                          alt=""
                          className="col-span-2 sm:col-span-4 w-[100px] h-[100px] object-contain rounded-[10px] overflow-hidden"
                        />
                        <div className="col-span-8 sm:col-span-5 flex flex-col justify-between px-[10px]">
                          <p className="text-2xl font-medium">
                            {productId.name}
                          </p>
                          <p>Số lượng: {quantity}</p>
                        </div>
                        <p className="col-span-2 sm:col-span-3 text-right">
                          $
                          {(
                            productId.price -
                            (productId.sale / 100) * productId.price
                          ).toFixed(2)}
                        </p>
                      </section>
                      <div className="w-full h-[1px] my-[20px] bg-border  dark:bg-dark-top-menu-border"></div>
                    </li>
                  ))}

                  <div className="sm:text-2xl mt-[20px] flex justify-between">
                    <div className=" sm:pr-[20px]">
                      <p>
                        <span className="font-medium">Tên:</span>{' '}
                        {order.shipping.name}
                      </p>
                      <p>
                        <span className="font-medium">Địa chỉ:</span>{' '}
                        {order.shipping.address}
                      </p>
                      <p>
                        <span className="font-medium">SĐT:</span>{' '}
                        {order.shipping.phoneNumber}
                      </p>
                    </div>
                    <p className="text-right text-3xl font-bold">
                      Amount: ${order.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default OrdersPage;
