import React, { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from './components/Footer';
import LaptopCompare from '../../components/LaptopCompare';
const Layout = () => {
  const [laptopCompareIsShowed, setLaptopCompareIsShowed] = useState(false);
  const showCompare = () => {
    setLaptopCompareIsShowed(true);
  };
  return (
    <div>
      <div className="z-80">
        {laptopCompareIsShowed && (
          <LaptopCompare close={setLaptopCompareIsShowed} />
        )}
      </div>
      <Header />
      <div className="min-h-[500px]">
        <Outlet />
      </div>
      <div className="fixed bottom-[30px] right-[30px]">
        <button
          onClick={showCompare}
          className="w-[70px] h-[70px] bg-white shadow-2xl  rounded-full"
        >
          <img
            src="/icons/compare.png"
            alt=""
            className="w-[50px] h-[50px] mx-auto"
          />
        </button>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
