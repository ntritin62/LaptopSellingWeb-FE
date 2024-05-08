import React, { useState } from 'react';
import Input from './Input';

const LaptopCompare = ({ close }) => {
  const [showTable, setShowTable] = useState(false);
  const [laptop1, setLaptop1] = useState();
  const [laptop2, setLaptop2] = useState();
  return (
    <>
      <div className="fixed inset-0 bg-[#000]/30 w-full h-screen z-30 transition-opacity duration-500"></div>
      <div className="container fixed inset-20 z-50 bg-white rounded-3xl p-[30px] overflow-auto">
        <div className="flex justify-end">
          <button>
            <img
              src="/icons/close.svg"
              alt=""
              onClick={() => {
                close(false);
              }}
              className="action-icon w-[35px] h-[35px]"
            />
          </button>
        </div>
        <h1 className="text-5xl font-bold text-center">So sánh laptop</h1>
        <div className="flex justify-between">
          <Input setLaptop={setLaptop1} index={true} />
          <Input setLaptop={setLaptop2} index={false} />
        </div>
        <div className="flex justify-between items-center mt-[10px]">
          {laptop1 && (
            <div className="px-[10px] w-[450px] rounded-xl  border-solid border-[1px] border-[#ccc] py-[5px] flex items-center gap-[20px] cursor-pointer ">
              <img
                src={laptop1.imageUrl}
                alt=""
                className="w-[50px] h-[50px] object-contain"
              />
              <p className="text-xl">{laptop1.name}</p>
            </div>
          )}
          {laptop1 && laptop2 && (
            <button
              onClick={() => {
                setShowTable(true);
              }}
              className="bg-primary px-[20px] h-[50px] py-[5px] text-white font-medium rounded-xl flex items-center gap-[10px]"
            >
              <img
                src="/icons/compare.svg"
                alt=""
                className="w-[24px] h-[24px] white-icon"
              />
              So sánh
            </button>
          )}
          {laptop2 && (
            <div
              className={`${
                !laptop1 && 'ml-auto '
              }px-[10px] w-[450px] rounded-xl  border-solid border-[1px] border-[#ccc] py-[5px] flex items-center gap-[20px] cursor-pointer `}
            >
              <img
                src={laptop2.imageUrl}
                alt=""
                className="w-[50px] h-[50px] object-contain"
              />
              <p className="text-xl">{laptop2.name}</p>
            </div>
          )}
        </div>
        {showTable && (
          <table className="border-solid border-[#eee] mt-[50px]">
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                CPU
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.cpu}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.cpu}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                RAM:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.ram}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.ram}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                SSD:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.hardDisk}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.hardDisk}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Card đồ họa:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.graphicCard}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.graphicCard}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Màn hình:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.screen}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.screen}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Cổng giao tiếp:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.connectionPort}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.connectionPort}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Bàn phím:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.keyboard}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.keyboard}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Audio:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.audio}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.audio}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Chuẩn LAN:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.lan}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.lan}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Chuẩn WIFI:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.wirelessLan}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.wirelessLan}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Webcam:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.webcam}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.webcam}
                </td>
              </div>
            </tr>
            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Hệ điều hành:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.os}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.os}
                </td>
              </div>
            </tr>

            <tr className="grid grid-cols-12 border-[1px] border-solid border-[#eee]">
              <td className="col-span-3  bg-[#f7f7f7] p-[10px] font-bold">
                Trọng lượng:
              </td>
              <div className="col-span-9 grid grid-cols-10">
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop1.weight}
                </td>
                <td className="col-span-5 border-l-[1px] border-solid border-[#eee] p-[10px]">
                  {laptop2.weight}
                </td>
              </div>
            </tr>
          </table>
        )}
      </div>
    </>
  );
};

export default LaptopCompare;
