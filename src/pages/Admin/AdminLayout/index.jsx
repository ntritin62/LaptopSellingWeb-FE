import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-[15px] bg-[#F9F9FA]">
      <div className="col-span-2 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-10 ">
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AdminLayout;
