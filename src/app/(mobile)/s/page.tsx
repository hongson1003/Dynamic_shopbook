import { PAGE_DEFAULT } from '@/constants/defaultValue';
import MobileHeader from '@/containers/Mobile/HeaderSearch';
import MainSearch from '@/containers/Mobile/MainSearch';
import { productService } from '@/services/productService';
import { SearchParams } from '@/types/api';
import React from 'react';

const searchProductsByName = async (name: string) => {
  const products = await productService.products({
    name,
  });
};

const ResultSearchPage = async ({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: number;
  };
}) => {
  const params: SearchParams = {
    name: searchParams?.name,
    pageIndex: searchParams?.page || 0,
    pageSize: PAGE_DEFAULT,
    isHaveChildren: false,
    display: true,
    sortBy: 'orderNumber',
  };
  return (
    <div
      id="main-search-product"
      className="max-h-screen flex flex-col"
    >
      <MobileHeader />
      <MainSearch params={params} />
    </div>
  );
};

export default ResultSearchPage;
