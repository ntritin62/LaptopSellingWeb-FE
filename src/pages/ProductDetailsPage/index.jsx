import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getUserCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@material-tailwind/react';
import AlertCustomStyles from '../../components/Alert';
import { Helmet } from 'react-helmet';
import { CART } from '../../constants/routes';
const ProductDetailsPage = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { laptop, similarItems } = useLoaderData();
  const cart = useSelector((state) => state.cart);
  console.log(similarItems);


  const addCart = () => {
    setMessageIsShowed(true);

    if (cart.products.find((product) => product.name === laptop.name)) {
      setMsg('Sản phẩm đã trong giỏ hàng');
    }
    setTimeout(() => {
      setMessageIsShowed(false);
    }, 1000);
    dispatch(addToCart(laptop));
  };
  const buyNow = () => {
    dispatch(addToCart(laptop));

    navigate(CART);
    // dispatch(getUserCart());
  };
  return (
    <>
      <Helmet>
        <title>{laptop.name}</title>
      </Helmet>
      <main className="container mt-[50px] ">
        {messageIsShowed && (
          <AlertCustomStyles msg={msg || 'Thêm vào giỏ hàng thành công'} />
        )}
        <h1 className="text-5xl font-bold">{laptop.name}</h1>
        <div className="mt-[20px] grid grid-cols-12 lg:grid-cols-1 gap-[30px]">
          <div className="relative col-span-4 lg:col-span-1 rounded-lg border-[1px] border-solid border-[#eee]">
            {laptop.saleOff > 0 && (
              <div className="inline-block absolute top-0 left-[-4px] w-full h-full bg-no-repeat bg-[url('/icons/product-sale.svg')]">
                <p className="text-xl font-medium text-white ml-[10px] mt-[5px]">
                  Giảm {laptop.saleOff}%
                </p>
              </div>
            )}
            <img
              src={laptop.imageUrl}
              alt=""
              className="flex  lg:w-full w-[380px] h-[380px] object-contain"
            />
          </div>
          <div className="col-span-5 lg:col-span-1 lg:p-[20px]">
            <h2 className="text-3xl font-bold">Cấu hình cơ bản</h2>
            <ul className="list-disc text-2xl leading-8 mt-[10px]">
              <li>
                <p className="inline-block">
                  <span className="font-bold">Tình trạng: </span>
                  {laptop.status}
                </p>
              </li>
              <li>
                <p className="inline-block">
                  <span className="font-bold">CPU: </span>
                  {laptop.cpu}
                </p>
              </li>
              <li>
                <p className="inline-block">
                  <span className="font-bold">RAM: </span>
                  {laptop.ram}
                </p>
              </li>
              <li>
                <p className="inline-block">
                  <span className="font-bold">SSD: </span>
                  {laptop.hardDisk}
                </p>
              </li>
              <li>
                <p className="inline-block">
                  <span className="font-bold">Card đồ họa: </span>
                  {laptop.graphicCard}
                </p>
              </li>
              <li>
                <p className="inline-block">
                  <span className="font-bold">Màn hình: </span>
                  {laptop.screen}
                </p>
              </li>
            </ul>
            <p className="mt-[30px] text-center text-3xl font-medium gap-[20px]">
              Giá:
              <span className="ml-[15px] text-[#919aae] line-through text-3xl font-bold ">
                {laptop.saleOff > 0
                  ? laptop.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  : ''}
              </span>
              <span className="ml-[15px] text-[#E30019] text-5xl font-bold ">
                {laptop.saleOff > 0
                  ? (laptop.price - laptop.price * (laptop.saleOff / 100))
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  : laptop.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </span>
            </p>
            <div className="flex mt-[30px] mx-auto w-full items-center justify-center">
              <p className="text-3xl font-bold mr-[10px]">Đánh giá: </p>
              <div className="flex  gap-[5px]">
                <img src="/icons/star.svg" className="w-[24px] h-[24px]" />
                <img src="/icons/star.svg" className="w-[24px] h-[24px]" />
                <img src="/icons/star.svg" className="w-[24px] h-[24px]" />
                <img src="/icons/star.svg" className="w-[24px] h-[24px]" />
                <img src="/icons/star.svg" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 border-[1px] border-solid border-[#ddd] rounded-[10px] overflow-hidden">
            <p className="bg-[#e8fee0] font-bold border-b-[#bcbcbc] border-solid border-[1px] p-[10px] text-center">
              Bảo Hành & Khuyến Mãi
            </p>
            <ul className="text-2xl list-disc  px-[30px] py-[20px]">
              <li>Miễn Phí Giao Hàng Toàn Quốc.</li>
              <li>Bao Test 7 Ngày.</li>
              <li>
                Hỗ Trợ Kỹ Thuật, Cài Đặt Phần Mềm và Vệ Sinh Máy Miễn Phí Suốt
                Đời.
              </li>
              <li>Giao Nhanh Nội Thành TP.HCM 2 Giờ.</li>
              <li>Tặng Balo, Túi Chống Sốc.</li>
              <li>Giảm 10% Khi Mua Phụ Kiện Kèm Theo.</li>
            </ul>
            <div className="bg-[#eee] w-full h-[2px] my-[10px]"></div>
            <div className="p-[10px] flex flex-col items-center justify-center gap-[10px]">
              <button
                onClick={buyNow}
                className="w-full py-[10px] rounded-lg text-white bg-gradient-to-r from-red-800 to-orange-500 hover:opacity-80"
              >
                <p className="font-bold ">MUA NGAY</p>
                <p className="text-xl">Giao tận nơi hoặc nhận tại cửa hàng</p>
              </button>
              <button
                className="w-full py-[10px] rounded-lg text-white bg-primary hover:opacity-80"
                onClick={addCart}
              >
                <p className="font-bold">THÊM VÀO GIỎ HÀNG</p>
                <p className="text-xl">Thêm vào giỏ hàng và mua sắm tiếp</p>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[30px] grid grid-cols-12 lg:grid-cols-1 gap-[20px] ">
          <div className="col-span-7 lg:col-span-1 rounded-xl p-[20px] shadow-[0_1px_2px_0_rgba(60,64,67,10%),0_2px_6px_2px_rgba(60,64,67,15%)]">
            <h2 className="text-4xl font-bold">Thông số kỹ thuật</h2>
            <table className="border-solid border-[#eee] mt-[20px]">
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  CPU
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.cpu}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  RAM:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.ram}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  SSD:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.hardDisk}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Card đồ họa:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.graphicCard}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Màn hình:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.screen}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Cổng giao tiếp:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.connectionPort}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Bàn phím:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.keyboard}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Audio:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.audio}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Chuẩn LAN:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.lan}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Chuẩn WIFI:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.wirelessLan}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Webcam:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.webcam}
                </td>
              </tr>
              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Hệ điều hành:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.os}
                </td>
              </tr>

              <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
                <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                  Trọng lượng:
                </td>
                <td className="col-span-9 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop.weight}
                </td>
              </tr>
            </table>
          </div>
          <div className="col-span-5 lg:col-span-1 p-[20px] rounded-xl shadow-[0_1px_2px_0_rgba(60,64,67,10%),0_2px_6px_2px_rgba(60,64,67,15%)]">
            <h2 className="text-4xl font-bold ">Sản phẩm tương tự</h2>
            <div className="mt-[20px]">
              <ul className="flex flex-col gap-[8px]">
                {similarItems.map((item) => (
                  <Link to={`/laptop/${item.id}`} className="flex gap-[32px]">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-[110px] h-[110px] object-contain"
                    />
                    <div>
                      <p className="text-2xl font-medium">{item.name}</p>
                      <div className="mt-[20px]">
                        {item.sale > 0 ? (
                          <>
                            <p className="text-[#919aae] line-through font-medium text-xl">
                              {item.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                            </p>
                            <p className="font-medium text-2xl text-[#ea1918]">
                              {(item.price - item.price * (item.sale / 100))
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                              <span className="ml-[10px] bg-[#FFEDED] px-[4px] rounded-md border-[1px] border-solid border-[#E30019]">
                                -{item.sale}%
                              </span>
                            </p>
                          </>
                        ) : (
                          <p className="font-medium text-2xl text-[#ea1918]">
                            {item.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetailsPage;
