import '../styles/globals.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '../components/react-datepicker2.css';
import Layout from '../components/Layout';
import useSwr from 'swr';
import { newIdTag } from '../components/helpers';
import { invoiceDataJson, InvoiceDetails } from '../data/invoice-data';
import useFormRefs from '../components/useFormRefs';
import { FilteredStatusType, formRefsType, InputRefs, PaymentTermsEnum } from '../components/types';

const initialItemCounterState = [
  { id: `itemLog-${Math.floor(Math.random() * 10000)}`, name: '', quantity: '0', price: '0' }
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [invoiceFormVisbility, setInvoiceFormVisiblity] = useState(false);
  const [itemCounter, setItemCounter] = useState(initialItemCounterState);
  const [filterByStatus, setFilterByStatus] = useState<FilteredStatusType>({
    draft: true,
    pending: true,
    paid: true
  });
  const { formRefs, handleInput, setHandleInput, detailsInput, setDetailsInput } = useFormRefs();

  const { data: invoiceDataSWR, mutate } = useSwr(invoiceDataJson, (args) => JSON.parse(args), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  function invoicedataFilters() {
    if (!invoiceDataSWR) return;
    const filteredData = [];
    if (filterByStatus.draft)
      filteredData.push(
        ...(invoiceDataSWR as InvoiceDetails[]).filter((item) => item.status === 'draft')
      );
    if (filterByStatus.paid)
      filteredData.push(
        ...(invoiceDataSWR as InvoiceDetails[]).filter((item) => item.status === 'paid')
      );
    if (filterByStatus.pending)
      filteredData.push(
        ...(invoiceDataSWR as InvoiceDetails[]).filter((item) => item.status === 'pending')
      );
    console.log(filteredData);
    return filteredData;
  }

  function mountForm() {
    setInvoiceFormVisiblity(true);
    router.push('/?new-invoice');
  }

  function updateStatus(invoiceId: string, statusUpdate: 'paid' | 'draft' | 'pending') {
    const newState = structuredClone(invoiceDataSWR as InvoiceDetails[]);
    const invoiceIndex = newState.findIndex((invoice) => invoice.id === invoiceId);
    newState[invoiceIndex].status = statusUpdate;
    mutate([...newState], { revalidate: false });
  }

  function deleteInvoice(invoiceId: string) {
    const newState = structuredClone(invoiceDataSWR as InvoiceDetails[]);
    const filteredItems = newState.filter((item) => item.id !== invoiceId);
    router.push('/');
    mutate([...filteredItems], { revalidate: false });
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

  function clearForm() {
    setHandleInput((prevState) => {
      const newState = structuredClone(prevState);
      for (const inputRef in newState) {
        newState[inputRef as keyof InputRefs] = '';
      }
      return newState;
    });
    setDetailsInput({
      date: new Date(),
      paymentTerms: PaymentTermsEnum['Net 1 Day']
    });
    setItemCounter([]);
    setInvoiceFormVisiblity(false);
    router.push('/');
  }

  function saveChanges(options = { draft: false }) {
    const newInvoice: InvoiceDetails = {
      id: newIdTag(),
      createdAt: new Date().toLocaleDateString(),
      paymentDue: detailsInput.date.toLocaleDateString(),
      description: formRefs.projectDescriptionInputRef?.current?.value ?? '',
      paymentTerms: detailsInput.paymentTerms,
      sender: {
        city: formRefs.cityInputRef.current?.value ?? '',
        country: formRefs.clientCountryInputRef?.current?.value ?? '',
        postalCode: formRefs.postalCodeInputRef?.current?.value ?? '',
        street: formRefs.streetAddressInputRef?.current?.value ?? ''
      },
      client: {
        name: formRefs.clientNameInputRef?.current?.value ?? '',
        email: formRefs.clientEmailInputRef?.current?.value ?? '',
        postalCode: formRefs.clientPostalCodeInputRef?.current?.value ?? '',
        street: formRefs.clientStreetAddressInputRef?.current?.value ?? '',
        city: formRefs.clientCityInputRef?.current?.value ?? '',
        country: formRefs.clientCountryInputRef?.current?.value ?? ''
      },
      items: itemCounter,
      status: options.draft ? 'draft' : 'pending'
    };
    mutate([...invoiceDataSWR, newInvoice], { revalidate: false });
    clearForm();
  }
  const formProps = {
    formRefs,
    filterByStatus,
    setFilterByStatus,
    deleteInvoice,
    updateStatus,
    saveChanges,
    clearForm,
    mountForm,
    unmountForm,
    handleInput,
    setHandleInput,
    invoiceFormVisbility,
    setInvoiceFormVisiblity,
    itemCounter,
    setItemCounter,
    detailsInput,
    setDetailsInput
  };

  return (
    <Layout formProps={formProps} invoiceDataSWR={invoiceDataSWR}>
      <Component
        {...pageProps}
        {...formProps}
        invoiceDataSWR={invoiceDataSWR}
        filteredInvoiceDataSwr={invoicedataFilters()}
      />
    </Layout>
  );
}

export default MyApp;
