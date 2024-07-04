import RelatedProduct from '@/components/RelatedProduct';
import { ProductModel } from '@/models';
import { ListResponse } from '@/types/api';

const DiscoverProducts = ({
  relatedProducts,
}: {
  relatedProducts: ListResponse<ProductModel>;
}) => {
  return (
    <div className="mt-3 w-full rounded-md bg-gray-200">
      <h1 className="text-md w-full text-center font-semibold">
        - Khám phá thêm -
      </h1>
      {relatedProducts?.totalElements > 0 && (
        <RelatedProduct data={relatedProducts} />
      )}
    </div>
  );
};
export default DiscoverProducts;
