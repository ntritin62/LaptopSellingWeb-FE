import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import * as ROUTES from '../../../../../../constants/routes';
import { CustomStepper } from '../../../../../../components/Stepper';
const status = ['pending', 'paid', 'delivering', 'delivered', 'canceled'];
const OrdersPage = () => {
  const { orders } = useLoaderData();

  return (
    <section className="col-span-8 p-[30px] bg-background shadow-xl dark:bg-dark-profile-right rounded-[20px]">
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
                <div className="sm:hidden">
                  <CustomStepper
                    activeStep={status.findIndex(
                      (status) => status === order.status
                    )}
                  />
                </div>
                <div className="hidden sm:block">
                  {order.status === 'pending' && (
                    <p className="bg-[#DBEAFE] text-[#1E40AF] border-[1px] border-solid border-[#93C5FD] w-full text-center rounded-lg">
                      Đang xác nhận
                    </p>
                  )}
                  {order.status === 'delivering' && (
                    <p className="bg-[#D1FAE5] text-[#065F46] border-[1px] border-solid border-[#6EE7B7] w-full text-center rounded-lg">
                      Đang giao
                    </p>
                  )}

                  {order.status === 'paid' && (
                    <p className="bg-[#FEF3C7] text-[#92400E] border-[1px] border-solid border-[#FCD34D] w-full text-center rounded-lg">
                      Đã thanh toán
                    </p>
                  )}
                  {order.status === 'canceled' && (
                    <p className="bg-[#FCE7F3] text-[#9D174D] border-[1px] border-solid border-[#F9A8D4] w-full text-center rounded-lg">
                      Đã huỷ
                    </p>
                  )}
                </div>
                {order.status === 'delivered' && (
                  <p className="bg-[#FEE2E2] text-[#991B1B] border-[1px] border-solid border-[#FCA5A5] w-full text-center rounded-lg">
                    Đã giao
                  </p>
                )}
                <div className="p-[10px] ">
                  <p className="text-3xl sm:text-2xl font-medium mt-[20px]">
                    <span>Ngày mua: </span>
                    {new Date(order.createdAt).toLocaleDateString('vi-VI')}
                  </p>
                </div>
                <div className="mt-[10px]">
                  {order.orderItems.map(
                    ({ product, name, imageUrl, price }) => (
                      <section key={product._id} className="">
                        <section className="grid grid-cols-12">
                          <img
                            src={imageUrl}
                            alt=""
                            className="col-span-2 sm:col-span-4 w-[100px] h-[100px] object-contain rounded-[10px] overflow-hidden"
                          />
                          <div className="col-span-8 sm:col-span-5 flex flex-col justify-between px-[10px]">
                            <p className="text-2xl font-medium sm:text-xl">
                              {name}
                            </p>
                          </div>
                          <p className="col-span-2 sm:col-span-3 text-right sm:text-xl">
                            {price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          </p>
                        </section>
                        <div className="w-full h-[1px] my-[20px] bg-border"></div>
                      </section>
                    )
                  )}
                  <div className="sm:text-xl mt-[20px] flex justify-between">
                    <div className=" sm:pr-[20px]">
                      <p>
                        <span className="font-medium">Tên:</span>{' '}
                        {order.address.recipientName}
                      </p>
                      <p>
                        <span className="font-medium">Địa chỉ:</span>{' '}
                        {order.address.deliveryAddress}
                      </p>
                      <p>
                        <span className="font-medium">SĐT:</span>{' '}
                        {order.address.contactNumber}
                      </p>
                    </div>
                    <p className="text-right text-3xl sm:text-2xl font-bold">
                      Tổng cộng:{' '}
                      {order.total
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
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
