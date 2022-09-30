import React from 'react';
import DatePicker from 'react-datepicker';
import { Details } from '../types/InputFormTypes';
import { PaymentTermsEnum } from './types';

export default function DateInput(details: Details) {
  const PaymentTermsEnumToOptions = (
    Object.keys(PaymentTermsEnum) as Array<keyof typeof PaymentTermsEnum>
  ).map((item) => <option key={item}>{PaymentTermsEnum[item]}</option>);

  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <div className="pb-2 text-slate-500">
        <label>Invoice Date</label>
        <DatePicker
          selected={details.state.date}
          onChange={(date: Date) => details.setState.setDate(date)}
          customInput={
            <input className="w-full cursor-pointer rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200" />
          }
        />
      </div>
      <p className="pb-3 text-slate-500">
        <label className="pb-1">Payment Terms</label>
        <select
          value={details.state.paymentTerms}
          onChange={(e) => details.setState.setPaymentTerms(e.target.value as PaymentTermsEnum)}
          className="w-full cursor-pointer rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {PaymentTermsEnumToOptions}
        </select>
      </p>
    </div>
  );
}
