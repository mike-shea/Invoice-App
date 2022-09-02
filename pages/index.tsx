import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import useSwr from 'swr';
import useFormRefs from '../components/useFormRefs';

import Header from '../components/header';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceList from '../components/InvoiceList';
import Nav from '../components/nav';

import type { InputRefs, formRefsType } from '../components/types';
import { invoiceDataJson } from '../data/invoice-data';

const initialItemCounterState = [{ id: 'itemLog-0', name: '', quantity: '0', price: '0' }];

const Home: NextPage = () => {
  const router = useRouter();

  const { data: invoiceDataSWR } = useSwr(invoiceDataJson, (args) => JSON.parse(args));

  const [invoiceFormVisbility, setInvoiceFormVisiblity] = useState(false);
  const [itemCounter, setItemCounter] = useState(initialItemCounterState);

  const { formRefs, handleInput, setHandleInput, detailsInput, setDetailsInput } = useFormRefs();

  const formProps = {
    formRefs,
    unmountForm,
    handleInput,
    setHandleInput,
    invoiceFormVisbility,
    itemCounter,
    setItemCounter,
    detailsInput,
    setDetailsInput
  };

  function mountForm() {
    setInvoiceFormVisiblity(true);
    router.push('/?InvoiceData');
  }

  function unmountForm() {
    setHandleInput((prevState) => {
      const newState = structuredClone(prevState);
      for (const inputRef in newState) {
        const refData: string | undefined = (formRefs as formRefsType)[inputRef as keyof InputRefs]
          ?.current?.value;
        newState[inputRef as keyof InputRefs] = refData || '';
      }
      return newState;
    });
    setInvoiceFormVisiblity(false);
    router.push('/');
  }

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>{invoiceFormVisbility && <InvoiceForm {...formProps} />}</AnimatePresence>
      <Nav />

      <main
        className={`flex w-full flex-col items-center bg-slate-100 ${
          invoiceFormVisbility && 'h-screen overflow-hidden'
        }`}>
        <div className="flex max-w-4xl flex-col py-12">
          <Header mountForm={mountForm} invoiceItemLength={invoiceDataSWR?.length} />
          <InvoiceList invoiceData={invoiceDataSWR} />
        </div>
      </main>
    </div>
  );
};

export default Home;
