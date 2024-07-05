'use client';
import { ProductModel, ProductType } from '@/models';
import { formatCurrencyVND } from '@/ultils/number';
import { convertNumberToNumberText } from '@/ultils/text';
import { Star, StarHalf } from 'lucide-react';
import CustomImage from '../Image';
import React, { useEffect } from 'react';

interface CartItemHomeProps {
  data: ProductModel;
}

//rating = 4 | 5 star

const CartItemHome = ({ data }: CartItemHomeProps) => {
  const [rating, setRating] = React.useState<number>(0);
  useEffect(() => {
    setRating(Math.ceil(Math.random() * 10) % 2 === 0 ? 5 : 4)
  }, [])
  return (
    <div className="card flex cursor-pointer flex-col items-center rounded-md bg-white p-1">
      <CustomImage
        avatarMetadata={data.avatarMetadata}
        alt="product img"
        className={`!object-contain rounded-md`}
        priority
      />
      <p className="mt-1 line-clamp-2 min-h-10 w-full text-xs font-medium">
        {data.name}
      </p>
      <div className="flex w-full items-center justify-start">
        <p className="self-start text-[13px] font-semibold text-red-500">
          {formatCurrencyVND(data?.price || 0)}
        </p>
        {data?.oldPrice && data?.price && data.price < data.oldPrice ? (
          <span className="text-default-light dark:text-default-dark ml-2 text-[11px] font-light line-through">
            {formatCurrencyVND(data?.oldPrice || 0)}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="mt-2 flex items-center justify-center">
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
          <p className="line-clamp-1 text-[11px] font-medium leading-none">
            Đã {data?.type === ProductType.SERVICE ? 'đặt' : 'bán'}{' '}
            {convertNumberToNumberText(data.totalSales)}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CartItemHome;
