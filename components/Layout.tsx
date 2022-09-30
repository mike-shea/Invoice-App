import React from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import InvoiceForm from '../components/InvoiceForm';
import Nav from './Nav';
import { inputFormStateProps } from '../types/InputFormTypes';

export default function Layout({
  unmountForm,
  saveInvoice,
  children,
  invoiceFormVisbility,
  userInfo,
  clientInfo,
  details,
  items,
  functions
}: {
  unmountForm: (invoiceIdParam: string | null) => void;
  saveInvoice: (id: string | null, status: 'draft' | 'pending') => void;
  children?: React.ReactNode;
  invoiceFormVisbility: boolean;
} & inputFormStateProps) {
  return (
    <div>
      <Head>
        <title>Invoice Application Demo</title>
        <meta name="description" content="created by oh-that-mike" />
      </Head>
      <div className="flex flex-col lg:flex-row">
        <Nav />
        <AnimatePresence>
          {invoiceFormVisbility && (
            <InvoiceForm
              unmountForm={unmountForm}
              saveInvoice={saveInvoice}
              userInfo={userInfo}
              clientInfo={clientInfo}
              details={details}
              items={items}
              functions={functions}
            />
          )}
        </AnimatePresence>

        <div id="modal-layouts"></div>
        <main
          className={`flex min-h-screen grow flex-col items-center bg-slate-100 transition dark:bg-slate-900 ${
            invoiceFormVisbility ? 'h-screen overflow-hidden' : ''
          }`}>
          {children}
        </main>
      </div>
    </div>
  );
}
