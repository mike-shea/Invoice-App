import React from 'react';
import { useRouter } from 'next/router';
import { DetailsInputType, formRefsType, InputRefs, ItemCounterType } from '../components/types';
import { InvoiceDetails } from '../data/invoice-data';
import GoBackHeader from '../components/GoBackHeader';
import { AnimatePresence, motion } from 'framer-motion';

const statusConfig: {
  bg: string;
  circleColor: string;
  textColor: string;
  text: string;
} = {
  bg: '',
  circleColor: '',
  textColor: '',
  text: ''
};

function visualCurrency(amount: string) {
  return Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  }).format(parseInt(amount) / 100);
}

function InvoiceItemTable(props: { itemName: string; quantity: string; price: string }) {
  const amountDue = (parseInt(props.price) * parseInt(props.quantity)).toString();

  return (
    <div className="flex w-full flex-wrap text-slate-600 dark:text-slate-300 lg:grid lg:grid-cols-5">
      <p className="w-full font-bold dark:font-medium lg:col-span-2 lg:block">{props.itemName}</p>
      <p className="col-span-1 text-slate-400  dark:text-slate-300 lg:text-right lg:text-slate-600">
        {props.quantity}
        <span className="lg:hidden"> x </span>
      </p>
      <p className="col-span-1 pl-1 text-slate-400  dark:text-slate-300 lg:pl-1 lg:text-right lg:text-slate-600">
        {visualCurrency(props.price)}
      </p>
      <p className="col-span-3 grow text-right text-slate-600 dark:text-slate-300 lg:col-span-1">
        {visualCurrency(amountDue)}
      </p>
    </div>
  );
}

export default function InvoiceId(props: {
  invoiceDataSWR: InvoiceDetails[] | undefined;
  detailsInput: DetailsInputType;
  setDetailsInput: React.Dispatch<React.SetStateAction<DetailsInputType>>;
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
  setInvoiceFormVisiblity: React.Dispatch<React.SetStateAction<boolean>>;
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  deleteInvoice: (invoiceId: string) => void;
  updateStatus: (invoiceId: string, statusUpdate: 'paid' | 'draft' | 'pending') => void;
  clearForm: () => void;
  editForm: (id: string) => void;
  mountForm: () => void;
  unmountForm: () => void;
  saveChanges: (options?: { draft: boolean }) => void;
  formRefs: formRefsType;
}) {
  const router = useRouter();
  const invoiceIdParam = router.query.invoiceID;
  const invoiceItem = props.invoiceDataSWR?.find((invoice) => invoice.id === invoiceIdParam);

  if (invoiceItem?.status === 'paid') {
    statusConfig.bg = 'bg-green-500/10';
    statusConfig.circleColor = 'bg-green-500';
    statusConfig.textColor = 'text-green-500';
    statusConfig.text = 'Paid';
  }
  if (invoiceItem?.status === 'pending') {
    statusConfig.bg = 'bg-yellow-500/10';
    statusConfig.circleColor = 'bg-yellow-500';
    statusConfig.textColor = 'text-yellow-600';
    statusConfig.text = 'Pending';
  }
  if (invoiceItem?.status === 'draft') {
    statusConfig.bg = 'bg-slate-500/10';
    statusConfig.circleColor = 'bg-slate-500';
    statusConfig.textColor = 'text-slate-600';
    statusConfig.text = 'Draft';
  }

  const amountDue = invoiceItem?.items.reduce(
    (sum, current) => {
      const itemAmount = parseInt(current.price) * parseInt(current.quantity);
      sum.total = sum.total + itemAmount;
      return sum;
    },
    { total: 0 }
  );
  console.log(invoiceItem?.createdAt);
  return (
    <AnimatePresence>
      <motion.div
        key="formDetails"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex w-full max-w-4xl grow flex-col items-start px-4 pt-8 lg:p-12">
        <GoBackHeader unmountForm={props.unmountForm} />
        <section className="mb-8 flex w-full items-center justify-between rounded-2xl bg-white p-6 dark:bg-slate-800 lg:p-8 ">
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
            <p className="text-slate-500 dark:text-slate-300">Status</p>
            <div
              className={`col-span-3 flex w-32 items-center justify-center gap-3 rounded-lg ${statusConfig.bg} py-2`}>
              <span className={`flex h-2 w-2 rounded-full ${statusConfig.circleColor}`}></span>
              <p className={`font-bold ${statusConfig.textColor}`}>{statusConfig.text}</p>
            </div>
          </div>
          <div className="hidden gap-3 lg:flex">
            <button
              onClick={() => props.editForm(invoiceItem?.id || '')}
              className="rounded-full bg-slate-100 py-4 px-7 font-semibold text-slate-500/70 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600/70">
              Edit
            </button>
            <button
              onClick={() => props.deleteInvoice(invoiceItem?.id || '')}
              className="rounded-full bg-red-400 py-4 px-7 font-semibold text-white transition hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-700">
              Delete
            </button>
            <button
              onClick={() => props.updateStatus(invoiceItem?.id || '', 'paid')}
              className="rounded-full bg-blue-500 py-4 px-7 font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
              Mark as Paid
            </button>
          </div>
        </section>
        <section className="w-full rounded-2xl bg-white p-8 dark:bg-slate-800">
          <div className="flex w-full flex-col gap-y-4 pb-6 lg:flex-row lg:justify-between lg:pb-12">
            <div className="flex flex-col lg:gap-2">
              <p className="text-2xl font-bold text-slate-300">
                #{' '}
                <span className="text-slate-700 dark:text-slate-200">
                  {invoiceItem?.id.toLocaleUpperCase()}
                </span>
              </p>
              <p className="text-slate-600 lg:text-xl lg:text-slate-400">
                {invoiceItem?.description}
              </p>
            </div>
            <div className="flex flex-col text-base text-slate-400 lg:text-right">
              <p>{invoiceItem?.sender.street}</p>
              <p>{invoiceItem?.sender.city}</p>
              <p>{invoiceItem?.sender.postalCode}</p>
              <p>{invoiceItem?.sender.country}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-4">
              <div>
                <p className="text-slate-400">Invoice Date</p>
                <p className="text-xl font-bold text-slate-700 dark:font-medium dark:text-slate-300 lg:text-2xl">
                  {invoiceItem?.createdAt &&
                    new Date(invoiceItem?.createdAt).toLocaleDateString('en-GB')}
                </p>
              </div>
              <div>
                <p className="text-slate-400">Payment Due</p>
                <p className="text-xl font-bold text-slate-700 dark:font-medium dark:text-slate-300 lg:text-2xl">
                  {invoiceItem?.paymentDue &&
                    new Date(invoiceItem?.paymentDue).toLocaleDateString('en-GB')}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-400">Bill To</p>
              <p className="pb-4 text-xl font-bold text-slate-700 dark:font-medium dark:text-slate-300 lg:text-2xl">
                {invoiceItem?.client.name}
              </p>
              <div className="text-slate-400">
                <p>{invoiceItem?.client.street}</p>
                <p>{invoiceItem?.client.city}</p>
                <p>{invoiceItem?.client.postalCode}</p>
                <p>{invoiceItem?.client.country}</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col pt-6 lg:col-span-1 lg:pt-0">
              <p className="text-slate-400">Send To</p>
              <p className="w-full truncate pb-4 text-2xl font-bold text-slate-700 dark:font-medium dark:text-slate-300">
                {invoiceItem?.client.email}
              </p>
            </div>
          </div>
          <div className="mt-4 w-full overflow-hidden rounded-2xl lg:mt-12">
            <div className="flex flex-col gap-y-4 bg-slate-100 p-6 dark:bg-slate-700/30 lg:p-8">
              <div className="hidden text-right text-slate-500 dark:text-slate-500 lg:grid lg:grid-cols-5 lg:gap-y-0">
                <p className="col-span-2 text-left">Item Name</p>
                <p>QTY.</p>
                <p>Price</p>
                <p>Total</p>
              </div>

              {invoiceItem?.items.map((item) => (
                <InvoiceItemTable
                  key={item.id}
                  itemName={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            </div>
            <div className="flex items-center justify-between bg-slate-600 p-6 text-white dark:bg-slate-900/50 lg:p-8">
              <p className="dark:text-slate-400">Amount Due</p>
              <p className="text-xl font-bold lg:text-4xl">
                {visualCurrency(amountDue?.total.toString() || '0')}
              </p>
            </div>
          </div>
        </section>
      </motion.div>
      <div className="flex w-full grow items-end pt-8 lg:hidden">
        <div className="flex w-full justify-center gap-3 bg-white py-4 px-4 text-sm">
          <button
            onClick={() => props.editForm(invoiceItem?.id || '')}
            className="rounded-full bg-slate-100 py-3 px-5 font-semibold text-slate-500/70 transition hover:bg-slate-200 hover:text-slate-500">
            Edit
          </button>
          <button
            onClick={() => props.deleteInvoice(invoiceItem?.id || '')}
            className="rounded-full bg-red-400 py-3 px-5 font-semibold text-white transition hover:bg-red-500">
            Delete
          </button>
          <button
            onClick={() => props.updateStatus(invoiceItem?.id || '', 'paid')}
            className="rounded-full bg-blue-500 py-3 px-5 font-semibold text-white transition hover:bg-blue-600">
            Mark as Paid
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}
