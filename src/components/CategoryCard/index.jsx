import React from 'react';

const CategoryCard = () => {
  return (
    <section className=" col-span-1 rounded-xl border-[1px] border-solid border-[#eee] hover:bg-[#fef3e0] hover:shadow-[0_50px_100px_-20px_rgba(50,50,93,.25),0_10px_20px_-10px_rgba(0,0,0,.3)] hover:text-primary transition-all duration-200 ease-in-out p-[15px] hover:scale-102">
      <img
        src="https://laptopvang.com/wp-content/uploads/2023/10/icon-danh-muc6.png"
        alt=""
        className="w-[230px] h-[130px] lg:w-[180px] lg:h-[100px] mx-auto"
      />
      <h2 className="text-3xl lg:text-xl font-medium text-center">
        Macbook Pro
      </h2>
    </section>
  );
};

export default CategoryCard;
