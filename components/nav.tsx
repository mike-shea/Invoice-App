import React from 'react';
import Image from 'next/image';

import { LogoSvg2, MoonSvg } from './IconComponents';

import Avatar from '../public/crow-1.svg';

export default function Nav() {
  return (
    <>
      <div className="lg:h-min-screen hidden h-24 bg-slate-100 lg:block lg:w-24"></div>
      <nav className="z-30 flex w-full justify-between bg-slate-800 pr-8 lg:fixed lg:min-h-screen lg:w-24 lg:flex-col lg:rounded-r-3xl lg:pr-0 lg:pb-8">
        <div className="relative w-24 w-full overflow-hidden rounded-r-3xl bg-blue-500 lg:rounded-br-3xl">
          <div className="absolute bottom-0 h-1/2 w-full rounded-tl-3xl bg-white/10"></div>
          <div id="logo-container" className="p-5">
            <LogoSvg2 classGroup="w-full h-full" className="fill-white" />
          </div>
        </div>
        <div className="flex items-center gap-8 lg:flex-col">
          <div className="aspect-square w-12 overflow-hidden rounded-full bg-slate-900/50 p-2">
            <MoonSvg classGroup="w-full h-full" className="fill-slate-500" />
          </div>
          <div className="aspect-square w-12 overflow-hidden rounded-full bg-blue-500 p-2">
            <Image priority={true} layout="responsive" alt="logo" src={Avatar} />
          </div>
        </div>
      </nav>
    </>
  );
}
