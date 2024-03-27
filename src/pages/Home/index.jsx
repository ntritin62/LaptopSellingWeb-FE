import React from 'react';

import { Carousel } from '@material-tailwind/react';
const Home = () => {
  return (
    <main className="container mt-[15px]">
      <div className="grid grid-cols-12 sm:grid-cols-1 gap-[10px] z-0 relative h-[400px]">
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
    </main>
  );
};

export default Home;
