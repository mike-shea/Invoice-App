import React from 'react';
import Image from 'next/image';

import { LogoSvg2, MoonSvg } from './IconComponents';

import Avatar from '../public/crow-1.svg';

export default function Nav() {
  return (
    <nav className="flex min-h-screen w-24 flex-col items-center justify-between overflow-hidden rounded-r-3xl bg-slate-800 pb-8">
      <div className="relative h-24 w-full overflow-hidden rounded-br-3xl bg-blue-500">
        <div className="absolute bottom-0 h-1/2 w-full rounded-tl-3xl bg-white/10"></div>
        <div className="p-5">
          <LogoSvg2 classGroup="w-full h-full" className="fill-white" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="aspect-square w-12 overflow-hidden rounded-full bg-slate-900/50 p-2">
          <MoonSvg classGroup="w-full h-full" className="fill-slate-500" />
        </div>
        <div className="aspect-square w-12 overflow-hidden rounded-full bg-blue-500 p-2">
          <Image layout="responsive" alt="logo" src={Avatar} />
        </div>
      </div>
    </nav>
  );
}
