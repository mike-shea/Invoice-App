import React, { useState } from 'react';
import FilterListPopUp from './filterListPopUp';
import { ExpandMoreSvg, PlusSvg } from './IconComponents';
import { FilteredStatusType } from './types';
import useHandleClickOutside from './useHandleClickOutside';

export default function Header(props: {
  filterByStatus: FilteredStatusType;
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
  invoiceItemLength: number;
  mountForm: () => void;
}) {
  const { componentVisibleRef, isComponentVisible, setIsComponentVisible } =
    useHandleClickOutside(false);

  return (
    <header className="flex w-full flex-row items-center justify-between py-8 px-6">
      <div className="flex flex-col lg:gap-2">
        <h1 className="text-xl font-bold leading-tight text-slate-800 lg:text-5xl">Invoices</h1>
        <p className="text-sm text-slate-500">
          <span className="hidden lg:inline-block">There are</span>
          {props.invoiceItemLength ?? 0}
          <span className="hidden lg:inline-block">total</span> invoices
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm lg:gap-10">
        <div className="relative">
          <button
            onClick={() => setIsComponentVisible((prev) => !prev)}
            className="flex items-center font-bold text-slate-700">
            Filter <span className="hidden lg:inline-block">by status</span>
            <span className="pl-1 lg:pl-2">
              <ExpandMoreSvg className="fill-blue-600" />
            </span>
          </button>
          {isComponentVisible && (
            <FilterListPopUp
              componentVisibleRef={componentVisibleRef}
              filterByStatus={props.filterByStatus}
              setFilterByStatus={props.setFilterByStatus}
            />
          )}
        </div>

        <button
          onClick={() => props.mountForm()}
          className="flex items-center gap-2 rounded-full bg-blue-600 py-2 pl-2 pr-5 font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800 lg:gap-4">
          <span className="rounded-full bg-white p-1">
            <PlusSvg className="fill-blue-500" />
          </span>
          <span className="hidden lg:inline-block">Invoice</span>
          New
        </button>
      </div>
    </header>
  );
}
