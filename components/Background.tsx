import React from 'react';

const Background = (props: { children: React.ReactNode }) => {
  return <body className="bg-slate-100 transition-all dark:bg-slate-900">{props.children}</body>;
};

export default Background;
