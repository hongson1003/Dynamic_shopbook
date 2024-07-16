import React from 'react';
import EmptyCart from '@/assets/images/empty-cart.png';
import Image from 'next/image';
import Link from 'next/link';

const CardEmpty = () => {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 text-center text-base text-[--text-light-color]">
          Bạn chưa có sản phẩm nào trong giỏ hàng
        </p>
        <Image
          src={EmptyCart}
          className="h-16 w-16"
          alt="Giỏ hàng rỗng"
          height={1000}
          width={1000}
        />
        <Link
          href="/"
          className="mt-2 text-sm text-[--text-light-color] active:underline"
        >
          Về trang chủ mua sắm nào
        </Link>
      </div>
    </div>
  );
};

export default CardEmpty;
