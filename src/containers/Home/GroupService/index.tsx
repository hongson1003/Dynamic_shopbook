'use client';
import CustomImage from '@/components/Image';
import { CategoryModel, HomeConfigItemModel } from '@/models';
import React from 'react';
import Logo from '@/assets/images/logo.png';

const GroupService = ({ data }: { data: HomeConfigItemModel }) => {
  return (
    <div className="bg-white p-2">
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
        <p className="text-lg font-bold text-gray-800">
          {data.cmsCategory?.name}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap justify-around gap-2 py-2">
        {data.cmsCategory?.linkDTOs?.map((item, index) => (
          <div key={item.id} className="flex flex-1 flex-col items-center">
            <div
              style={{
                borderWidth: 'var(--category-border-width-light)',
              }}
              className="home-category-item w-[60px] cursor-pointer overflow-hidden rounded-[var(--category-border-radius-light)] border-[var(--category-border-color-light)] dark:rounded-[var(--category-border-radius-dark)]"
            >
              <CustomImage
                errorSrc={Logo.src}
                alt={data.cmsCategory?.name}
                className="z-0 object-cover"
                avatarMetadata={
                  (item.targetObject as CategoryModel).avatarMetadata
                }
                customRatio="pt-[var(--category-aspect-light)] w-full z-0"
              />
            </div>
            <p className="mt-1.5 line-clamp-2 text-center text-[11px] font-medium leading-normal">
              {(item.targetObject as CategoryModel).name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupService;
