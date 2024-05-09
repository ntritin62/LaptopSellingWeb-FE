import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DUMMY_ORDERS = [
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'delivered',
  },
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'pending',
  },
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'pending',
  },
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'paid',
  },
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'canceled',
  },
  {
    id: 'I293DSA39',
    items: '2',
    date: 'January 20, 2022',
    amount: 'Nguyễn Trí Tín',
    status: 'failed',
  },
];
const AdminOrders = () => {
  const [orders, setOrders] = useState(DUMMY_ORDERS);
  const filterStatus = (e) => {
    setOrders(DUMMY_ORDERS.filter((order) => order.status === e.target.value));
  };
  return (
    <div className="container">
      <h1 className="text-4xl font-bold ">Đơn hàng</h1>

      <div className="bg-white p-[20px] shadow-xl rounded-xl mt-[20px]">
        <label
          htmlFor="status"
          className="text-[#595959] text-2xl font-medium mr-[10px]"
        >
          Trạng thái:{' '}
        </label>
        <select
          name="status"
          id="status"
          className="w-[150px] bg-white text-text border-solid border-[1px] border-[#D1D5DB] p-[10px] rounded-xl"
          onChange={filterStatus}
        >
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
          <option value="paid">Paid</option>
          <option value="canceled">Canceled</option>
          <option value="failed">Failed</option>
        </select>
        <table className="w-full mt-[20px] h-[500px] overflow-scroll">
          <tr className="grid grid-cols-12 text-[#595959] text-xl">
            <thead className="col-span-2">ID</thead>
            <thead className="col-span-2">Sản phẩm</thead>
            <thead className="col-span-2">Ngày mua</thead>
            <thead className="col-span-2">Khách hàng</thead>
            <thead className="col-span-2">Trạng thái</thead>
            <thead className="col-span-2"></thead>
          </tr>
          <div className="bg-[#bfbfbf] h-[2px] w-full mt-[5px]"></div>
          {orders.map((order) => (
            <tr className="grid grid-cols-12 mt-[20px] text-[#303030]">
              <td className="col-span-2">{order.id}</td>
              <td className="col-span-2">{order.items}</td>
              <td className="col-span-2">{order.date}</td>
              <td className="col-span-2">{order.amount}</td>
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
              <td className="col-span-2 ">
                <Link to={order.id} className="flex gap-[5px]">
                  <img
                    src="/icons/view.svg"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <p>Xem</p>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
