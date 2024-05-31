import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu.jsx';
const PhoneNavbar = ({ closeSidebar }) => {
  return (
    <aside className=" fixed top-0 left-0 bottom-0 right-0 z-50 ">
      <div
        onClick={closeSidebar}
        className="bg-[#000] w-full h-screen  opacity-20 z-40 transition-opacity duration-500"
      ></div>
      <div className="fixed top-0 left-0 bottom-0 overflow-auto z-50 h-auto p-[15px] w-[250px] bg-[#222] text-[#999]  animate-in slide-in-from-left duration-500 ">
        <nav>
          <ul className="flex flex-col">
            <SubMenu
              name="Macbook"
              close={closeSidebar}
              to="./san-pham/macbook"
              // subMenuArr={[
              //   {
              //     name: 'MacBook Pro',
              //     // subMenuArr: [
              //     //   { name: 'MacBook Pro 2023' },
              //     //   { name: 'MacBook Pro 2022' },
              //     //   { name: 'MacBook Pro 2021' },
              //     //   { name: 'MacBook Pro 2020' },
              //     //   { name: 'MacBook Pro 2019' },
              //     //   { name: 'MacBook Pro M3' },
              //     //   { name: 'MacBook Pro M2' },
              //     //   { name: 'MacBook Pro M1' },
              //     //   { name: 'MacBook Pro 14 inch' },
              //     //   { name: 'MacBook Pro 16 inch' },
              //     //   { name: 'MacBook Pro 13 inch' },
              //     //   { name: 'MacBook Pro 15 inch' },
              //     //   { name: 'MacBook Pro Cũ' },
              //     // ],
              //   },
              //   {
              //     name: 'MacBook Air',
              //     // subMenuArr: [
              //     //   { name: 'MacBook Air 2023' },
              //     //   { name: 'MacBook Air 2022' },
              //     //   { name: 'MacBook Air 2021' },
              //     //   { name: 'MacBook Air 2020' },
              //     //   { name: 'MacBook Air 2019' },
              //     //   { name: 'MacBook Air M3' },
              //     //   { name: 'MacBook Air M2' },
              //     //   { name: 'MacBook Air M1' },
              //     //   { name: 'MacBook Air 14 inch' },
              //     //   { name: 'MacBook Air 16 inch' },
              //     //   { name: 'MacBook Air 13 inch' },
              //     //   { name: 'MacBook Air 15 inch' },
              //     //   { name: 'MacBook Air Cũ' },
              //     // ],
              //   },
              //   {
              //     name: 'MacBook M Series',
              //     // subMenuArr: [
              //     //   { name: 'MacBook M3' },
              //     //   { name: 'MacBook M2' },
              //     //   { name: 'MacBook M1' },
              //     // ],
              //   },
              // ]}
            />
            <SubMenu
              name="Surface"
              close={closeSidebar}
              to="./san-pham/surface"
              // subMenuArr={[
              //   {
              //     name: 'Surface Pro',
              //   },
              //   {
              //     name: 'Surface Laptop',
              //   },
              //   {
              //     name: 'Surface Laptop Studio',
              //   },
              //   {
              //     name: 'Surface Book',
              //   },
              //   {
              //     name: 'Surface Go',
              //   },
              // ]}
            />
            <SubMenu
              name="ThinkPad"
              close={closeSidebar}
              to="./san-pham/thinkpad"
              // subMenuArr={[
              //   {
              //     name: 'Thinkpad X1 Series',
              //   },
              //   {
              //     name: 'Thinkpad P Series',
              //   },
              //   {
              //     name: 'Thinkpad T Series',
              //   },
              //   {
              //     name: 'Thinkpad X Series',
              //   },
              // ]}
            />
            <SubMenu name="DELL" to="./san-pham/dell" close={closeSidebar} />
            <SubMenu name="HP" to="./san-pham/hp" close={closeSidebar} />
            <SubMenu name="Razer" to="./san-pham/razer" close={closeSidebar} />
            <SubMenu name="LG" to="./san-pham/lg" close={closeSidebar} />
            <SubMenu
              name="SAMSUNG"
              to="./san-pham/samsung"
              close={closeSidebar}
            />
            <SubMenu name="ASUS" to="./san-pham/asus" close={closeSidebar} />
            <SubMenu
              name="Lenovo"
              to="./san-pham/lenovo"
              close={closeSidebar}
            />
            <SubMenu name="MSI" to="./san-pham/msi" close={closeSidebar} />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default PhoneNavbar;
