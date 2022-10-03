import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import GoBackHeader from '../components/GoBackHeader';
import Button from '../components/Button';
import StatusElement from '../components/StatusElement';
import ExistingForm from '../components/ExistingForm';
import { InvoiceIdProps } from '../types/propTypes';

export default function InvoiceId({
  invoiceDataSWR,
  deleteInvoice,
  updateInvoiceStatus,
  populateFormWithExisting,
  unmountForm
}: InvoiceIdProps) {
  const router = useRouter();
  const invoiceIdParam = router?.query?.invoiceID?.toString();
  const invoiceItem = invoiceDataSWR.find((invoice) => invoice.id === invoiceIdParam);

  return (
    <AnimatePresence>
      <motion.div
        key="formDetails"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex w-full max-w-4xl grow flex-col items-start px-4 pt-8 lg:p-12">
        <GoBackHeader onClick={() => unmountForm(null)} />
        <section className="mb-8 flex w-full items-center justify-between rounded-2xl bg-white p-6 dark:bg-slate-800 lg:p-8 ">
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
            <p className="text-slate-500 dark:text-slate-300">Status</p>
            <StatusElement status={invoiceItem?.status || 'pending'} />
          </div>
          <div className="hidden gap-3 lg:flex">
            <Button
              onClick={() => populateFormWithExisting(invoiceItem?.id || '')}
              label="Edit"
              style="light"
            />
            <Button
              onClick={() => deleteInvoice(invoiceItem?.id || '')}
              label="Delete"
              style="error"
            />
            <Button
              onClick={() => updateInvoiceStatus(invoiceItem?.id || '', 'paid')}
              label="Mark as Paid"
              style="primary"
            />
          </div>
        </section>
        <ExistingForm invoiceItem={invoiceItem} />
      </motion.div>
      <div className="flex w-full grow items-end pt-8 lg:hidden">
        <div className="flex w-full justify-center gap-3 bg-white py-4 px-4 text-sm dark:bg-slate-800">
          <Button
            onClick={() => populateFormWithExisting(invoiceItem?.id || '')}
            label="edit"
            style="light"
          />
          <Button
            onClick={() => deleteInvoice(invoiceItem?.id || '')}
            label="Delete"
            style="error"
          />
          <Button
            onClick={() => updateInvoiceStatus(invoiceItem?.id || '', 'paid')}
            label="Mark as Paid"
            style="primary"
          />
        </div>
      </div>
    </AnimatePresence>
  );
}
