import React from 'react';
import Carousel from 'react-multi-carousel';
import ProductCard from '../../components/ProductCard';
import 'react-multi-carousel/lib/styles.css';
import { Carousel as Car } from '@material-tailwind/react';
import CategoryCard from '../../components/CategoryCard';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Home = () => {
  return (
    <main className="container mt-[15px] h-[5000px]">
      <div className="grid grid-cols-12 sm:grid-cols-1 gap-[10px] z-0 relative  mb-[15px]">
        <div className="col-span-8 sm:col-span-1 sm:h-[200px]">
          <Car
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
          </Car>
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
          <h2 className="text-6xl sm:text-4xl text-center text-white font-medium">
            Sản phẩm HOT
          </h2>
        </div>
        <div className="mt-[15px]">
          <Carousel
            autoPlaySpeed={3000}
            responsive={responsive}
            autoPlay={true}
            showDots={false}
            infinite={true}
          >
            <div className="m-[8px]">
              <ProductCard />
            </div>
            <div className="m-[8px]">
              <ProductCard />
            </div>
            <div className="m-[8px]">
              <ProductCard />
            </div>
            <div className="m-[8px]">
              <ProductCard />
            </div>
            <div className="m-[8px]">
              <ProductCard />
            </div>
            <div className="m-[8px]">
              <ProductCard />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="mt-[15px] rounded-xl overflow-hidden">
        <img src="/images/banner-9.jpeg" alt="" />
      </div>
      <div className="relative rounded-3xl mt-[40px] p-[20px] border-[1.5px]  border-solid border-primary ">
        <div className="absolute top-[-32px] left-0 right-0 text-center px-[20px]">
          <h2 className="text-text text-[34px] font-medium items-center gap-5 bg-white inline-flex px-[20px]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/apple.svg"
              alt=""
              className="w-[34px] h-[34px]"
            />
            Apple
          </h2>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-[20px]">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div className="mt-[15px] rounded-xl overflow-hidden">
        <img
          src="https://laptopvang.com/wp-content/uploads/2023/03/banner-dai-trang-chu-surface.jpg"
          alt=""
        />
      </div>
      <div className="relative rounded-3xl mt-[40px] p-[20px] border-[1.5px]  border-solid border-primary ">
        <div className="absolute top-[-32px] left-0 right-0 text-center px-[20px]">
          <h2 className="text-text text-[34px] font-medium items-center gap-5 bg-white inline-flex px-[20px]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/microsoft.svg"
              alt=""
              className="w-[34px] h-[34px]"
            />
            Microsoft
          </h2>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-[20px]">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </main>
  );
};

export default Home;
