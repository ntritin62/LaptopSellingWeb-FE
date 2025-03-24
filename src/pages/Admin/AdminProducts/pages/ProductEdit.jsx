import React from 'react';
import ProductForm from '../components/ProductForm';
import { useLoaderData } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import AlertCustomStyles from '../../../../components/Alert';
import { useState } from 'react';

const ProductEdit = () => {
  const { laptop } = useLoaderData();
  console.log(laptop);
  const [messageIsShowed, setMessageIsShowed] = useState(false);

  return (
    <div>
      <>
        {messageIsShowed && <AlertCustomStyles msg="Sửa sản phẩm thành công" />}
        <h1 className="text-center text-5xl mt-[70px] font-bold">
          Sửa sản phẩm
        </h1>
        <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
          <ProductForm laptop={laptop} setShow={setMessageIsShowed} />
        </div>
      </>
    </div>
  );
};

export default ProductEdit;
