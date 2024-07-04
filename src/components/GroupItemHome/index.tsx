'use client';
import CustomImage from '@/components/Image';
import SliderWrapper from '@/components/SliderWrapper';
import { HomeConfigItemModel, ProductModel } from '@/models';
import React from 'react';
import CartItemHome from '../CartItemHome';
import { useRouter } from 'next/navigation';

const GroupItemHome = ({ data }: { data: HomeConfigItemModel }) => {
  const router = useRouter();
  const handleOnClick = (item: ProductModel) => {
    router.push(`/product/${item.id}`);
  };
  return (
    <div id={String(data.id)} className="bg-[var(--product-background-grey)] p-2">
      <div className="flex items-center gap-3">
        {Array.isArray(data.cmsCategory?.avatarMetadata) &&
          data.cmsCategory.avatarMetadata.length > 0 && (
            <div className="h-[20px] w-[20px] overflow-hidden rounded-full">
              <CustomImage
                avatarMetadata={data.cmsCategory.avatarMetadata}
                alt="icon"
                className="!z-0"
              />
            </div>
          )}
        <p className="text-md font-bold text-gray-800">
          {data.cmsCategory?.name}
        </p>
      </div>
      {/* aspect-[25/15] w-full sm:aspect-[16/7.5] md:aspect-[16/6.5] */}
      <div className="mt-2">
        <SliderWrapper
          settings={{
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            centerPadding: '10%',
            swipeToSlide: true,
          }}
        >
          {data.cmsCategory?.linkDTOs
            ?.map((item) => item.targetObject as ProductModel)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleOnClick(item)}
                className="p-1"
              >
                <CartItemHome data={item} />
              </div>
            ))}
        </SliderWrapper>
      </div>
    </div>
  );
};

export default GroupItemHome;
