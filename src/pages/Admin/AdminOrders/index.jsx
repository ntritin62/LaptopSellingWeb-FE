import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

const AdminOrders = () => {
  const data = useLoaderData();
  console.log(data[0]);

  const sortedData = [...data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const [orders, setOrders] = useState(sortedData);

  const filterStatus = (e) => {
    if (e.target.value == 'all') {
      setOrders(data);
    } else {
      setOrders(data.filter((order) => order.status === e.target.value));
    }
  };

  return (
    <div className="container mt-[70px]">
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
          <option value="all">Tất cả</option>
          <option value="pending">Đang xác nhận</option>
          <option value="paid">Đã thanh toán</option>
          <option value="delivering">Đang giao</option>
          <option value="delivered">Đã giao</option>
          <option value="canceled">Đã huỷ</option>
        </select>
        <table className="w-full mt-[20px] h-[500px] overflow-scroll">
          <tr className="grid grid-cols-12 text-[#595959] text-xl">
            <thead className="col-span-3">ID</thead>
            <thead className="col-span-1">Sản phẩm</thead>
            <thead className="col-span-2">Ngày mua</thead>
            <thead className="col-span-2">Khách hàng</thead>
            <thead className="col-span-3">Trạng thái</thead>
            <thead className="col-span-1"></thead>
          </tr>
          <div className="bg-[#bfbfbf] h-[2px] w-full mt-[5px]"></div>
          <div className="max-h-[480px] overflow-y-auto">
            {orders.map((order) => (
              <tr key={order.id} className="grid grid-cols-12 mt-[20px] text-[#303030]">
                <td className="col-span-3">{order.id}</td>
                <td className="col-span-1">{order.orderItems.length}</td>
                <td className="col-span-2">
                  {new Date(order.createdAt).toLocaleDateString(
                    'en-GB',
                    options
                  )}
                </td>
                <td className="col-span-2">{order.user.fullName}</td>
                <td className="col-span-3">
                  {order.status === 'pending' && (
                    <p className="bg-[#DBEAFE] text-[#1E40AF] border-[1px] border-solid border-[#93C5FD] w-[200px] text-center rounded-lg">
                      Đang xác nhận
                    </p>
                  )}
                  {order.status === 'delivering' && (
                    <p className=" bg-amber-50 text-orange-600 border-orange-600 border-[1px] border-solid  w-[200px] text-center rounded-lg">
                      Đang giao
                    </p>
                  )}
                  {order.status === 'paid' && (
                    <p className="bg-[#FEF3C7] text-[#92400E] border-[1px] border-solid border-[#FCD34D] w-[200px] text-center rounded-lg">
                      Đã thanh toán
                    </p>
                  )}
                  {order.status === 'canceled' && (
                    <p className="bg-[#FCE7F3] text-[#9D174D] border-[1px] border-solid border-[#F9A8D4] w-[200px] text-center rounded-lg">
                      Đã huỷ
                    </p>
                  )}
                  {order.status === 'delivered' && (
                    <p className=" bg-[#D1FAE5] text-[#065F46] border-[1px] border-solid border-[#6EE7B7]  w-[200px] text-center rounded-lg">
                      Đã giao
                    </p>
                  )}
                </td>
                <td className="col-span-1 ">
                  <Link to={`${order.id}`} className="flex gap-[5px]">
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
          </div>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
