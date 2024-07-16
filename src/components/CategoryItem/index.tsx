'use client';
import CustomImage from '@/components/Image';
import { CategoryModel } from '@/models';

const CategoryItem = ({ category }: { category: CategoryModel }) => {
  return (
    <div
      className={
        'h-28 w-[70px] bg-white p-1 active:opacity-80 md:h-48 md:w-36 md:rounded-md'
      }
    >
      <CustomImage
        avatarMetadata={category.avatarMetadata}
        alt="icon"
        className="round-md !z-0 border-2 border-white"
        priority
      />
      <p className="md:text-md text-center text-[10px] font-bold text-[--text-light-color]">
        {category?.name}
      </p>
    </div>
  );
};

export default CategoryItem;
