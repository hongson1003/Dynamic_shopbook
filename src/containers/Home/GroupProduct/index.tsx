import GroupItemHome from '@/components/GroupItemHome';
import { HomeConfigItemModel } from '@/models';
import React from 'react';

const GroupProduct = ({ data }: { data: HomeConfigItemModel }) => {
  return <GroupItemHome data={data} />;
};

export default GroupProduct;
