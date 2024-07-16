'use client';
import { ProductModel, ProductType } from '@/models';
import { formatCurrencyVND } from '@/ultils/number';
import { convertNumberToNumberText } from '@/ultils/text';
import { Star, StarHalf } from 'lucide-react';
import CustomImage from '../Image';
import React, { useEffect, useState } from 'react';

interface CartItemHomeProps {
  data: ProductModel;
}

const CartItemHome = ({ data }: CartItemHomeProps) => {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setRating(Math.ceil(Math.random() * 10) % 2 === 0 ? 5 : 4);
  }, []);
  return (
    <div
      className={
        'card flex h-full cursor-pointer flex-col items-center rounded-md bg-white p-1 active:opacity-80'
      }
    >
      <CustomImage
        avatarMetadata={data.avatarMetadata}
        alt="product img"
        className={'h-full rounded-md'}
        priority
      />
      <div className="w-full">
        <p className="mt-1 line-clamp-2 min-h-10 w-full text-xs font-medium text-[--text-light-color]">
          {data.name}
        </p>
        <div className="flex w-full flex-col flex-wrap items-center justify-start">
          <p className="w-full self-start text-[13px] font-semibold text-red-500">
            {formatCurrencyVND(data?.price || 0)}
          </p>
          <p className="h-5 w-full text-[11px] font-light text-[--default-light-color] line-through">
            {formatCurrencyVND(data?.oldPrice || 0)}
          </p>
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="flex items-center justify-center">
            {Array.from({ length: rating }, (_, index) => {
              let num = index + 0.5;
              return (
                <span key={index}>
                  {rating >= index + 1 ? (
                    <Star strokeWidth={2} size={10} color="#FF8922" />
                  ) : rating >= num ? (
                    <StarHalf strokeWidth={2} size={10} color="#FF8922" />
                  ) : (
                    ''
                  )}
                </span>
              );
            })}
          </div>
          {data?.totalSales ? (
            <p className="ml-2 line-clamp-1 text-xs font-medium leading-none text-[--text-light-color]">
              Đã {data?.type === ProductType.SERVICE ? 'đặt' : 'bán'}{' '}
              {convertNumberToNumberText(data.totalSales)}
            </p>
          ) : (
            <p className="ml-2 line-clamp-1 text-xs font-medium leading-none text-[--text-light-color]">
              Đã {data?.type === ProductType.SERVICE ? 'đặt' : 'bán'} 0
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItemHome;
