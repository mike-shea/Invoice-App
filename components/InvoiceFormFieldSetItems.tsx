import React from 'react';
import InvoiceFormItemElement from './InvoiceFormItemElement';
import type { InputRefs, ItemCounterType } from './types';

export default function InvoiceFormFieldSetItems(props: {
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
}) {
  return (
    <fieldset>
      <legend className=" pt-8 pb-2 font-bold text-blue-600">Items to Add</legend>
      <ul className="flex flex-col gap-y-8 ">
        {props.itemCounter.map((item) => {
          return (
            <InvoiceFormItemElement
              invoiceFormVisbility={props.invoiceFormVisbility}
              itemCounter={props.itemCounter}
              setItemCounter={props.setItemCounter}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </ul>
    </fieldset>
  );
}
