import React from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import InvoiceForm from '../components/InvoiceForm';
import Nav from './Nav';
import { InvoiceLayoutProps } from '../types/types';

export default function Layout({
  unmountForm,
  saveInvoice,
  children,
  invoiceFormVisibility,
  allInputState
}: InvoiceLayoutProps) {
  return (
    <div>
      <Head>
        <title>Invoice Application Demo</title>
        <meta name="description" content="created by oh-that-mike" />
      </Head>
      <div className="flex flex-col lg:flex-row">
        <Nav />
        <AnimatePresence>
          {invoiceFormVisibility && (
            <InvoiceForm unmountForm={unmountForm} saveInvoice={saveInvoice} {...allInputState} />
          )}
        </AnimatePresence>

        <div id="modal-layouts"></div>
        <main
          className={`flex min-h-screen grow flex-col items-center bg-slate-100 transition dark:bg-slate-900 ${
            invoiceFormVisibility ? 'h-screen overflow-hidden' : ''
          }`}>
          {children}
        </main>
      </div>
    </div>
  );
}
