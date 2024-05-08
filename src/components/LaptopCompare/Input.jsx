import React, { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';

const Input = ({ setLaptop, index }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/laptops'
        );
        setData(response.data.laptops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const [laptops, setLaptops] = useState([]);
  const inputHandler = (e) => {
    setLaptops(
      data.filter((laptop) =>
        laptop.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const clickHandler = (laptop) => {
    setLaptops([]);
    setLaptop(laptop);
  };
  return (
    <div className=" relative">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="bg-white border-solid border-[1px] border-[#ccc] p-[10px] w-[250px] rounded-lg text-2xl"
        onChange={inputHandler}
      />
      {laptops.length > 0 && (
        <div
          className={`absolute top-[30px] index ${
            index ? 'left-0' : 'right-0'
          }   mt-[20px] bg-white shadow-xl border-solid border-[1px] border-[#ccc] rounded-sm w-[500px] h-[300px] overflow-y-scroll`}
        >
          {laptops.map((laptop) => (
            <div
              className="px-[20px] py-[10px] flex items-center gap-[20px] cursor-pointer "
              onClick={() => {
                clickHandler(laptop);
              }}
            >
              <img
                src={laptop.imageUrl}
                alt=""
                className="w-[50px] h-[50px] object-contain"
              />
              <p className="text-xl">{laptop.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
