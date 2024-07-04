import { CmsCategoryRenderType } from '@/models';
import { homeConfigService } from '@/services/homeConfigService';
import MenuSelection from './MenuSelection';
const fetchHomeConfig = async () => {
  try {
    const homeConfigData = await homeConfigService.getConfig();
    if (!homeConfigData) return null;
    return homeConfigData;
  } catch (error) {
    console.log(error);
  }
};

const renderHomeConfigType = [
  {
    type: CmsCategoryRenderType.PRODUCT_GROUP,
    href: '/san-pham-hot',
  },
  {
    type: CmsCategoryRenderType.CATEGORY,
    href: '/danh-muc-san-pham',
  },
  {
    type: CmsCategoryRenderType.SLIDER,
    href: '/slider',
  },
  {
    type: CmsCategoryRenderType.ARTICLE,
    href: '/tin-tuc',
  },
  // {
  //   type: CmsCategoryRenderType.PROMOTION,
  //   href: '/khuyen-mai',
  // },
  {
    type: CmsCategoryRenderType.ZALO_ARTICLE,
    href: '/zalo-article',
  },
  // {
  //   type: CmsCategoryRenderType.LINK,
  //   href: '/link',
  // },
  // {
  //   type: CmsCategoryRenderType.MEMBER_CARD,
  //   href: '/member-card',
  // },
  // {
  //   type: CmsCategoryRenderType.PROMOTION_NUMBER,
  //   href: '/promotion-number',
  // },
  // {
  //   type: CmsCategoryRenderType.MY_PARTNER,
  //   href: '/my-partner',
  // },
]

const Menu = async () => {
  const homeConfigData = await fetchHomeConfig();
  const homeConfigType = homeConfigData?.configDTOs
    ?.map((item: any) => ({
      id: item.id,
      renderType: item.cmsCategory?.renderType,
      name: item.cmsCategory?.name
    }))
    .filter((value: any, index: number, self: any[]) =>
      index === self.findIndex((t) => (
        t.renderType === value.renderType && t.name === value.name
      ))
    );
  return (
    <div className="w-ful h-full bg-almost-white p-2">
      <div className="container flex items-center justify-between">
        <div className="flex space-x-2">
          {
            homeConfigType?.map((item: any) => {
              return renderHomeConfigType.map((type) => {
                if (item.renderType === type.type) {
                  return (
                    <MenuSelection
                      href={type.href}
                      title={item.name}
                      id={item.id}
                    />
                  )
                }
              })
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
