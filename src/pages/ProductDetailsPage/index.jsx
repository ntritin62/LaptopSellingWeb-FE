import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ProductDetailsPage = () => {
  const laptop = useLoaderData();
  console.log(laptop.price);

  return (
    <main className="container mt-[50px] h-[5000px]">
      <h1 className="text-5xl font-bold">{laptop.name}</h1>
      <div className="mt-[20px] grid grid-cols-12 lg:grid-cols-1 gap-[30px]">
        <img
          src={laptop.imageUrl}
          alt=""
          className="col-span-4 lg:col-span-1 flex  rounded-lg border-[1px] border-solid border-[#eee] lg:w-full w-[380px] h-[380px] object-contain"
        />
        <div className="col-span-5 lg:col-span-1 lg:p-[20px]">
          <h2 className="text-3xl font-bold">Cấu hình cơ bản</h2>
          <ul className="list-disc text-xl leading-8 mt-[10px]">
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
          <p className="mt-[30px] text-center text-3xl font-medium">
            Giá:
            <span className="ml-[15px] text-[#E30019] text-5xl font-bold ">
              {laptop.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 border-[1px] border-solid border-[#ddd] rounded-[10px] overflow-hidden">
          <p className="bg-[#fef3e0] font-bold border-b-[#bcbcbc] border-solid border-[1px] p-[10px] text-center">
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
            <li>Miễn Phí Giao Hàng Toàn Quốc.</li>
          </ul>
          <div className="bg-[#eee] w-full h-[2px] my-[10px]"></div>
          <div className="p-[10px] flex flex-col items-center justify-center gap-[10px]">
            <button className="w-full py-[10px] rounded-lg text-white bg-gradient-to-b from-[#f59000] to-[#fd6e1d]">
              <p className="font-bold">MUA NGAY</p>
              <p className="text-xl">Giao tận nơi hoặc nhận tại cửa hàng</p>
            </button>
            <button className="w-full py-[10px] rounded-lg text-white bg-[#298ad6]">
              <p className="font-bold">THÊM VÀO GIỎ HÀNG</p>
              <p className="text-xl">Thêm vào giỏ hàng và mua sắm tiếp</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[30px] grid grid-cols-12 lg:grid-cols-1">
        <div className="col-span-7 lg:grid-cols-1 ">
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
      </div>
    </main>
  );
};

export default ProductDetailsPage;