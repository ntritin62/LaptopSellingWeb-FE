import React from 'react';
import ProductCard from '../../components/ProductCard';

import { Carousel } from '@material-tailwind/react';
const Home = () => {
  return (
    <main className="container mt-[15px] h-[5000px]">
      <div className="grid grid-cols-12 sm:grid-cols-1 gap-[10px] z-0 relative min-h-[500px]">
        <div className="col-span-8 sm:col-span-1 sm:h-[200px]">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
            className="rounded-xl w-full overflow-hidden"
          >
            <img
              src="/images/banner-1.webp"
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src="/images/banner-2.webp"
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src="/images/banner-3.webp"
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src="/images/banner-4.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="/images/banner-5.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="/images/banner-6.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </Carousel>
        </div>
        <div className="col-span-4 sm:col-span-1 rounded-xl h-full flex flex-col gap-[5px]">
          <img src="/images/banner-6.jpeg" alt="" />
          <img src="/images/banner-7.jpeg" alt="" />
          <img src="/images/banner-8.jpeg" alt="" />
        </div>
      </div>
      <div className="hot-sales mt-[15px] rounded-2xl  p-[20px]">
        <div className="flex items-center justify-center gap-[20px]">
          <img
            src="https://laptopvang.com/wp-content/uploads/2021/fire.svg"
            alt=""
            className="w-[37px] h-[37px]"
          />
          <h2 className="text-6xl text-center text-white font-medium">
            Sản phẩm HOT
          </h2>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-2 mt-[20px] gap-[20px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
};

export default Home;
