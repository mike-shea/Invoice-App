import React from 'react';
import { motion } from 'framer-motion';
import type { InputRefs, ItemCounterType, formRefsType } from './types';
import InvoiceFormFieldSetCurrent from './InvoiceFormFieldSetCurrent';
import InvoiceFormFieldSetClient from './InvoiceFormFieldSetClient';
import InvoiceFormFieldSetItems from './InvoiceFormFieldSetItems';

export default function InvoiceForm(props: {
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  unmountForm: () => void;
  formRefs: formRefsType;
}) {
  const fieldSetCurrentProps = {
    handleInput: props.handleInput,
    streetAddressInputRef: props.formRefs.streetAddressInputRef,
    cityInputRef: props.formRefs.cityInputRef,
    postalCodeInputRef: props.formRefs.postalCodeInputRef,
    countryInputRef: props.formRefs.countryInputRef,
    companyInputRef: props.formRefs.companyInputRef
  };

  const fieldSetClientProps = {
    handleInput: props.handleInput,
    clientNameInputRef: props.formRefs.clientNameInputRef,
    clientEmailInputRef: props.formRefs.clientEmailInputRef,
    clientStreetAddressInputRef: props.formRefs.clientStreetAddressInputRef,
    clientCityInputRef: props.formRefs.clientCityInputRef,
    clientPostalCodeInputRef: props.formRefs.clientPostalCodeInputRef,
    clientCountryInputRef: props.formRefs.clientCountryInputRef
  };

  const fieldSetItemProps = {
    itemCounter: props.itemCounter,
    setItemCounter: props.setItemCounter,
    handleInput: props.handleInput,
    invoiceFormVisbility: props.invoiceFormVisbility
  };

  function addNewItemClickHandler() {
    props.setItemCounter((prevState) => {
      const newState = [...prevState];
      newState.push({
        id: `itemLog-${Math.floor(Math.random() * 10000)}`,
        name: '',
        quantity: '0',
        price: '0'
      });
      return newState;
    });
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: 'none' }}
        onClick={props.unmountForm}
        className="fixed h-screen w-full bg-slate-800/50"></motion.section>

      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        exit={{ x: -725 }}
        className="fixed h-screen w-3/5 overflow-hidden rounded-2xl bg-slate-100 pl-32">
        <div className="flex h-full items-start justify-center overflow-y-scroll scroll-smooth pr-12">
          <div className="max-w-lg py-12 ">
            <h2 className="pb-12 text-3xl font-bold">New Invoice</h2>
            <form>
              <InvoiceFormFieldSetCurrent {...fieldSetCurrentProps} />
              <InvoiceFormFieldSetClient {...fieldSetClientProps} />
              <InvoiceFormFieldSetItems {...fieldSetItemProps} />
            </form>
            <button
              onClick={addNewItemClickHandler}
              type="button"
              className="mt-10 w-full rounded-full bg-slate-200/50 py-5 font-semibold text-slate-500 transition hover:bg-slate-200">
              + Add New Item
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
