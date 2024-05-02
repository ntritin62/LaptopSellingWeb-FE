import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
