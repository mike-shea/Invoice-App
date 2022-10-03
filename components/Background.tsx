import React from 'react';
import { childrenProp } from '../types/singlePropType';

const Background = ({ children }: childrenProp) => {
  return <body className="bg-slate-100 transition-all dark:bg-slate-900">{children}</body>;
};

export default Background;
