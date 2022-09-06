import React, { useEffect, useMemo, useState } from 'react';
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
  const [itemPriceInput, setItemPriceInput] = useState<string>(currentItem.price.toString() || '0');
  const [itemQuantityInput, setItemQuantityInput] = useState<string>(
    currentItem.quantity.toString() || '0'
  );
  function totalAmount() {
    return (parseInt(itemPriceInput) || 0) * (parseInt(itemQuantityInput) || 0);
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
    <div className="grid w-full grid-cols-7 gap-x-4">
      <p className="col-span-7 pb-2 text-slate-500 lg:col-span-3">
        <label>Name</label>
        <input
          onChange={(e) => setItemNameInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-2 text-slate-900"
          type="text"
          value={itemNameInput}
        />
      </p>
      <p className="col-span-2 pb-2 text-slate-500 lg:col-span-1">
        <label>Quantity</label>
        <input
          onChange={(e) => setItemQuantityInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-2 text-slate-900"
          type="text"
          value={itemQuantityInput}
        />
      </p>
      <p className="col-span-2 pb-2 text-slate-500 lg:col-span-1">
        <label>Price</label>
        <input
          onChange={(e) => setItemPriceInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-2 text-slate-900"
          type="text"
          value={itemPriceInput}
        />
      </p>
      <div className="col-span-2 pb-2 text-slate-500 lg:col-span-1">
        <label>Total</label>
        <p className="w-full p-2 text-slate-900">{totalAmount()}</p>
      </div>
      <div className="pb-2 text-slate-500">
        <label className="invisible">Delete</label>
        <p className="w-full p-2 text-slate-900">
          <button
            onClick={() => {
              props.setItemCounter((prevState) => {
                const newState = [...prevState];
                return newState.filter((item) => item.id !== props.id);
              });
            }}
            type="button">
            <TrashCanSvg />
          </button>
        </p>
      </div>
    </div>
  );
}
