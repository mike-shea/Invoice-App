import React from 'react';
import { useRouter } from 'next/router';
import { DetailsInputType, formRefsType, InputRefs, ItemCounterType } from '../components/types';
import { InvoiceDetails } from '../data/invoice-data';
import { ChevronLeftSvg } from '../components/IconComponents';

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
    <>
      <p className="col-span-2 font-bold">{props.itemName}</p>
      <p className="text-right text-slate-500">{props.quantity}</p>
      <p className="text-right">{visualCurrency(props.price)}</p>
      <p className="text-right">{visualCurrency(amountDue)}</p>
    </>
  );
}

export default function InvoiceId(props: {
  invoiceDataSWR: InvoiceDetails[];
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
  mountForm: () => void;
  unmountForm: () => void;
  saveChanges: (options?: { draft: boolean }) => void;
  formRefs: formRefsType;
}) {
  const router = useRouter();
  const invoiceIdParam = router.query.invoiceID;
  const invoiceItem = props.invoiceDataSWR.find((invoice) => invoice.id === invoiceIdParam);

  function goBack() {
    router.push('/');
  }
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

  return (
    <div className="flex w-full max-w-4xl flex-col items-start py-12">
      <section className="flex pb-4">
        <button onClick={goBack} className="group flex items-center gap-4 p-2">
          <ChevronLeftSvg className="fill-blue-500" />
          <p className="text-xl text-slate-400 transition group-hover:text-slate-500">Go Back</p>
        </button>
      </section>
      <section className="mb-8 flex w-full items-center justify-between rounded-2xl bg-white p-8">
        <div className="flex items-center gap-4">
          <p className="text-slate-500">Status</p>
          <div
            className={`col-span-3 flex w-32 items-center justify-center gap-3 rounded-lg ${statusConfig.bg} py-2`}>
            <span className={`flex h-2 w-2 rounded-full ${statusConfig.circleColor}`}></span>
            <p className={`font-bold ${statusConfig.textColor}`}>{statusConfig.text}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={props.clearForm}
            className="rounded-full bg-slate-100 py-4 px-7 font-semibold text-slate-500/70">
            Edit
          </button>
          <button
            onClick={() => props.deleteInvoice(invoiceItem?.id || '')}
            className="rounded-full bg-red-400 py-4 px-7 font-semibold text-white">
            Delete
          </button>
          <button
            onClick={() => props.updateStatus(invoiceItem?.id || '', 'paid')}
            className="rounded-full bg-blue-500 py-4 px-7 font-semibold text-white">
            Mark as Paid
          </button>
        </div>
      </section>
      <section className="w-full rounded-2xl bg-white p-8">
        <div className="flex w-full justify-between pb-12">
          <div className="flex flex-col">
            <p className="pb-2 text-2xl font-bold text-slate-300">
              # <span className="text-slate-800">{invoiceItem?.id.toLocaleUpperCase()}</span>
            </p>
            <p className="text-xl text-slate-400">{invoiceItem?.description}</p>
          </div>
          <div className="flex flex-col text-right text-base text-slate-400">
            <p>{invoiceItem?.sender.street}</p>
            <p>{invoiceItem?.sender.city}</p>
            <p>{invoiceItem?.sender.postalCode}</p>
            <p>{invoiceItem?.sender.country}</p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <p className="text-slate-400">Invoice Date</p>
              <p className="text-2xl font-bold text-slate-700">{invoiceItem?.createdAt}</p>
            </div>
            <div>
              <p className="text-slate-400">Payment Due</p>
              <p className="text-2xl font-bold text-slate-700">{invoiceItem?.paymentDue}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-slate-400">Bill To</p>
            <p className="pb-4 text-2xl font-bold text-slate-700">{invoiceItem?.client.name}</p>
            <div className="text-slate-400">
              <p>{invoiceItem?.client.street}</p>
              <p>{invoiceItem?.client.city}</p>
              <p>{invoiceItem?.client.postalCode}</p>
              <p>{invoiceItem?.client.country}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-slate-400">Send To</p>
            <p className="pb-4 text-2xl font-bold text-slate-700">{invoiceItem?.client.email}</p>
          </div>
        </div>
        <div className="mt-12 w-full overflow-hidden rounded-2xl">
          <div className="grid grid-cols-5 bg-slate-100 p-8">
            <p className="col-span-2 pb-4 text-slate-500">Item Name</p>
            <p className="pb-4 text-right text-slate-500">QTY.</p>
            <p className="pb-4 text-right text-slate-500">Price</p>
            <p className="pb-4 text-right text-slate-500">Total</p>
            {invoiceItem?.items.map((item) => (
              <InvoiceItemTable
                key={item.id}
                itemName={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </div>
          <div className="flex items-center justify-between bg-slate-600 p-8 text-white">
            <p>Amount Due</p>
            <p className="text-4xl font-bold">
              {visualCurrency(amountDue?.total.toString() || '0')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
