'use client';
import CustomImage from '@/components/Image';
import SliderWrapper from '@/components/SliderWrapper';
import { CATEGORIES } from '@/constants';
import { CmsCategoryModel } from '@/models';
import { useRouter } from 'next/navigation';
import React from 'react';
const GroupSlider = ({ data, id }: { data: CmsCategoryModel[], id: string }) => {
  const router = useRouter();
  return (
    <div id={id} className='flex'>
      <SliderWrapper>
        {data.map(item => (
          <CustomImage
            key={item.id}
            alt={item?.name}
            ratio='13/8'
            className="cursor-pointer md:max-h-96 w-full h-full"
            avatarMetadata={item?.avatarMetadata}
            onClick={() => {router.push(`${CATEGORIES}?categoryId=${item.id}`)}}
          />
        ))}
      </SliderWrapper>
    </div>
  );
};

export default GroupSlider;
