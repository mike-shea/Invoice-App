import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { LogoSvg2, MoonSvg, SunSvg } from './IconComponents';
import Avatar from '../public/crow-1.svg';
import { motion } from 'framer-motion';

function Nav({ unmountForm }: { unmountForm: (invoiceIdParam: string | null) => void }) {
  const { theme, setTheme } = useTheme();
  const [profilePopup, setProfilePopup] = useState(false);
  return (
    <>
      <div className="hidden min-h-screen w-28 flex-col bg-slate-100 transition dark:bg-slate-900 lg:flex"></div>
      <nav className="z-30 flex w-full justify-between overflow-visible bg-slate-800 pr-8 lg:fixed lg:min-h-screen lg:w-24 lg:flex-col lg:rounded-r-3xl lg:pr-0 lg:pb-8">
        <button onClick={() => unmountForm(null)}>
          <div className="relative w-24 overflow-hidden rounded-r-3xl bg-blue-500 transition hover:bg-blue-600 dark:bg-blue-700 hover:dark:bg-blue-800 lg:rounded-br-3xl">
            <div className="pointer-events-none absolute bottom-0 h-1/2 w-full rounded-tl-3xl bg-white/10"></div>

            <div id="logo-container" className="p-5">
              <LogoSvg2 classGroup="w-full h-full" className="fill-white" />
            </div>
          </div>
        </button>
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
          <motion.div
            onClick={() => {
              setProfilePopup(true);
              setTimeout(() => setProfilePopup(false), 2000);
            }}
            // onHoverStart={() => setProfilePopup(true)}
            onHoverEnd={() => setProfilePopup(false)}
            className="group relative">
            <div className="aspect-square w-12 cursor-pointer overflow-hidden rounded-full bg-blue-500 p-2 transition group-hover:bg-blue-500/90">
              <Image priority={true} layout="responsive" alt="logo" src={Avatar} />
            </div>

            <motion.div
              key="profilePopup"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className={`absolute ${
                profilePopup ? 'flex' : 'hidden'
              } right-0 top-0 mr-14 rounded-xl bg-white p-2 shadow-lg group-hover:flex dark:bg-slate-500/30 dark:backdrop-blur-md lg:right-auto lg:-mt-0 lg:mr-0 lg:ml-14 lg:p-4`}>
              <p className="flex w-48 text-slate-800 dark:text-white">
                User profile is unavailable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
