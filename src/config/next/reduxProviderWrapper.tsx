'use client';
import store from '@/redux/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
type Props = {
  children: ReactNode;
};

const ReduxProviderWrapper: React.FC<Props> = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviderWrapper;
