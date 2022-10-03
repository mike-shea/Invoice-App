import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSwr, { KeyedMutator } from 'swr';

import '../components/react-datepicker2.css';
import '../styles/globals.css';

import Layout from '../components/Layout';
import { initialData, InvoiceDetails } from '../data/invoice-data';
import useFormInput from '../hooks/useFormInput';
import noValidationConfig, { initialFilter } from '../data/SWR-config';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [invoiceFormVisbility, setInvoiceFormVisiblity] = useState(false);
  const [filterByStatus, setFilterByStatus] = useState(initialFilter);
  const { userInfo, clientInfo, details, items, functions } = useFormInput();

  type SwrReturnType = { data?: InvoiceDetails[]; mutate: KeyedMutator<unknown> };
  const SWR: SwrReturnType = useSwr(initialData, (args) => JSON.parse(args), noValidationConfig);

  function mountNewInvoiceForm() {
    setInvoiceFormVisiblity(true);
    router.push('/?new-invoice');
  }

  function unmountForm(invoiceIdParam: string | null) {
    setInvoiceFormVisiblity(false);
    if (invoiceIdParam) {
      functions.clearFormState();
      router.push(`/${invoiceIdParam?.toString()}`);
    } else router.push('/');
  }

  function populateFormWithExisting(id: string) {
    if (!SWR.data) return;
    const invoiceItem = SWR.data.find((invoice) => invoice.id === id);
    if (!invoiceItem) return;
    functions.setFormState(invoiceItem);
    setInvoiceFormVisiblity(true);
    router.push(`/${id}?edit`);
  }

  function updateInvoiceStatus(invoiceId: string, statusUpdate: keyof typeof filterByStatus) {
    if (!SWR.data) return;
    const newState = structuredClone(SWR.data);
    const invoiceIndex = newState.findIndex((invoice) => invoice.id === invoiceId);
    newState[invoiceIndex].status = statusUpdate;
    SWR.mutate([...newState], { revalidate: false });
  }

  function deleteInvoice(invoiceId: string) {
    if (!SWR.data) return;
    const newState = structuredClone(SWR.data);
    const filteredItems = newState.filter((item) => item.id !== invoiceId);
    SWR.mutate([...filteredItems], { revalidate: false });
    router.push('/');
  }

  function saveInvoice(id: string | null, status: 'draft' | 'pending') {
    if (id) {
      saveExistingInvoice(id, status);
      setInvoiceFormVisiblity(false);
      router.push(`/${id}?edit`);
    }
    if (!id || id === null) {
      saveNewInvoice(status);
      setInvoiceFormVisiblity(false);
      router.push('/');
    }
  }

  function saveNewInvoice(status: 'draft' | 'pending') {
    if (!SWR.data) return;
    const invoice = functions.createNewInvoice(null, status);
    SWR.mutate([...SWR.data, invoice], { revalidate: false });
  }

  function saveExistingInvoice(id: string, status: 'draft' | 'pending') {
    if (!SWR.data) return;
    const invoiceItem = SWR.data.find((invoice) => invoice.id === id);
    if (!invoiceItem) return;
    const invoice = functions.createNewInvoice(invoiceItem, status);
    const newState = structuredClone(SWR.data);
    const invoiceItemIndex = newState.findIndex((invoice) => invoice.id === invoiceItem.id);
    newState.splice(invoiceItemIndex, 1, invoice);
    SWR.mutate(newState, { revalidate: false });
  }

  function filterInvoiceByStatus() {
    if (!SWR.data) return;
    const filter = [];
    let status: keyof typeof filterByStatus;
    for (status in filterByStatus) {
      filterByStatus[status] && filter.push(...SWR.data.filter((item) => item.status === status));
    }
    return filter;
  }

  const allInputState = { userInfo, clientInfo, details, items, functions };
  const allActions = {
    saveInvoice,
    deleteInvoice,
    updateInvoiceStatus,
    populateFormWithExisting,
    mountNewInvoiceForm,
    unmountForm
  };

  return (
    <ThemeProvider attribute="class">
      <Layout
        allInputState={allInputState}
        saveInvoice={saveInvoice}
        unmountForm={unmountForm}
        invoiceFormVisibility={invoiceFormVisbility}>
        <Component
          {...pageProps}
          {...allInputState}
          {...allActions}
          filterByStatus={filterByStatus}
          setFilterByStatus={setFilterByStatus}
          invoiceDataSWR={SWR.data ?? []}
          filteredInvoiceDataSwr={filterInvoiceByStatus()}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
