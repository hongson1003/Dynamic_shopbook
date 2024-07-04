import React from 'react';
import CartSvg from '@/assets/svg/cart.svg';
import Image from 'next/image';

const CardEmpty = () => {
  return (
    <div className="text-default-light dark:text-default-dark flex flex-col items-center">
      <Image
        src={CartSvg}
        className="text-g mt-[80px] h-40 w-40"
        alt="Giỏ hàng rỗng"
        height={1000}
        width={1000}
      />
      <text className="mb-5 text-base">
        Bạn chưa có sản phẩm nào trong giỏ hàng
      </text>
      <button
        onClick={() => {
          window.location.href = '/';
        }}
        className="focus:shadow-outline min-h-20 w-4/5 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Về trang chủ mua sắm nào
      </button>
    </div>
  );
};

export default CardEmpty;
