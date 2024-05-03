import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from './components/Footer';
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[500px]">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
