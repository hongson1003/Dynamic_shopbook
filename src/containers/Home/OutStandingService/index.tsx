import GroupItemHome from '@/components/GroupItemHome';
import { HomeConfigItemModel } from '@/models';

const OutStandingService = ({ data }: { data: HomeConfigItemModel }) => {
  return <GroupItemHome data={data} />;
};

export default OutStandingService;
