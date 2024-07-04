import { CMS_CATEGORY_SLUG, CMS_CATEGORY_SLUG_URL } from '@/constants';
import { CmsCategoryModel } from '@/models';
import axiosClient from './axiosService';

export const cmsCategoryService = {
  getCategoryBySlug: async (
    slug: CMS_CATEGORY_SLUG | string,
    organizationId?: string,
  ): Promise<CmsCategoryModel> => {
    return axiosClient()({
      url: `${CMS_CATEGORY_SLUG_URL}/${slug}`,
      method: 'GET',
      params: {
        organizationId,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
