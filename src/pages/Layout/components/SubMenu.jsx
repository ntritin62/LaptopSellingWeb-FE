import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SubMenu = ({ name, subMenuArr = [], to, close }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <li onClick={close}>
      <div className="flex justify-between items-center py-[15px]  border-b-[1px] border-solid border-[#393939]">
        <Link to={to}>{name}</Link>

        {subMenuArr.length > 0 && !showSubMenu && (
          <img
            src="/icons/plus.svg"
            alt=""
            className="sidebar-icon w-[18px] h-[18px] group-show"
            onClick={toggleSubMenu}
          />
        )}
        {subMenuArr.length > 0 && showSubMenu && (
          <img
            src="/icons/minus.svg"
            alt=""
            className="sidebar-icon w-[18px] h-[18px] group-show"
            onClick={toggleSubMenu}
          />
        )}
      </div>
      <ul
        className={`animate-in slide-in-from-top-9 duration-150 pl-[15px] top-[100%] ${
          showSubMenu ? 'block' : 'hidden'
        }`}
      >
        {subMenuArr.length > 0 &&
          subMenuArr.map((subMenu) => (
            <SubMenu
              key={subMenu.name}
              name={subMenu.name}
              subMenuArr={subMenu.subMenuArr}
            />
          ))}
      </ul>
    </li>
  );
};

export default SubMenu;
