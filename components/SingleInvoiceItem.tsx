import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { InvoiceDetails } from '../data/invoice-data';
import { ChevronRightSvg } from './IconComponents';

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

export default function SingleInvoiceItem(props: InvoiceDetails) {
  if (props.status === 'paid') {
    statusConfig.bg = 'bg-green-500/10';
    statusConfig.circleColor = 'bg-green-500';
    statusConfig.textColor = 'text-green-500';
    statusConfig.text = 'Paid';
  }
  if (props.status === 'pending') {
    statusConfig.bg = 'bg-yellow-500/10';
    statusConfig.circleColor = 'bg-yellow-500';
    statusConfig.textColor = 'text-yellow-600';
    statusConfig.text = 'Pending';
  }
  if (props.status === 'draft') {
    statusConfig.bg = 'bg-slate-500/10';
    statusConfig.circleColor = 'bg-slate-500';
    statusConfig.textColor = 'text-slate-600';
    statusConfig.text = 'Draft';
  }
  const amountDue = props.items.reduce(
    (sum, current) => {
      const itemAmount = parseInt(current.price) * parseInt(current.quantity);
      sum.total = sum.total + itemAmount;
      return sum;
    },
    { total: 0 }
  );
  const visualCurrency = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  }).format(amountDue.total / 100);

  const [currentTime, setCurrentTime] = useState(props.paymentDue);

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  useEffect(() => {
    setCurrentTime((prevState) => {
      return new Date(prevState).toLocaleDateString();
    });
  }, []);

  return (
    <li
      onClick={showDetailsHandler}
      tabIndex={0}
      className="group grid cursor-pointer grid-cols-2 items-center justify-between gap-y-1 rounded-lg bg-white p-6 text-sm text-slate-800 transition sm:grid-cols-5 lg:p-8 ">
      <p className="flex w-36 gap-1 font-bold">
        <span className="text-slate-300"># </span> {props.id.toLocaleUpperCase()}
      </p>
      <p className="text-right text-slate-500 sm:text-left">{props.client.name}</p>
      <p className="col-span-2 -mb-2 pt-4 text-slate-500 sm:col-span-1 sm:mb-0 sm:pt-0">
        Due {currentTime}
      </p>
      <p className="self-end text-xl font-bold sm:self-auto">{visualCurrency}</p>
      <div className="flex gap-4 justify-self-end pl-4">
        <div
          className={`col-span-3 flex w-32 items-center justify-center gap-3 rounded-lg ${statusConfig.bg} py-2`}>
          <span className={`flex h-2 w-2 rounded-full ${statusConfig.circleColor}`}></span>
          <p className={`font-bold ${statusConfig.textColor}`}>{statusConfig.text}</p>
        </div>
        <ChevronRightSvg
          classGroup="hidden lg:block group-hover:translate-x-1 transition h-8 w-8"
          className="fill-blue-600"
        />
      </div>
    </li>
  );
}
