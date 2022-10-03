import React from 'react';
import { motion } from 'framer-motion';
import GoBackHeader from './GoBackHeader';
import useMediaQuery from '../hooks/useMediaQuery';

import { useRouter } from 'next/router';
import InvoiceFormInputs from './InvoiceFormInputs';
import InvoiceFormHeader from './InvoiceFormHeader';
import Button from './Button';
import { InvoiceFormProps } from '../types/propTypes';

export default function InvoiceForm({
  userInfo,
  clientInfo,
  details,
  items,
  functions,
  unmountForm,
  saveInvoice
}: InvoiceFormProps) {
  const minWidthLg = useMediaQuery('(min-width: 1024px)');

  const router = useRouter();
  const invoiceIdParam = router?.query?.invoiceID?.toString();

  const windowSpeed = document.body.clientHeight / window.innerHeight;

  const formVariants = minWidthLg
    ? { exit: { translateX: -100, transition: { ease: 'easeIn' }, opacity: 0 } }
    : { exit: { translateX: '-100%', opacity: 0, transition: { delay: 0.5 * windowSpeed } } };

  return (
    <>
      <motion.div
        exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.15 }, pointerEvents: 'none' }}
        onClick={() => unmountForm(invoiceIdParam || null)}
        className="fixed z-20 min-h-screen w-full animate-darken bg-slate-800/50 will-change-[opacity] dark:bg-[#02030c]/70"></motion.div>

      <motion.div
        variants={formVariants}
        initial={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        exit="exit"
        className="absolute top-24 z-40 flex min-h-screen w-full overflow-hidden bg-white dark:bg-slate-900 lg:absolute lg:left-16 lg:top-0 lg:z-20 lg:h-screen lg:w-auto lg:rounded-r-2xl lg:pl-8">
        <div className="flex h-full grow items-start justify-center scroll-smooth lg:overflow-y-scroll lg:px-4">
          <div className="max-w-lg px-8 py-8 lg:max-w-xl">
            <GoBackHeader onClick={() => unmountForm(invoiceIdParam || null)} />
            <InvoiceFormHeader invoiceIdParam={invoiceIdParam || null} />
            <InvoiceFormInputs
              userInfo={userInfo}
              clientInfo={clientInfo}
              details={details}
              items={items}
            />
            <button
              onClick={functions.addNewItem}
              type="button"
              className="mt-10 w-full rounded-full bg-slate-100 py-4 font-semibold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/70">
              + Add New Item
            </button>
            <div className="flex justify-between pt-12 text-sm">
              {invoiceIdParam ? (
                <div className="flex grow justify-end gap-1 lg:gap-3">
                  <Button
                    onClick={() => unmountForm(invoiceIdParam)}
                    label="Cancel"
                    style="light"
                  />
                  <Button
                    onClick={() => saveInvoice(invoiceIdParam, 'pending')}
                    label="Save"
                    style="primary"
                  />
                </div>
              ) : (
                <>
                  <Button onClick={() => unmountForm(null)} label="Discard" style="light" />
                  <div className="flex gap-1 lg:gap-3">
                    <Button
                      onClick={() => saveInvoice(null, 'draft')}
                      label="Save Draft"
                      style="dark"
                    />
                    <Button
                      onClick={() => saveInvoice(null, 'pending')}
                      label="Save"
                      style="primary"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
