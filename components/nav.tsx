import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { LogoSvg2, MoonSvg, SunSvg } from './IconComponents';

import Avatar from '../public/crow-1.svg';

export default function Nav(props: {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="hidden min-h-screen w-28 flex-col bg-slate-100 transition dark:bg-slate-900 lg:flex"></div>
      <nav className="z-30 flex w-full justify-between bg-slate-800 pr-8 lg:fixed lg:min-h-screen lg:w-24 lg:flex-col lg:rounded-r-3xl lg:pr-0 lg:pb-8">
        <div className="relative w-24 overflow-hidden rounded-r-3xl bg-blue-500 dark:bg-blue-700 lg:rounded-br-3xl">
          <div className="absolute bottom-0 h-1/2 w-full rounded-tl-3xl bg-white/10"></div>
          <div id="logo-container" className="p-5">
            <LogoSvg2 classGroup="w-full h-full" className="fill-white" />
          </div>
        </div>
        <div className="flex items-center gap-8 lg:flex-col">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="group aspect-square w-12 overflow-hidden rounded-full bg-slate-900/50 p-2">
            {theme === 'light' ? (
              <SunSvg
                classGroup="w-full h-full"
                className="fill-slate-500 transition group-hover:fill-slate-200"
              />
            ) : (
              <MoonSvg
                classGroup="w-full h-full"
                className="fill-slate-500 transition group-hover:fill-slate-200"
              />
            )}
          </button>
          <div className="aspect-square w-12 overflow-hidden rounded-full bg-blue-500 p-2">
            <Image priority={true} layout="responsive" alt="logo" src={Avatar} />
          </div>
        </div>
      </nav>
    </>
  );
}
