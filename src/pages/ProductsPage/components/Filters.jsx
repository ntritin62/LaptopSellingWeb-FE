import React, { useState } from 'react';

const Filters = ({ name, options, filteredItems, set }) => {
  const removeHandler = (option) => {
    set((prev) => prev.filter((item) => item !== option));
  };
  const onChangeHandler = (event) => {
    const isChecked = event.target.checked;

    if (!isChecked) {
      set((prev) => prev.filter((item) => item !== event.target.value));
    } else {
      set((prev) => [...prev, event.target.value]);
    }
  };

  return (
    <div className="group relative min-w-[70px] bg-[#f3f4f6] border-solid border-[1px] border-[#e5e7eb] py-[5px] px-[10px] inline-block rounded-[10px] ">
      <div className="flex gap-[15px] items-center">
        <p className="text-xl">{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[10px] h-[10px]"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
      <div className="absolute invisible group-hover:visible bg-white top-[100%] left-0 z-20 w-[370px] shadow-[0_2px_20px_rgba(0,0,0,.5)] rounded-[8px] p-[10px]">
        <ul className="grid grid-cols-3 gap-[10px]">
          {options.map((option) => (
            <li key={option}>
              <label
                className={`inline-flex px-[10px] py-[10px] rounded-[10px] border-[1px] border-solid border-primary min-w-[70px] ${
                  filteredItems.includes(option)
                    ? 'bg-[#ffc10733]'
                    : 'bg-[#f3f4f6]'
                } `}
              >
                <input
                  id={option}
                  type="checkbox"
                  hidden
                  value={option}
                  onChange={onChangeHandler}
                />
                {filteredItems.includes(option) && (
                  <svg
                    onClick={() => {
                      removeHandler(option);
                    }}
                    style={{ marginRight: '5px', fill: '#d70018' }}
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"></path>
                  </svg>
                )}
                <p className="text-xl cursor-pointer">{option}</p>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
