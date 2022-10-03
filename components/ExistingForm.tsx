import { InvoiceDetails } from '../data/invoice-data';
import { amountDue, visualCurrency } from './helpers';
import InvoiceItemTable from './InvoiceTable';

export default function ExistingForm({ invoiceItem }: { invoiceItem: InvoiceDetails | undefined }) {
  return (
    <section className="w-full rounded-2xl bg-white p-8 dark:bg-slate-800">
      <div className="flex w-full flex-col gap-y-4 pb-6 lg:flex-row lg:justify-between lg:pb-12">
        <div className="flex flex-col lg:gap-2">
          <p className="text-2xl font-bold text-slate-300">
            #{' '}
            <span className="text-slate-700 dark:text-slate-200">
              {invoiceItem?.id.toLocaleUpperCase()}
            </span>
          </p>
          <p className="text-slate-600 lg:text-xl lg:text-slate-400">{invoiceItem?.description}</p>
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
            {visualCurrency(amountDue(invoiceItem?.items || [])?.total.toString() || '0')}
          </p>
        </div>
      </div>
    </section>
  );
}
