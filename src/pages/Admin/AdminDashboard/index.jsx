import React from 'react';
import { Link } from 'react-router-dom';
const DUMMY_ORDERS = [
  {
    id: 'I293DSA39',
    items: 'Iphone 13',
    date: 'January 20, 2022',
    amount: '$799.00',
    status: 'approved',
  },
  {
    id: 'I293DSA39',
    items: 'Iphone 13',
    date: 'January 20, 2022',
    amount: '$799.00',
    status: 'pending',
  },
  {
    id: 'I293DSA39',
    items: 'Iphone 13',
    date: 'January 20, 2022',
    amount: '$799.00',
    status: 'pending',
  },
];
const AdminDashboard = () => {
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
              $45800 <span className="text-xl">tháng này</span>{' '}
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
              245 <span className="text-xl">tháng này</span>{' '}
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
              25 <span className="text-xl">tháng này</span>{' '}
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
            <p className="text-text">Tới trang đơn hàng</p>
            <img
              src="/icons/arrow-r.svg"
              alt=""
              className="icon w-[20px] h-[20px]"
            />
          </Link>
        </div>
        <table className="w-full mt-[20px]">
          <tr className="grid grid-cols-10 text-[#595959] text-xl">
            <thead className="col-span-2">ID</thead>
            <thead className="col-span-2">Sản phẩm</thead>
            <thead className="col-span-2">Ngày mua</thead>
            <thead className="col-span-2">Giá</thead>
            <thead className="col-span-2">Trạng thái</thead>
          </tr>
          <div className="bg-[#bfbfbf] h-[2px] w-full mt-[5px]"></div>
          {DUMMY_ORDERS.map((order) => (
            <tr className="grid grid-cols-10 mt-[20px] text-[#303030]">
              <td className="col-span-2">{order.id}</td>
              <td className="col-span-2">{order.items}</td>
              <td className="col-span-2">{order.date}</td>
              <td className="col-span-2">{order.amount}</td>
              <td className="col-span-2">
                {order.status === 'pending' && (
                  <p className="bg-[#E8F0FF] text-[#6C97DE] w-[100px] text-center rounded-lg">
                    Pending
                  </p>
                )}
                {order.status === 'approved' && (
                  <p className="bg-[#DBF4DC] text-[#6FB75D] w-[100px] text-center rounded-lg">
                    Approved
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
