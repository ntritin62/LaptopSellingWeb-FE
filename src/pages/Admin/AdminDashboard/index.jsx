import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ADMIN_ORDERS } from '../../../constants/routes';
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const AdminDashboard = () => {
  const { ordersInfo, usersInfo } = useLoaderData();

  return (
    <div className=" mt-[70px] container">
      <ul className="flex gap-[20px] ">
        <li className="bg-white min-w-[250px] p-[20px] flex items-center gap-[20px] shadow-lg rounded-xl">
          <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-[#99BD62]">
            <img
              src="/icons/dollar.svg"
              alt=""
              className="white-icon w-[24px] h-[24px] object-contain"
            />
          </div>
          <div className="">
            <p className="text-xl text-[#a0a0a0]">Thu nhập</p>
            <p className="text-3xl font-medium">
              {ordersInfo.totalInMonth
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
              VNĐ
              <span className="text-xl"> tháng này</span>{' '}
            </p>
          </div>
        </li>
        <li className="bg-white min-w-[250px] p-[20px] flex items-center gap-[20px] shadow-lg rounded-xl">
          <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-[#B36FA8]">
            <img
              src="/icons/orders.svg"
              alt=""
              className="white-icon w-[24px] h-[24px] object-contain"
            />
          </div>
          <div className="">
            <p className="text-xl text-[#a0a0a0]">Đơn hàng</p>
            <p className="text-3xl font-medium">
              {ordersInfo.orders.length}{' '}
              <span className="text-xl">tháng này</span>{' '}
            </p>
          </div>
        </li>
        <li className="bg-white min-w-[250px] p-[20px] flex items-center gap-[20px] shadow-lg rounded-xl">
          <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-[#1E7DEC]">
            <img
              src="/icons/user.svg"
              alt=""
              className="white-icon w-[24px] h-[24px] object-contain"
            />
          </div>
          <div className="">
            <p className="text-xl text-[#a0a0a0]">Đăng ký</p>
            <p className="text-3xl font-medium">
              {usersInfo.users.length}{' '}
              <span className="text-xl">tháng này</span>{' '}
            </p>
          </div>
        </li>
      </ul>
      <div className="mt-[30px] p-[20px] bg-white shadow-lg rounded-lg ">
        <div className="flex items-center justify-between text-[#747474]">
          <h2 className="text-3xl text-[#303030] font-medium">
            Đơn hàng gần đây
          </h2>
          <Link className="flex items-center gap-[10px]">
            <Link to={ADMIN_ORDERS} className="text-text">
              Tới trang đơn hàng
            </Link>
            <img
              src="/icons/arrow-r.svg"
              alt=""
              className="icon w-[20px] h-[20px]"
            />
          </Link>
        </div>
        <table className="w-full mt-[20px]">
          <tr className="grid grid-cols-9 text-[#595959] text-xl">
            <thead className="col-span-2">ID</thead>
            <thead className="col-span-1">Sản phẩm</thead>
            <thead className="col-span-2">Ngày mua</thead>
            <thead className="col-span-2">Giá</thead>
            <thead className="col-span-2">Trạng thái</thead>
          </tr>
          <div className="bg-[#bfbfbf] h-[2px] w-full mt-[5px]"></div>
          {ordersInfo.orders.map((order) => (
            <tr className="grid grid-cols-9 mt-[20px] text-[#303030]">
              <td className="col-span-2">{order._id}</td>
              <td className="col-span-1">{order.orderItems.length}</td>
              <td className="col-span-2">
                {' '}
                {new Date(order.createdAt).toLocaleDateString('en-GB', options)}
              </td>
              <td className="col-span-2">
                {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </td>
              <td className="col-span-2">
                {order.status === 'pending' && (
                  <p className="bg-[#DBEAFE] text-[#1E40AF] border-[1px] border-solid border-[#93C5FD] w-[100px] text-center rounded-lg">
                    Pending
                  </p>
                )}
                {order.status === 'delivered' && (
                  <p className="bg-[#D1FAE5] text-[#065F46] border-[1px] border-solid border-[#6EE7B7] w-[100px] text-center rounded-lg">
                    Delivered
                  </p>
                )}

                {order.status === 'paid' && (
                  <p className="bg-[#FEF3C7] text-[#92400E] border-[1px] border-solid border-[#FCD34D] w-[100px] text-center rounded-lg">
                    Paid
                  </p>
                )}
                {order.status === 'canceled' && (
                  <p className="bg-[#FCE7F3] text-[#9D174D] border-[1px] border-solid border-[#F9A8D4] w-[100px] text-center rounded-lg">
                    Canceled
                  </p>
                )}
                {order.status === 'failed' && (
                  <p className="bg-[#FEE2E2] text-[#991B1B] border-[1px] border-solid border-[#FCA5A5] w-[100px] text-center rounded-lg">
                    Failed
                  </p>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
