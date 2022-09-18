import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSwr, { KeyedMutator } from 'swr';
import { newIdTag } from '../components/helpers';
import Layout from '../components/Layout';
import '../components/react-datepicker2.css';
import { FilteredStatusType, formRefsType, InputRefs, PaymentTermsEnum } from '../components/types';
import { invoiceDataJson, InvoiceDetails } from '../data/invoice-data';
import useFormRefs from '../hooks/useFormRefs';
import '../styles/globals.css';

const initialItemCounterState = [
  { id: `itemLog-${Math.floor(Math.random() * 10000)}`, name: '', quantity: '0', price: '0' }
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [invoiceFormVisbility, setInvoiceFormVisiblity] = useState(false);
  const [editFormState, setEditFormState] = useState(false);
  const [itemCounter, setItemCounter] = useState(initialItemCounterState);
  const [filterByStatus, setFilterByStatus] = useState<FilteredStatusType>({
    draft: true,
    pending: true,
    paid: true
  });
  const { formRefs, handleInput, setHandleInput, detailsInput, setDetailsInput } = useFormRefs();

  const {
    data: invoiceDataSWR,
    mutate
  }: { data?: InvoiceDetails[]; mutate: KeyedMutator<unknown> } = useSwr(
    invoiceDataJson,
    (args) => JSON.parse(args),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

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
    return filteredData;
  }

  function mountForm() {
    setInvoiceFormVisiblity(true);
    router.push('/?new-invoice');
  }

  function editForm(id: string) {
    const invoiceItem = invoiceDataSWR?.find((invoice) => invoice.id === id);
    console.log('editForm invoice item:', invoiceItem);
    setEditFormState(true);
    setHandleInput({
      streetAddressInputValue: invoiceItem?.sender.street || '',
      cityInputValue: invoiceItem?.sender.city || '',
      postalCodeInputValue: invoiceItem?.sender.postalCode || '',
      countryInputValue: invoiceItem?.sender.country || '',
      clientNameInputValue: invoiceItem?.client.name || '',
      clientEmailInputValue: invoiceItem?.client.email || '',
      clientStreetAddressInputValue: invoiceItem?.client.street || '',
      clientCityInputValue: invoiceItem?.client.city || '',
      clientPostalCodeInputValue: invoiceItem?.client.postalCode || '',
      clientCountryInputValue: invoiceItem?.client.country || '',
      projectDescriptionInputValue: invoiceItem?.description || ''
    });

    setDetailsInput({
      date: new Date(invoiceItem?.paymentDue || new Date()),
      paymentTerms: PaymentTermsEnum[`${invoiceItem?.paymentTerms || 'Net 1 Day'}`]
    });
    setItemCounter(invoiceItem?.items || []);
    setInvoiceFormVisiblity(true);
    router.push(`/${id}?edit`);
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

  function unmountForm(
    config: { navigateHome?: boolean; id?: string | undefined } = {
      navigateHome: false,
      id: undefined
    }
  ) {
    setHandleInput({
      streetAddressInputValue: formRefs.streetAddressInputRef.current?.value || '',
      cityInputValue: formRefs.cityInputRef.current?.value || '',
      postalCodeInputValue: formRefs.postalCodeInputRef.current?.value || '',
      countryInputValue: formRefs.countryInputRef.current?.value || '',
      clientNameInputValue: formRefs.clientNameInputRef.current?.value || '',
      clientEmailInputValue: formRefs.clientEmailInputRef.current?.value || '',
      clientStreetAddressInputValue: formRefs.clientStreetAddressInputRef.current?.value || '',
      clientCityInputValue: formRefs.clientCityInputRef.current?.value || '',
      clientPostalCodeInputValue: formRefs.clientPostalCodeInputRef.current?.value || '',
      clientCountryInputValue: formRefs.clientCountryInputRef.current?.value || '',
      projectDescriptionInputValue: formRefs.projectDescriptionInputRef.current?.value || ''
    });
    setInvoiceFormVisiblity(false);
    if (config.navigateHome || !editFormState) {
      router.push('/');
    }
    if (config.id) {
      router.push(`${config.id}`);
    }
    setEditFormState(false);
  }

  function clearForm(navigateHome = false) {
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
    if (navigateHome) {
      router.push('/');
    }
    setEditFormState(false);
  }

  function saveChanges(
    options: { draft?: boolean; id?: string | undefined } = { draft: false, id: undefined }
  ) {
    const invoiceItem = (invoiceDataSWR as InvoiceDetails[]).find(
      (invoice) => invoice.id === options.id
    );
    const newInvoice: InvoiceDetails = {
      id: invoiceItem ? invoiceItem.id : newIdTag(),
      createdAt: invoiceItem ? invoiceItem.createdAt : new Date().toISOString(),
      paymentDue: detailsInput.date.toISOString(),
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
    if (!invoiceItem && Array.isArray(invoiceDataSWR))
      mutate([...invoiceDataSWR, newInvoice], { revalidate: false });
    if (invoiceItem && Array.isArray(invoiceDataSWR)) {
      const newState = structuredClone(invoiceDataSWR);
      const invoiceItemIndex = newState.findIndex((invoice) => invoice.id === invoiceItem.id);
      newState.splice(invoiceItemIndex, 1, newInvoice);
      console.log(newInvoice);
      mutate(newState, { revalidate: false });
    }
    clearForm();
  }
  const formProps = {
    editFormState,
    formRefs,
    filterByStatus,
    setFilterByStatus,
    deleteInvoice,
    updateStatus,
    saveChanges,
    clearForm,
    mountForm,
    editForm,
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
    <Layout formProps={formProps} invoiceDataSWR={invoiceDataSWR ?? []}>
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
