import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import PhoneNavbar from './PhoneNavbar';
import Navbar from './Navbar';
import * as ROUTES from '../../../constants/routes';
import getAuthToken from '../../../services/getToken';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUser } from '../../../redux/userSlice';

const Header = ({ setSidebarIsShowed, sidebarIsShowed, closeSidebar }) => {
  const [data, setData] = useState();
  const [isClickInside, setIsClickInside] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/laptops`
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
  };
  const [token, setToken] = useState(getAuthToken());
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const location = useLocation();
  useEffect(() => {
    setToken(getAuthToken());
    dispatch(getUser());
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const handleBlur = () => {
    if (!isClickInside) {
      setLaptops([]);
    }
    setIsClickInside(false);
  };

  return (
    <header>
      <div className="container ">
        <div className="grid grid-cols-12 sm:grid-cols-1 items-center py-[10px]">
          <figure className="w-[250px] lg:w-[200px] col-span-4 sm:col-span-1 sm:mx-auto">
            <Link to={ROUTES.HOME}>
              <img src="/images/logo.png" alt="" className="w-full " />
            </Link>
          </figure>

          <div
            onBlur={handleBlur}
            className="relative col-span-4 sm:col-span-1 "
          >
            <div className=" flex justify-between items-center rounded-lg overflow-hidden border-primary border-[1px] border-solid">
              <input
                type="text"
                className=" text-[#5f5f5f] px-[10px] py-[7px] text-xl w-full"
                placeholder="Nhập sản phẩm cần tìm"
                onChange={inputHandler}
              />
              <button className="w-41px h-[41px] flex items-center justify-center p-[10px] bg-primary hover:opacity-80 ">
                <img
                  src="/icons/search.svg"
                  alt=""
                  className="w-[18px] white-icon"
                />
              </button>
            </div>
            {laptops.length > 0 && (
              <div
                onMouseDown={() => setIsClickInside(true)}
                className="absolute z-50 rounded-xl top-[50px] left-0 right-0  bg-white shadow-xl border-solid border-[1px] border-[#ccc] rounded-sm  h-[300px] overflow-auto"
              >
                {laptops.map((laptop) => (
                  <Link
                    to={`./laptop/${laptop._id}`}
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
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-4 sm:hidden ml-auto flex items-center gap-[20px]">
            <Link to={ROUTES.CART}>
              <div className=" relative flex flex-col items-center justify-center w-[70px] h-[60px] group rounded-lg hover:hover:bg-primary transition ease-in-out duration-200">
                <img
                  className="w-[24px] h-[24px] icon group-hover:hidden absolute top-[10px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjY1MzcgNi42ODk5NUw1Ljk2Njg0IDUuMDg5NjNDNS44NzUzIDUuMDc4NTUgNS43ODkxNSA1LjA3ODU1IDUuNzAyOTkgNS4wODQwOUw1LjAzNTMgMS43NjE2MkM1LjAxOTE1IDEuNjk1MTcgNS4wMDMgMS42Mjg3MiA0Ljk3NjA3IDEuNTczMzVDNC44NzM3NiAxLjMwNzU1IDQuNjU4MzggMS4wOTE1OSA0LjM3MyAxLjAwMjk5TDEuMTkwNjkgMC4wMzk0NzYzQzAuNzAwNjkzIC0wLjExMDAzNSAwLjE4Mzc3MSAwLjE3NzkxMyAwLjAzODM4NjcgMC42ODczNThDLTAuMTA2OTk4IDEuMTkxMjcgMC4xNzMwMDIgMS43MjI4NiAwLjY2ODM4NiAxLjg3MjM3TDMuMzIzIDIuNjc1M0w2LjUxNjA3IDE4LjUwMTNDNi41NzUzIDE4Ljk2NjUgNi45NjI5OSAxOS4zMjY0IDcuNDM2ODQgMTkuMzI2NEwyMS4xNjc2IDE5LjMyMDlDMjEuNjc5MSAxOS4zMjA5IDIyLjA5MzcgMTguODk0NSAyMi4wOTM3IDE4LjM2ODRDMjIuMDkzNyAxNy44NDI0IDIxLjY3OTEgMTcuNDE2IDIxLjE2NzYgMTcuNDE2TDguMTk2MDcgMTcuNDIxNUw3Ljc1NDUzIDE1LjIzNDJIMjEuNDA5OUMyMi4xMjYgMTUuMjM0MiAyMi43NDUzIDE0Ljc0NjkgMjIuODc0NSAxNC4wNzY5TDIzLjk3ODQgOC4zNTY3MkMyNC4xMjM3IDcuNTM3MTggMjMuNTIwNyA2Ljc3MzAxIDIyLjY1MzcgNi42ODk5NVoiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZD0iTTEwLjA3NTIgMjRDMTEuMDk4MiAyNCAxMS45Mjc1IDIzLjE0NzIgMTEuOTI3NSAyMi4wOTUxQzExLjkyNzUgMjEuMDQzMSAxMS4wOTgyIDIwLjE5MDIgMTAuMDc1MiAyMC4xOTAyQzkuMDUyMjEgMjAuMTkwMiA4LjIyMjkgMjEuMDQzMSA4LjIyMjkgMjIuMDk1MUM4LjIyMjkgMjMuMTQ3MiA5LjA1MjIxIDI0IDEwLjA3NTIgMjRaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGQ9Ik0xOC45Mjc2IDI0QzE5Ljk1MDYgMjQgMjAuNzc5OSAyMy4xNDcyIDIwLjc3OTkgMjIuMDk1MUMyMC43Nzk5IDIxLjA0MzEgMTkuOTUwNiAyMC4xOTAyIDE4LjkyNzYgMjAuMTkwMkMxNy45MDQ2IDIwLjE5MDIgMTcuMDc1MyAyMS4wNDMxIDE3LjA3NTMgMjIuMDk1MUMxNy4wNzUzIDIzLjE0NzIgMTcuOTA0NiAyNCAxOC45Mjc2IDI0WiIgZmlsbD0iIzRGNEY0RiIvPgo8L3N2Zz4K"
                  alt=""
                />
                <img
                  className="w-[24px] h-[24px] white-icon hidden group-hover:block absolute top-[10px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjY1MzcgNi42ODk5NUw1Ljk2Njg0IDUuMDg5NjNDNS44NzUzIDUuMDc4NTUgNS43ODkxNSA1LjA3ODU1IDUuNzAyOTkgNS4wODQwOUw1LjAzNTMgMS43NjE2MkM1LjAxOTE1IDEuNjk1MTcgNS4wMDMgMS42Mjg3MiA0Ljk3NjA3IDEuNTczMzVDNC44NzM3NiAxLjMwNzU1IDQuNjU4MzggMS4wOTE1OSA0LjM3MyAxLjAwMjk5TDEuMTkwNjkgMC4wMzk0NzYzQzAuNzAwNjkzIC0wLjExMDAzNSAwLjE4Mzc3MSAwLjE3NzkxMyAwLjAzODM4NjcgMC42ODczNThDLTAuMTA2OTk4IDEuMTkxMjcgMC4xNzMwMDIgMS43MjI4NiAwLjY2ODM4NiAxLjg3MjM3TDMuMzIzIDIuNjc1M0w2LjUxNjA3IDE4LjUwMTNDNi41NzUzIDE4Ljk2NjUgNi45NjI5OSAxOS4zMjY0IDcuNDM2ODQgMTkuMzI2NEwyMS4xNjc2IDE5LjMyMDlDMjEuNjc5MSAxOS4zMjA5IDIyLjA5MzcgMTguODk0NSAyMi4wOTM3IDE4LjM2ODRDMjIuMDkzNyAxNy44NDI0IDIxLjY3OTEgMTcuNDE2IDIxLjE2NzYgMTcuNDE2TDguMTk2MDcgMTcuNDIxNUw3Ljc1NDUzIDE1LjIzNDJIMjEuNDA5OUMyMi4xMjYgMTUuMjM0MiAyMi43NDUzIDE0Ljc0NjkgMjIuODc0NSAxNC4wNzY5TDIzLjk3ODQgOC4zNTY3MkMyNC4xMjM3IDcuNTM3MTggMjMuNTIwNyA2Ljc3MzAxIDIyLjY1MzcgNi42ODk5NVoiIGZpbGw9IiM0RjRGNEYiLz4KPHBhdGggZD0iTTEwLjA3NTIgMjRDMTEuMDk4MiAyNCAxMS45Mjc1IDIzLjE0NzIgMTEuOTI3NSAyMi4wOTUxQzExLjkyNzUgMjEuMDQzMSAxMS4wOTgyIDIwLjE5MDIgMTAuMDc1MiAyMC4xOTAyQzkuMDUyMjEgMjAuMTkwMiA4LjIyMjkgMjEuMDQzMSA4LjIyMjkgMjIuMDk1MUM4LjIyMjkgMjMuMTQ3MiA5LjA1MjIxIDI0IDEwLjA3NTIgMjRaIiBmaWxsPSIjNEY0RjRGIi8+CjxwYXRoIGQ9Ik0xOC45Mjc2IDI0QzE5Ljk1MDYgMjQgMjAuNzc5OSAyMy4xNDcyIDIwLjc3OTkgMjIuMDk1MUMyMC43Nzk5IDIxLjA0MzEgMTkuOTUwNiAyMC4xOTAyIDE4LjkyNzYgMjAuMTkwMkMxNy45MDQ2IDIwLjE5MDIgMTcuMDc1MyAyMS4wNDMxIDE3LjA3NTMgMjIuMDk1MUMxNy4wNzUzIDIzLjE0NzIgMTcuOTA0NiAyNCAxOC45Mjc2IDI0WiIgZmlsbD0iIzRGNEY0RiIvPgo8L3N2Zz4K"
                  alt=""
                />
                <p className="text-[13px]  mt-[30px] group-hover:text-white text-[#4f4f4f] ">
                  Giỏ hàng
                </p>
                <span className="absolute  bg-primary text-xl text-white py-[4px] px-[7px] rounded-full top-[-8px] right-[-3px] ">
                  {cart.products.length}
                </span>
              </div>
            </Link>
            {!token && (
              <div className="flex items-center gap-[5px] ">
                <Link to={ROUTES.LOGIN}>
                  <p className="text-2xl text-[#4f4f4f] hover:text-primary transition ease-in-out duration-500">
                    Đăng nhập
                  </p>
                </Link>
                <div className="w-[1px]  bg-text h-[30px]"></div>
                <Link to={ROUTES.SIGNUP}>
                  <p className="text-2xl text-[#4f4f4f] hover:text-primary transition ease-in-out duration-500">
                    Đăng ký
                  </p>
                </Link>
              </div>
            )}
            {token && (
              <div className="relative group">
                <Link to={ROUTES.PROFILE}>
                  <div className=" relative flex flex-col items-center justify-center w-[70px] h-[60px]  rounded-lg  group-hover:bg-primary group transition ease-in-out duration-200">
                    <img
                      className="w-[24px] h-[24px] icon group-hover:hidden absolute top-[10px]"
                      src="/icons/account.svg"
                      alt=""
                    />
                    <img
                      className="w-[24px] h-[24px]  white-icon hidden group-hover:block absolute top-[10px]"
                      src="/icons/account.svg"
                      alt=""
                    />
                    <p className="text-[13px] mt-[30px] text-[#4f4f4f] group-hover:text-white ">
                      Tài khoản
                    </p>
                  </div>

                  <div className="hidden absolute w-[200px] top-[100%]  group-hover:block dark:text-[#B9BABE] right-0 z-30 bg-white dark:bg-dark-dropdown-bg p-[30px] shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)] dark:shadow-[0px_40px_90px_20px_rgba(23,28,40,0.40)] rounded-3xl md:hidden ">
                    <div className="relative ">
                      <ul className="w-full">
                        {user.user.role === 'admin' && (
                          <>
                            <Link
                              to="./admin"
                              className="hover:text-active-sidebar w-full"
                            >
                              <li className="flex items-center justify-center gap-[10px]">
                                <img
                                  src="/icons/admin.svg"
                                  alt=""
                                  className="w-[24px] h-[24px]"
                                />
                                Admin
                              </li>
                            </Link>
                            <div className="w-full h-[1px] bg-text my-[10px]"></div>
                          </>
                        )}

                        <Link
                          to={ROUTES.PROFILE}
                          className="hover:text-active-sidebar w-full text-center"
                        >
                          <li className="flex items-center justify-center gap-[10px]">
                            <img
                              src="/icons/profile.svg"
                              alt=""
                              className="w-[24px] h-[24px]"
                            />
                            Tài khoản
                          </li>
                        </Link>
                        <div className="w-full h-[1px] bg-text my-[10px]"></div>
                        <li className="w-full flex items-center justify-center">
                          <button
                            className="text-[#de1f27] font-medium flex gap-[10px]"
                            onClick={logoutHandler}
                          >
                            <img
                              src="/icons/sign-out.svg"
                              alt=""
                              className="w-[24px] h-[24px] red-icon"
                            />
                            <p>Đăng xuất</p>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#4BB8B4] to-[#62C9C6] ">
        <div className="container relative">
          <button
            className="white-icon hidden py-[10px] xl:block"
            onClick={() => {
              setSidebarIsShowed(true);
            }}
          >
            <img src="/icons/more.svg" alt="" className="w-[27px] h-27px" />
          </button>
          <ul className="flex  top-0 gap-x-[5px] w-full xl:hidden">
            <Navbar
              to="./san-pham/macbook"
              name="MAC"
              src="https://laptopvang.com/wp-content/uploads/2019/09/apple.png"
              // subMenuArr={[
              //   {
              //     name: 'MacBook Pro',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/06/macbook_pro_16_light__icon.svg',
              //   },
              //   {
              //     name: 'MacBook Air',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/08/MBA-icon.svg',
              //   },
              //   {
              //     name: 'MacBook M Series',
              //     src: 'https://laptopvang.com/wp-content/uploads/2022/06/apple-m-series.svg',
              //   },
              // ]}
            />
            <Navbar
              to="./san-pham/surface"
              name="SURFACE"
              src="https://laptopvang.com/wp-content/uploads/2019/10/Surface.png"
              // subMenuArr={[
              //   {
              //     name: 'Surface Pro',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/08/SFP-icon.svg',
              //   },
              //   {
              //     name: 'Surface Laptop',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/08/SFL-icon.svg',
              //   },
              //   {
              //     name: 'Surface Laptop Studio',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/12/Surface-laptop-studio-icon-01-1.svg',
              //   },
              //   {
              //     name: 'Surface Book',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/08/surface-book-icon-1.svg',
              //   },
              //   {
              //     name: 'Surface Go',
              //     src: 'https://laptopvang.com/wp-content/uploads/2021/08/SFLG-icon.svg',
              //   },
              // ]}
            />
            <Navbar
              to="./san-pham/thinkpad"
              name="ThinkPad"
              src="https://laptopvang.com/wp-content/uploads/2021/08/THINKPAD-icon.svg"
              // subMenuArr={[
              //   {
              //     name: 'Thinkpad X1 Series',
              //     src: '/icons/laptop.svg',
              //   },
              //   {
              //     name: 'Thinkpad P Series',
              //     src: '/icons/laptop.svg',
              //   },
              //   {
              //     name: 'Thinkpad T Series',
              //     src: '/icons/laptop.svg',
              //   },
              //   {
              //     name: 'Thinkpad X Series',
              //     src: '/icons/laptop.svg',
              //   },
              // ]}
            />
            <Navbar
              to="./san-pham/dell"
              src="https://laptopvang.com/wp-content/uploads/2021/08/DELL-icon.svg"
            />
            <Navbar
              to="./san-pham/hp"
              name="HP"
              src="https://laptopvang.com/wp-content/uploads/2021/08/HP-icon.svg"
            />
            <Navbar
              to="./san-pham/razer"
              name="Razer"
              src="https://laptopvang.com/wp-content/uploads/2021/08/RAZER-icon.svg"
            />
            <Navbar
              to="./san-pham/lg"
              name="LG"
              src="https://laptopvang.com/wp-content/uploads/2022/06/lg-1.svg"
            />
            <Navbar
              to="./san-pham/samsung"
              name="SAMSUNG"
              src="https://laptopvang.com/wp-content/uploads/2022/06/samsung.svg"
            />
            <Navbar
              to="./san-pham/asus"
              name="ASUS"
              src="https://www.vectorlogo.zone/logos/asus/asus-ar21.svg"
            />
            <Navbar
              to="./san-pham/lenovo"
              name="Lenovo"
              src="https://cdn.worldvectorlogo.com/logos/lenovo-2.svg"
            />
            <Navbar
              to="./san-pham/msi"
              name="MSI"
              src="https://cdn.worldvectorlogo.com/logos/micro-star-international-logo.svg"
            />
          </ul>
          {sidebarIsShowed && <PhoneNavbar closeSidebar={closeSidebar} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
