'use client';
import CartItemHome from '@/components/CartItemHome';
import ScrollToTop from '@/components/ScrollToTop';
import { PAGE_DEFAULT } from '@/constants/defaultValue';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { CmsLinkModel, OrganizationModel } from '@/models';
import { RootState } from '@/redux';
import { productService } from '@/services/productService';
import { QueryKey, SearchParams } from '@/types/api';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from 'react-query';
import { useSelector } from 'react-redux';

const MainSearch = ({ params: paramsParents }: { params: SearchParams }) => {
  const router = useRouter();
  const storeInfo = useSelector<RootState, OrganizationModel>(
    (state) => state.storeStore.storeInfo,
  );

  const {
    data: productData,
    fetchNextPage: fetchNextPageProduct,
    isLoading: isLoadingProduct,
    isFetchingNextPage: isFetchingNextPageProduct,
  } = useInfiniteQuery(
    [QueryKey.PRODUCT, storeInfo?.id, paramsParents],
    async ({ pageParam = 0 }) => {
      if (!storeInfo?.id) return null;

      const params = {
        ...paramsParents,
        pageIndex: pageParam,
        pageSize: PAGE_DEFAULT,
        display: true,
        organizationId: storeInfo.id,
        sortBy: 'orderNumber',
      };
      const response = await productService.products(params);
      return response;
    },
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage?.last) {
          return Number(lastPage?.pageable?.pageNumber || 0) + 1;
        }
        return undefined;
      },
    },
  );

  useInfiniteScroll(fetchNextPageProduct, 'product-search');

  const handleOnClick = (item: CmsLinkModel) => {
    router.push(`/product/${item.id}`);
  };

  return (
    <div
      className="grid grid-cols-2 overflow-y-auto p-2 gap-2 flex-1"
      id="product-search"
    >
      {productData &&
        productData.pages.map((page) =>
          page?.content.map((product) => (
            <div
              key={product.id}
              className="rounded-md border"
              onClick={() => handleOnClick(product)}
            >
              <CartItemHome data={product} />
            </div>
          )),
        )}
      <ScrollToTop elementId="product-search" />
    </div>
  );
};

export default MainSearch;
