import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ name, src, subMenuArr = [], to }) => {
  return (
    <li className="group">
      <Link to={to}>
        <div className="flex items-center justify-center p-[10px] min-w-[100px]  gap-[10px] hover:bg-white hover:text-primary transition-colors ease-in-out duration-500">
          <img src={src} alt="" className="max-w-[45px] w-auto h-[35px]" />
        </div>
      </Link>
      <ul className="invisible group-hover:visible transition duration-150 flex absolute top-[100%] left-0 right-0 z-30 bg-white mx-[1.5rem] shadow-lg rounded-xl">
        {subMenuArr.map((submenu) => (
          <Link key={submenu.name}>
            <li className=" px-[5px] relative flex flex-col items-center hover:bg-[#fef3e0] h-full w-[120px]">
              <div className="p-[15px]">
                <img
                  src={submenu.src}
                  alt=""
                  className=" width-[60px] h-[60px]"
                />
              </div>
              <a className="text-xl text-center mb-[10px] hover:text-primary w-full">
                {submenu.name}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </li>
  );
};

export default Navbar;
