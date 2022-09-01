import React from 'react';
import { ExpandMoreSvg, PlusSvg } from './IconComponents';

export default function Header(props: { invoiceItemLength: number; mountForm: () => void }) {
  function openNewForm() {
    props.mountForm();
  }
  return (
    <header className="flex w-full flex-row items-center justify-between pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-slate-800">Invoices</h1>
        <p className="text-slate-500">There are {props.invoiceItemLength ?? 0} total invoices</p>
      </div>
      <div className="flex items-center gap-10">
        <button className=" flex font-bold text-slate-700">
          Filter by status
          <span className="pl-2">
            <ExpandMoreSvg className="fill-blue-600" />
          </span>
        </button>
        <button
          onClick={openNewForm}
          className="flex items-center gap-4 rounded-full bg-blue-600 py-2 pl-2 pr-5 font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800">
          <span className="rounded-full bg-white p-2">
            <PlusSvg className="fill-blue-500" />
          </span>
          New Invoice
        </button>
      </div>
    </header>
  );
}
