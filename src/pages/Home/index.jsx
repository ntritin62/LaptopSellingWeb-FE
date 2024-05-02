import React from 'react';
import Carousel from 'react-multi-carousel';
import ProductCard from '../../components/ProductCard';
import 'react-multi-carousel/lib/styles.css';
import { Carousel as Car } from '@material-tailwind/react';
import CategoryCard from '../../components/CategoryCard';
import { Link, useLoaderData } from 'react-router-dom';
const macbook = [
  {
    name: 'MacBook Pro',
    to: '/san-pham/macbook-pro',
    imageUrl:
      'https://laptopvang.com/wp-content/uploads/2023/10/icon-danh-muc6.png',
  },
  {
    name: 'MacBook Air',
    to: '/san-pham/macbook-air',
    imageUrl:
      'https://laptopvang.com/wp-content/uploads/2023/10/icon-danh-muc5.png',
  },
];
const surface = [
  {
    name: 'Surface Laptop',
    to: '/san-pham/surface-laptop',
    imageUrl:
      'https://laptopvang.com/wp-content/uploads/2021/06/surface-laptop-icon.png',
  },
  {
    name: 'Surface Laptop Go',
    to: '/san-pham/surface-laptop-go',
    imageUrl:
      'https://laptopvang.com/wp-content/uploads/2021/06/surface-laptop-go-icon.png',
  },
];
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
  const data = useLoaderData();
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
          <h2 className="text-5xl sm:text-4xl text-center text-white font-medium">
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
            {data.map((laptop) => (
              <div className="m-[8px]">
                <ProductCard product={laptop} />
              </div>
            ))}
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
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-[20px]">
          {macbook.map((item) => (
            <CategoryCard name={item.name} to={item.to} image={item.imageUrl} />
          ))}
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
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-[20px]">
          {surface.map((item) => (
            <CategoryCard name={item.name} to={item.to} image={item.imageUrl} />
          ))}
        </div>
      </div>
      <div className="relative rounded-3xl mt-[60px] p-[20px] bg-[#f5f5f5]">
        <div className="absolute top-[-32px] left-0 right-0 text-center px-[7px] ">
          <div className="inline-flex items-center gap-[10px] bg-white px-[20px] py-[5px] rounded-[10px] border-[4px] border-solid  border-[#f5f5f5]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/laptop.svg"
              alt=""
              className="w-[42px] h-[42px]"
            />
            <h2 className="text-text text-[34px] font-medium">Laptop Khác</h2>
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 pt-[30px] px-[10px] gap-[20px]">
          <section className="col-span-1 rounded-xl bg-white pt-[30px] px-[7px]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/05/lt_lenovo.png"
              alt=""
              className="h-[79px] mx-auto "
            />
            <div className="mt-[15px]">
              <Link to="/san-pham/lenovo">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#f80011] hover:to-[#ffd2d1] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">WORKSTATION</h3>
                  <p className="text-3xl sm:text-base ">(P Series)</p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/lenovo">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#f80011] hover:to-[#ffd2d1] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">BUSINESS</h3>
                  <p className="text-3xl sm:text-base ">(X,T Series)</p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/lenovo">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#f80011] hover:to-[#ffd2d1] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">GAMING</h3>
                  <p className="text-3xl sm:text-base ">(Legion)</p>
                </span>
              </Link>
            </div>
          </section>
          <section className="col-span-1 rounded-xl bg-white pt-[30px] px-[7px]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/05/lt_dell.png"
              alt=""
              className="h-[79px] mx-auto "
            />
            <div className="mt-[15px]">
              <Link to="/san-pham/dell">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#017fbd] hover:to-[#bad8eb] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">WORKSTATION</h3>
                  <p className="text-3xl sm:text-base">(Precision)</p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/dell">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#017fbd] hover:to-[#bad8eb] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">BUSINESS</h3>
                  <p className="text-3xl  sm:text-base">(XPS, Latitude)</p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/dell">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#017fbd] hover:to-[#bad8eb] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">GAMING</h3>
                  <p className="text-3xl  sm:text-base">
                    (Alienware, G Series)
                  </p>
                </span>
              </Link>
            </div>
          </section>
          <section className="col-span-1 rounded-xl bg-white pt-[30px] px-[7px]">
            <img
              src="https://laptopvang.com/wp-content/uploads/2021/05/lt_hp.png"
              alt=""
              className="h-[79px] mx-auto "
            />
            <div className="mt-[15px]">
              <Link to="/san-pham/hp">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#000000] hover:to-[#a5a5a5] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">WORKSTATION</h3>
                  <p className="text-3xl sm:text-base ">(ZBook)</p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/hp">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#000000] hover:to-[#a5a5a5] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">BUSINESS</h3>
                  <p className="text-3xl sm:text-base ">
                    (Spectre, Elite, ENVY)
                  </p>
                </span>
              </Link>
              <div className="w-full h-[1px] bg-[#ccc]"></div>
              <Link to="/san-pham/hp">
                <span className="rounded-[15px] flex flex-col items-center justify-center py-[30px] hover:shadow-[0px_3px_6px_rgba(0,0,0,0.16),0px_3px_6px_rgba(0,0,0,0.23)] hover:bg-gradient-to-b hover:from-[#000000] hover:to-[#a5a5a5] hover:text-white transition-colors duration-150 ease-linear ">
                  <h3 className="text-5xl sm:text-2xl mb-[7px]">GAMING</h3>
                  <p className="text-3xl sm:text-base">(OMEN)</p>
                </span>
              </Link>
            </div>
          </section>

          <section className="col-span-1 rounded-xl bg-white pt-[30px] px-[7px]">
            <Link to="/san-pham/razer">
              <div className="p-[35px] sm:p-[15px]">
                <img
                  src="https://laptopvang.com/wp-content/uploads/2021/05/lt_razer.png"
                  alt=""
                  className="w-[173px] mx-auto "
                />
              </div>
            </Link>
            <Link to="/san-pham/asus">
              <div className="p-[35px] sm:p-[15px] sm:mt-[80px]">
                <img
                  src="https://laptopvang.com/wp-content/uploads/2021/05/lt_asus.png"
                  alt=""
                  className="w-[173px] mx-auto "
                />
              </div>
            </Link>
            <Link to="/san-pham/msi">
              <div className="p-[35px] sm:p-[15px] sm:mt-[80px]">
                <img
                  src="https://laptopvang.com/wp-content/uploads/2021/05/lt_msi.png"
                  alt=""
                  className="w-[173px] mx-auto"
                />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
