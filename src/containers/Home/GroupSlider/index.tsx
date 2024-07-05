'use client';
import CustomImage from '@/components/Image';
import SliderWrapper from '@/components/SliderWrapper';
import { CmsCategoryModel } from '@/models';

const GroupSlider = ({ data, id }: { data: CmsCategoryModel[], id: string }) => {
  return (
    <div id={id}>
      <SliderWrapper>
        {data.map(item => (
          <CustomImage
            key={item.id}
            ratio="video"
            alt={item?.name}
            className="cursor-pointer object-cover md:max-h-96"
            avatarMetadata={item?.avatarMetadata}
          />
        ))}
      </SliderWrapper>
    </div>
  );
};

export default GroupSlider;
