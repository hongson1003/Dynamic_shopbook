'use client';
import CustomImage from '@/components/Image';
import SliderWrapper from '@/components/SliderWrapper';
import {
  ArticleModel,
  CmsLinkModel,
  HomeConfigItemModel,
  ImageModel,
} from '@/models';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImageNotFound from '@/assets/images/no-image.png';

const News = ({ data }: { data: HomeConfigItemModel }) => {
  const [width, setWidth] = useState<number>(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const router = useRouter();

  const handleOnClick = (item: CmsLinkModel) => {
    router.push(`/new/${item.id}`);
  };

  return (
    <div id={String(data.id)} className="bg-[var(--product-background-grey)] p-2">
      <div className="flex items-center gap-3">
        {Array.isArray(data.cmsCategory?.avatarMetadata) &&
          data.cmsCategory.avatarMetadata.length > 0 && (
            <div className="h-[26px] w-[26px] overflow-hidden rounded-md">
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
      <SliderWrapper
        settings={{
          dots: false,
          autoplay: false,
          slidesToShow: 1,
          centerMode: true,
        }}
      >
        {data.cmsCategory?.linkDTOs?.map((item, index) => {
          const imageObj = (item.targetObject as ArticleModel)
            .avatar as ImageModel;
          const title = (item.targetObject as ArticleModel).title;
          return (
            <div
              className="cursor-pointer p-1"
              key={item.id}
              onClick={() => handleOnClick(item)}
            >
              <div className="flex flex-col gap-1 overflow-hidden rounded-md bg-white p-2">
                <Image
                  src={imageObj?.downloadUrl || ImageNotFound.src}
                  alt="image"
                  width={1000}
                  height={500}
                  className="aspect-video"
                />
                <p className="line-clamp-2 text-xs font-bold min-h-10">{(title && title.charAt(0).toUpperCase() + title.slice(1)) || 'Không tên'}</p>
              </div>
            </div>
          );
        })}
      </SliderWrapper>
    </div>
  );
};

export default News;
