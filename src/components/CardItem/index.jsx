import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
const CardItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className="flex gap-[30px] items-center mb-[10px]">
        <figure className="w-[175px] h-[175px] sm:w-[60px] sm:h-[60px] bg-[#fff] rounded-xl">
          <img
            src={product.imageUrl}
            alt=""
            className="w-full h-full object-contain rounded-lg overflow-hidden "
          />
        </figure>
        <section className="w-full flex flex-col gap-[16px]">
          <div className="flex justify-between shrink-0 sm:flex-col sm:gap-[10px] ">
            <h2 className="w-[374px] text-3xl font-medium sm:text-xl sm:w-full ">
              {product.name}
            </h2>
            <p className="text-4xl font-bold">
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
          </div>
          <div className="text-checkout-text font-medium">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} |{' '}
            <span className="text-[#67B044]">Còn hàng</span>
          </div>
          <div className="flex justify-between items-center">
            {/* <div className="select-none flex items-center gap-[10px] px-[20px] py-[10px] border-solid border-[1px] border-border rounded-xl">
              <button
                className="w-[20px] h-[20px]"
                onClick={() => {
                  dispatch(decrementInCart(product._id));
                }}
              >
                <img
                  src="/icons/miner.svg"
                  alt=""
                  className="action-icon w-full h-full"
                />
              </button>
              <span className="font-medium text-bold-text text-2xl text-center w-[20px]">
                {product.quantity}
              </span>
              <button
                className="w-[20px] h-[20px]"
                onClick={() => {
                  dispatch(incrementInCart(product._id));
                }}
              >
                <img
                  src="/icons/cong.svg"
                  alt=""
                  className="action-icon w-full h-full"
                />
              </button>
            </div> */}
            <button
              className="flex gap-[10px] text-rose-900"
              onClick={() => {
                dispatch(removeFromCart(product._id));
              }}
            >
              <img
                src="/icons/trash-can.svg"
                alt=""
                className="red-icon w-[20px] h-[20px]"
              />
              <p className="font-medium">Xoá</p>
            </button>
          </div>
        </section>
      </li>
    </div>
  );
};

export default CardItem;
