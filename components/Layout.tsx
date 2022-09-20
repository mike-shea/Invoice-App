import React from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import InvoiceForm from '../components/InvoiceForm';
import Nav from './Nav';

import { InputRefs, formRefsType, DetailsInputType, ItemCounterType } from '../components/types';
import type { InvoiceDetails } from '../data/invoice-data';

export default function Layout(props: {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  invoiceDataSWR: InvoiceDetails[];
  children?: React.ReactNode;
  formProps: {
    detailsInput: DetailsInputType;
    setDetailsInput: React.Dispatch<React.SetStateAction<DetailsInputType>>;
    handleInput: InputRefs;
    invoiceFormVisbility: boolean;
    itemCounter: ItemCounterType[];
    setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
    clearForm: () => void;
    mountForm: () => void;
    unmountForm: () => void;
    saveChanges: (options?: { draft?: boolean; id?: string | undefined }) => void;
    formRefs: formRefsType;
    editFormState: boolean;
  };
}) {
  return (
    <div className={`${props.darkmode ? 'dark' : ''} `}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col lg:flex-row">
        <Nav darkmode={props.darkmode} setDarkmode={props.setDarkmode} />
        <AnimatePresence>
          {props.formProps.invoiceFormVisbility && (
            <InvoiceForm {...props.formProps} editFormState={props.formProps.editFormState} />
          )}
        </AnimatePresence>

        <div id="modal-layouts"></div>
        <main
          className={`flex min-h-screen grow flex-col items-center bg-slate-100 transition dark:bg-slate-900 ${
            props.formProps.invoiceFormVisbility ? 'h-screen overflow-hidden' : ''
          }`}>
          {props.children}
        </main>
      </div>
    </div>
  );
}
