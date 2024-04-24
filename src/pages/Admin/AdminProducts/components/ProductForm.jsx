import React from 'react';
import { useForm } from 'react-hook-form';
const ProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <label htmlFor="name" className="mt-[20px]">
          Tên sản phẩm
        </label>

        <input
          type="text"
          name="name"
          id="name"
          {...register('name', { required: true })}
          placeholder="Nhập tên sản phẩm"
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
        />
        {errors.name && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Tên không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="price" className="mt-[20px]">
          Giá sản phẩm
        </label>
        <input
          type="number"
          name="price"
          id="price"
          {...register('price', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập giá sản phẩm"
        />
        {errors.price && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Giá không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="status" className="mt-[20px]">
          Tình trạng sản phẩm
        </label>
        <input
          type="text"
          name="status"
          id="status"
          {...register('status', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập tình trạng sản phẩm"
        />
        {errors.status && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Tình trạng không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="cpu" className="mt-[20px]">
          CPU
        </label>
        <input
          type="text"
          name="cpu"
          id="cpu"
          {...register('cpu', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập CPU"
        />
        {errors.cpu && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            CPU không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="ram" className="mt-[20px]">
          ram
        </label>
        <input
          type="text"
          name="ram"
          id="ram"
          {...register('ram', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập ram"
        />
        {errors.ram && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            RAM không được để trống
          </span>
        )}
      </div>

      <div className="relative w-full flex flex-col">
        <label htmlFor="hardDisk" className="mt-[20px]">
          Ổ cứng
        </label>
        <input
          type="text"
          name="hardDisk"
          id="hardDisk"
          {...register('hardDisk', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập ổ cứng"
        />
        {errors.hardDisk && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Ổ cứng không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="graphicCard" className="mt-[20px]">
          VGA
        </label>
        <input
          type="text"
          name="graphicCard"
          id="graphicCard"
          {...register('graphicCard', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập VGA"
        />
        {errors.graphicCard && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            VGA không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="screen" className="mt-[20px]">
          Màn hình
        </label>
        <input
          type="text"
          name="screen"
          id="screen"
          {...register('screen', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Màn hình"
        />
        {errors.screen && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Màn hình không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="connectionPort" className="mt-[20px]">
          Cổng giao tiếp
        </label>
        <input
          type="text"
          name="connectionPort"
          id="connectionPort"
          {...register('connectionPort', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Cổng giao tiếp"
        />
        {errors.connectionPort && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Cổng giao tiếp không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="keyboard" className="mt-[20px]">
          Bàn phím
        </label>
        <input
          type="text"
          name="keyboard"
          id="keyboard"
          {...register('keyboard', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Bàn phím"
        />
        {errors.keyboard && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Bàn phím không được để trống
          </span>
        )}
      </div>

      <div className="relative w-full flex flex-col">
        <label htmlFor="audio" className="mt-[20px]">
          Audio
        </label>
        <input
          type="text"
          name="audio"
          id="audio"
          {...register('audio', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Audio"
        />
        {errors.audio && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Audio không được để trống
          </span>
        )}
      </div>

      <div className="relative w-full flex flex-col">
        <label htmlFor="lan" className="mt-[20px]">
          Chuẩn LAN
        </label>
        <input
          type="text"
          name="lan"
          id="lan"
          {...register('lan', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Chuẩn LAN"
        />
        {errors.lan && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Chuẩn LAN không được để trống
          </span>
        )}
      </div>

      <div className="relative w-full flex flex-col">
        <label htmlFor="wirelessLan" className="mt-[20px]">
          Chuẩn WIFI
        </label>
        <input
          type="text"
          name="wirelessLan"
          id="wirelessLan"
          {...register('wirelessLan', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Chuẩn WIFI"
        />
        {errors.wirelessLan && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Chuẩn WIFI không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="webcam" className="mt-[20px]">
          Webcam
        </label>
        <input
          type="text"
          name="webcam"
          id="webcam"
          {...register('webcam', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Webcam"
        />
        {errors.webcam && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Webcam không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="os" className="mt-[20px]">
          Hệ điều hành
        </label>
        <input
          type="text"
          name="os"
          id="os"
          {...register('os', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Hệ điều hành"
        />
        {errors.os && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Hệ điều hành không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="battery" className="mt-[20px]">
          Pin
        </label>
        <input
          type="text"
          name="battery"
          id="battery"
          {...register('battery', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Pin"
        />
        {errors.battery && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Pin không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="weight" className="mt-[20px]">
          Trọng lượng
        </label>
        <input
          type="text"
          name="weight"
          id="weight"
          {...register('weight', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập Trọng lượng"
        />
        {errors.weight && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            Trọng lượng không được để trống
          </span>
        )}
      </div>
      <div className="relative w-full flex flex-col">
        <label htmlFor="imageUrl" className="mt-[20px]">
          URL hình ảnh
        </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          {...register('imageUrl', { required: true })}
          className="border-[1px] border-solid border-[#ccc] p-[5px] mt-[5px] rounded-lg"
          placeholder="Nhập URL hình ảnh"
        />
        {errors.imageUrl && (
          <span className="absolute bottom-[-20px] right-0 text-xl font-medium text-red-500 ">
            URL hình ảnh không được để trống
          </span>
        )}
      </div>
      <button
        type="submit"
        className="mt-[30px] bg-primary text-white w-[150px] px-[20px] py-[5px] font-medium rounded-lg mx-auto"
      >
        Lưu sản phẩm
      </button>
    </form>
  );
};

export default ProductForm;
