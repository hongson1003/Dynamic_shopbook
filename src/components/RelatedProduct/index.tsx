'use client';
import SliderWrapper from '@/components/SliderWrapper';
import { ProductModel } from '@/models';
import { ListResponse } from '@/types/api';
import CartItemHome from '../CartItemHome';
import Link from 'next/link';

const RelatedProduct = ({ data }: { data: ListResponse<ProductModel> }) => {
  return (
    <div className="rounded-md bg-[var(--product-background-grey)] p-2">
      <SliderWrapper
        settings={{
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
          centerPadding: '5%',
        }}
      >
        {data?.content
          ?.map((item) => item as ProductModel)
          .map((product) => (
            <div key={product.id} className="px-1 flex w-[152px]">
              <Link href={`/product/${product.id}`}>
                <CartItemHome data={product} />
              </Link>
            </div>
          ))}
        {/* <p>1</p>
        <p>2</p>
        <p>3</p> */}
      </SliderWrapper>
    </div>
  );
};

export default RelatedProduct;
