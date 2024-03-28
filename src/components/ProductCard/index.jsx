import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link className="col-span-1">
      <section className="relative rounded-xl hover:scale-102 transition-transform duration-200 ease-out w-full h-full bg-white flex flex-col items-center justify-between">
        <div className="inline-block absolute top-0 left-[-4px] w-full h-full bg-no-repeat bg-[url('/icons/product-sale.svg')]">
          <p className="text-xl font-medium text-white ml-[10px] mt-[5px]">
            Giảm 13%
          </p>
        </div>
        <img
          src="https://laptopvang.com/wp-content/uploads/2023/12/macbook-pro-m3-max-16-inch-black-applecareplus-768x768.jpg"
          alt=""
          className="w-[200px] p-[20px] sm:h-[150px]"
        />
        <h2 className="text-xl line-clamp-3 text-center mt-[20px]">
          MacBook Pro 16 inch 2023 – (M3 Max/48GB/1TB) - New, AppleCare+ 3Yrs
        </h2>
        <div className="flex items-center gap-[10px] font-medium sm:text-xl xl:flex-col">
          <p className="text-[#919aae] line-through">102.500.000</p>
          <p className="text-[#ea1918]">96.500.000</p>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
