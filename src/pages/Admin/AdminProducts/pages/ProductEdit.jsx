import React from 'react';
import ProductForm from '../components/ProductForm';
import { useLoaderData } from 'react-router-dom';
const ProductEdit = () => {
  const { laptop } = useLoaderData();

  return (
    <div>
      <>
        <h1 className="text-center text-5xl mt-[70px] font-bold">
          Sửa sản phẩm
        </h1>
        <div className="w-[50%] bg-white p-[30px] mx-auto mt-[20px] mb-[50px] rounded-lg shadow-lg">
          <ProductForm laptop={laptop} />
        </div>
      </>
    </div>
  );
};

export default ProductEdit;
