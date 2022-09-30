import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import InvoiceList from '../components/InvoiceList';
import { AnimatePresence, motion } from 'framer-motion';
import { InvoiceDetails } from '../data/invoice-data';
import { inputFormStateProps } from '../types/InputFormTypes';
import { FilteredStatusType } from '../components/types';

export default function Home({
  filterByStatus,
  setFilterByStatus,
  filteredInvoiceDataSwr,
  invoiceDataSWR,
  mountNewInvoiceForm
}: {
  filterByStatus: FilteredStatusType;
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
  filteredInvoiceDataSwr: InvoiceDetails[];
  invoiceDataSWR: InvoiceDetails[];
  mountNewInvoiceForm: () => void;
} & inputFormStateProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/?new-invoice') {
      mountNewInvoiceForm();
    }
  }, [router.asPath]);
  return (
    <AnimatePresence>
      <motion.div
        key="formList"
        className="flex w-full flex-col gap-8 p-6 lg:max-w-4xl lg:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Header
          filterByStatus={filterByStatus}
          setFilterByStatus={setFilterByStatus}
          mountForm={mountNewInvoiceForm}
          invoiceItemLength={invoiceDataSWR?.length}
        />
        <InvoiceList invoiceData={filteredInvoiceDataSwr} />
      </motion.div>
    </AnimatePresence>
  );
}
