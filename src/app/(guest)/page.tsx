import Footer from '@/containers/Footer';
import GroupProduct from '@/containers/Home/GroupProduct';
import GroupSlider from '@/containers/Home/GroupSlider';
import News from '@/containers/Home/News';
import {
  CmsCategoryRenderType,
  HomeConfigItemModel,
} from '@/models';
import { homeConfigService } from '@/services/homeConfigService';

const fetchHomeConfig = async () => {
  try {
    const homeConfigData = await homeConfigService.getConfig();
    if (!homeConfigData) return null;
    return homeConfigData;
  } catch (error) {
    console.log(error);
  }
};

const renderHomeConfig = (homeConfigItemModel: HomeConfigItemModel) => {
  switch (homeConfigItemModel.cmsCategory?.renderType) {
    case CmsCategoryRenderType.PRODUCT_GROUP: {
      return <GroupProduct data={homeConfigItemModel} />;
    }
    case CmsCategoryRenderType.CATEGORY: {
      return <GroupProduct data={homeConfigItemModel} />;
    }
    case CmsCategoryRenderType.SLIDER: {
      return (
        homeConfigItemModel?.cmsCategory?.linkDTOs && (
          <GroupSlider data={homeConfigItemModel?.cmsCategory?.linkDTOs} id={String(homeConfigItemModel.id)} />
        )
      );
    }
    case CmsCategoryRenderType.ARTICLE: {
      return <News data={homeConfigItemModel} />;
    }
  }
};
const HomePage = async () => {
  const homeConfig = await fetchHomeConfig();
  return (
    <div className="md:container md:mt-3">
      {homeConfig?.configDTOs?.map((item: HomeConfigItemModel) => (
        <div key={item.id}>{renderHomeConfig(item)}</div>
      ))}
      <div className='hidden md:block'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
