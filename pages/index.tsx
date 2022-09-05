import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import InvoiceList from '../components/InvoiceList';
import {
  DetailsInputType,
  FilteredStatusType,
  formRefsType,
  InputRefs,
  ItemCounterType
} from '../components/types';
import { InvoiceDetails } from '../data/invoice-data';

export default function Home(props: {
  filterByStatus: FilteredStatusType;
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
  filteredInvoiceDataSwr: InvoiceDetails[];
  invoiceDataSWR: InvoiceDetails[];
  detailsInput: DetailsInputType;
  setDetailsInput: React.Dispatch<React.SetStateAction<DetailsInputType>>;
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
  setInvoiceFormVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  clearForm: () => void;
  mountForm: () => void;
  unmountForm: () => void;
  saveChanges: (options?: { draft: boolean }) => void;
  formRefs: formRefsType;
}) {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/?new-invoice') {
      props.setInvoiceFormVisiblity(true);
    }
  }, [router.asPath]);
  return (
    <div className="flex w-full flex-col lg:max-w-4xl lg:p-12">
      <Header
        filterByStatus={props.filterByStatus}
        setFilterByStatus={props.setFilterByStatus}
        mountForm={props.mountForm}
        invoiceItemLength={props.invoiceDataSWR?.length}
      />
      <InvoiceList invoiceData={props.filteredInvoiceDataSwr} />
    </div>
  );
}
