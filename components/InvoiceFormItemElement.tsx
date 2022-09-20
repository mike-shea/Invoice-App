import React, { useEffect, useMemo, useState, useRef } from 'react';
import { TrashCanSvg } from './IconComponents';

interface itemCounter {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

export default function InvoiceFormItemElement(props: {
  invoiceFormVisbility: boolean;
  id: string;
  itemCounter: itemCounter[];
  setItemCounter: React.Dispatch<React.SetStateAction<itemCounter[]>>;
}) {
  const currentItemIndex = useMemo(() => {
    return props.itemCounter.findIndex((item) => item.id === props.id);
  }, [props.id, props.itemCounter]);

  const currentItem = props.itemCounter[currentItemIndex];

  const [itemNameInput, setItemNameInput] = useState(currentItem.name || '');
  const [itemPriceInput, setItemPriceInput] = useState<string>(currentItem.price || '0');
  const [itemQuantityInput, setItemQuantityInput] = useState<string>(
    currentItem.quantity.toString() || '0'
  );

  const priceRef = useRef<HTMLInputElement>(null);

  function handleCurrency(e: React.FocusEvent<HTMLInputElement, Element>) {
    const value = e.target.value;
    const ifValueHasDecimal = value.match(/[.]/g);
    if (ifValueHasDecimal !== null && ifValueHasDecimal.length === 1) {
      const splitValues = value.split('.');
      if (splitValues[1].length < 2) {
        splitValues[1] = splitValues[1].padEnd(2, '0');
      }
      if (splitValues[1].length > 2) {
        splitValues[1] = splitValues[1].substring(0, 2);
      }
      return splitValues.join('');
    }
    if (ifValueHasDecimal === null) {
      return (parseInt(value) * 100).toString();
    }
  }

  function handlePriceOnBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    const amount = handleCurrency(e);
    setItemPriceInput(amount ?? '0');
  }

  function totalAmount() {
    const amount = (parseInt(itemPriceInput) / 100 || 0) * (parseInt(itemQuantityInput) || 0);
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
  }

  useEffect(() => {
    if (parseInt(itemQuantityInput) > 0) {
      props.setItemCounter((prevState) => {
        const newState = structuredClone(prevState);
        if (newState[currentItemIndex]) {
          newState[currentItemIndex].quantity = itemQuantityInput;
        }
        return newState;
      });
    }
  }, [itemQuantityInput]);

  useEffect(() => {
    if (itemNameInput.length > 0) {
      props.setItemCounter((prevState) => {
        const newState = [...prevState];
        if (newState[currentItemIndex]) {
          newState[currentItemIndex].name = itemNameInput;
        }
        return newState;
      });
    }
  }, [itemNameInput]);

  useEffect(() => {
    if (parseInt(itemPriceInput) > 0) {
      props.setItemCounter((prevState) => {
        const newState = [...prevState];
        if (newState[currentItemIndex]) {
          newState[currentItemIndex].price = itemPriceInput;
        }
        return newState;
      });
    }
  }, [itemPriceInput]);

  return (
    <li className="flex w-full flex-wrap gap-x-4 gap-y-2 pb-2 text-slate-500 lg:flex-nowrap">
      <div className="flex w-full flex-col lg:w-auto lg:grow">
        <label htmlFor="nameinput">Name</label>
        <input
          id="nameinput"
          onChange={(e) => setItemNameInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          type="text"
          value={itemNameInput}
        />
      </div>
      <div className="flex w-12 grow-0 flex-col">
        <label htmlFor="quantityinput">Qty.</label>
        <input
          id="quantityinput"
          onChange={(e) => setItemQuantityInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          type="text"
          value={itemQuantityInput}
        />
      </div>
      <div className="flex w-auto grow flex-col md:w-36">
        <label htmlFor="priceinput">Price</label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-slate-400 sm:text-sm">$</span>
          </div>
          <input
            onBlur={handlePriceOnBlur}
            ref={priceRef}
            type="text"
            name="priceinput"
            id="priceinput"
            defaultValue={parseInt(itemPriceInput) / 100}
            className="w-full rounded-lg border border-slate-300 p-2 pl-7 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          />
        </div>
      </div>
      <div className="hidden md:block md:w-20">
        <label>Total</label>
        <p className="w-24 truncate py-2 text-slate-500 dark:text-slate-300">{totalAmount()}</p>
      </div>
      <div className="flex w-6 flex-col items-center gap-1 ">
        <label className="invisible">Delete</label>
        <button
          onClick={() => {
            props.setItemCounter((prevState) => {
              const newState = [...prevState];
              return newState.filter((item) => item.id !== props.id);
            });
          }}
          type="button">
          <TrashCanSvg
            classGroup="group"
            className="transition group-hover:fill-red-500 dark:fill-slate-500"
          />
        </button>
      </div>
    </li>
  );
}
