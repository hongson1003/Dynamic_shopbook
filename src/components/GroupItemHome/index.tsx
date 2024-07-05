'use client';
import CustomImage from '@/components/Image';
import SliderWrapper from '@/components/SliderWrapper';
import { HomeConfigItemModel, ProductModel } from '@/models';
import React, { useEffect } from 'react';
import CartItemHome from '../CartItemHome';
import { useRouter } from 'next/navigation';

const GroupItemHome = ({ data }: { data: HomeConfigItemModel }) => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

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
      <div className="mt-2">
        <SliderWrapper
          settings={{
            slidesToShow: windowWidth > 768 ? 4 : 2,
            slidesToScroll: 1,
            dots: false,
            centerMode: windowWidth > 768 ? false : true,
            centerPadding: windowWidth > 768 ? '0px' : '10%',
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
