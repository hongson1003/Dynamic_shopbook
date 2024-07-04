'use client';
import { AppDispatch } from '@/redux';
import { getListStores } from '@/redux/slices/store-slice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Fire = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getListStores());
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Fire;
