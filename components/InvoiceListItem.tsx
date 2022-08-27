import React from 'react';
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

export default function SingleInvoiceItem(props: {
  id: string;
  paymentDueDate: string;
  clientName: string;
  amountDue: number;
  status: 'paid' | 'pending' | 'draft';
}) {
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
  const visualCurrency = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  }).format(props.amountDue / 100);

  const visualDate = new Date(props.paymentDueDate).toLocaleDateString();
  return (
    <li
      tabIndex={0}
      className="group flex cursor-pointer items-center justify-between rounded-lg bg-white px-10 py-8 transition ">
      <p className="flex w-36 font-bold">{props.id.toLocaleUpperCase()}</p>
      <div className="grid w-full grid-cols-3 items-center gap-4 pl-6 text-slate-800">
        <p className="text-slate-500">Due {visualDate}</p>
        <p className="text-slate-500">{props.clientName}</p>
        <p className="text-2xl font-bold">{visualCurrency}</p>
      </div>
      <div className="flex gap-4 pl-4">
        <div
          className={`col-span-3 flex w-32 items-center justify-center gap-3 rounded-lg ${statusConfig.bg} py-2`}>
          <span className={`flex h-2 w-2 rounded-full ${statusConfig.circleColor}`}></span>
          <p className={`font-bold ${statusConfig.textColor}`}>{statusConfig.text}</p>
        </div>
        <ChevronRightSvg
          classGroup="group-hover:translate-x-1 transition h-8 w-8"
          className="fill-blue-600"
        />
      </div>
    </li>
  );
}
