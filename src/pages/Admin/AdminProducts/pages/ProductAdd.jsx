import React from 'react';
import ProductForm from '../components/ProductForm';

const ProductAdd = () => {
  return (
    <>
      <h1 className="text-center text-5xl mt-[70px] font-bold">
        Thêm sản phẩm
      </h1>
      <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
        <ProductForm />
      </div>
    </>
  );
};

export default ProductAdd;
