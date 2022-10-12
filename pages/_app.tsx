import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import '../components/react-datepicker2.css';
import '../styles/globals.css';

import Layout from '../components/Layout';
import useFormInput from '../hooks/useFormInput';
import useSampleData from '../hooks/useSampleData';

const initialFilter = {
  draft: true,
  pending: true,
  paid: true
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { invoiceData, isError, isLoading, invoiceaMutate } = useSampleData();
  const { userInfo, clientInfo, details, items, functions } = useFormInput();

  const [invoiceFormVisbility, setInvoiceFormVisiblity] = useState(false);
  const [filterByStatus, setFilterByStatus] = useState(initialFilter);

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
    if (!invoiceData) return;
    const invoiceItem = invoiceData.find((invoice) => invoice.id === id);
    if (!invoiceItem) return;
    functions.setFormState(invoiceItem);
    setInvoiceFormVisiblity(true);
    router.push(`/${id}?edit`);
  }

  function updateInvoiceStatus(invoiceId: string, statusUpdate: keyof typeof filterByStatus) {
    if (!invoiceData) return;
    const newState = structuredClone(invoiceData);
    const invoiceIndex = newState.findIndex((invoice) => invoice.id === invoiceId);
    newState[invoiceIndex].status = statusUpdate;
    invoiceaMutate([...newState], { revalidate: false });
  }

  function deleteInvoice(invoiceId: string) {
    if (!invoiceData) return;
    const newState = structuredClone(invoiceData);
    const filteredItems = newState.filter((item) => item.id !== invoiceId);
    invoiceaMutate([...filteredItems], { revalidate: false });
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
    if (!invoiceData) return;
    const invoice = functions.createNewInvoice(null, status);
    invoiceaMutate([...invoiceData, invoice], { revalidate: false });
  }

  function saveExistingInvoice(id: string, status: 'draft' | 'pending') {
    if (!invoiceData) return;
    const invoiceItem = invoiceData.find((invoice) => invoice.id === id);
    if (!invoiceItem) return;
    const invoice = functions.createNewInvoice(invoiceItem, status);
    const newState = structuredClone(invoiceData);
    const invoiceItemIndex = newState.findIndex((invoice) => invoice.id === invoiceItem.id);
    newState.splice(invoiceItemIndex, 1, invoice);
    invoiceaMutate(newState, { revalidate: false });
  }

  function filterInvoiceByStatus() {
    if (!invoiceData) return;
    const filter = [];
    let status: keyof typeof filterByStatus;
    for (status in filterByStatus) {
      filterByStatus[status] &&
        filter.push(...invoiceData.filter((item) => item.status === status));
    }
    return filter.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
          invoiceDataSWR={invoiceData ?? []}
          filteredInvoiceDataSwr={filterInvoiceByStatus()}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
