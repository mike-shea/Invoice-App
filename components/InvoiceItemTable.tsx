import { visualCurrency } from './helpers';

export default function InvoiceItemTable(props: {
  itemName: string;
  quantity: string;
  price: string;
}) {
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
