import React from 'react';
import ProductForm from '../components/ProductForm';
import { Alert } from '@material-tailwind/react';
import { useState } from 'react';
import AlertCustomStyles from '../../../../components/Alert';

const ProductAdd = () => {
  const [messageIsShowed, setMessageIsShowed] = useState(false);
  return (
    <>
      {messageIsShowed && <AlertCustomStyles msg="Thêm sản phẩm thành công" />}
      <h1 className="text-center text-5xl mt-[70px] font-bold">
        Thêm sản phẩm
      </h1>
      <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
        <ProductForm setShow={setMessageIsShowed} />
      </div>
    </>
  );
};

export default ProductAdd;
