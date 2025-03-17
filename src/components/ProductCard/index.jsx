import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/laptop/${product.id}`} className="col-span-1">
      <section className="h-[350px] sm:h-[250px] relative rounded-xl hover:scale-102 hover:shadow-[0_1px_2px_0_rgba(60,64,67,10%),0_2px_6px_2px_rgba(60,64,67,15%)] transition-transform duration-200 ease-out bg-white flex flex-col items-center justify-between p-[20px] sm:p-[5px] border-[1px] border-solid border-[#eee]">
        {product.saleOff > 0 && (
          <div className="inline-block absolute top-0 left-[-4px] w-full h-full bg-no-repeat bg-[url('/icons/product-sale.svg')]">
            <p className="text-xl font-medium text-white ml-[10px] mt-[5px]">
              Giảm {product.saleOff}%
            </p>
          </div>
        )}
        <img
          src={product.imageUrl}
          alt=""
          className="w-[250px] h-[250px] object-contain"
        />
        <h2 className="text-xl line-clamp-2  sm:line-clamp-1 text-center ">
          {product.name}
        </h2>
        <div className="flex items-center gap-[10px] font-medium mt-[10px] sm:text-xl xl:flex-col">
          {product.saleOff > 0 ? (
            <>
              <p className="text-[#919aae] line-through">
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </p>
              <p className="text-[#ea1918]">
                {(product.price - product.price * (product.saleOff / 100))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </p>
            </>
          ) : (
            <p className="text-[#ea1918]">
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          )}
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
