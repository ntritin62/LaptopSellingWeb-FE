import React, { useState } from 'react';
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  ScaleIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from './components/Footer';
import LaptopCompare from '../../components/LaptopCompare';
import BottomNavbar from '../../components/BottomNavBar';

const Layout = () => {
  const labelProps = {
    variant: 'h3',
    color: 'green',
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal',
  };
  const [laptopCompareIsShowed, setLaptopCompareIsShowed] = useState(false);
  const showCompare = () => {
    setLaptopCompareIsShowed(true);
  };
  const [sidebarIsShowed, setSidebarIsShowed] = useState(false);
  const closeSidebar = () => {
    setSidebarIsShowed(false);
  };

  return (
    <div>
      <div className="z-80 sm:hidden">
        {laptopCompareIsShowed && (
          <LaptopCompare close={setLaptopCompareIsShowed} />
        )}
      </div>
      <Header
        closeSidebar={closeSidebar}
        sidebarIsShowed={sidebarIsShowed}
        setSidebarIsShowed={setSidebarIsShowed}
      />
      <div className="min-h-[500px]">
        <Outlet />
      </div>
      <div className="fixed bottom-[30px] right-[30px] sm:hidden">
        <div className="relative h-80 w-full">
          <div className="absolute bottom-0 right-0 ">
            <SpeedDial className="shadow-lg">
              <SpeedDialHandler className="w-[150px] h-[150px] shadow-2xl  bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-80 ">
                <IconButton size="lg" className="rounded-full">
                  <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </IconButton>
              </SpeedDialHandler>
              <SpeedDialContent onClick={showCompare}>
                <SpeedDialAction className="relative">
                  <ScaleIcon className="h-30 w-30 action-icon" />
                </SpeedDialAction>
              </SpeedDialContent>
            </SpeedDial>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 hidden sm:block">
        <BottomNavbar setSidebarIsShowed={setSidebarIsShowed} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
