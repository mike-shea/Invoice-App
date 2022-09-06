import React from 'react';
import { motion } from 'framer-motion';
import { PaymentTermsEnum } from './types';
import type { InputRefs, ItemCounterType, formRefsType, DetailsInputType } from './types';
import InvoiceFormFieldSetCurrent from './InvoiceFormFieldSetCurrent';
import InvoiceFormFieldSetClient from './InvoiceFormFieldSetClient';
import InvoiceFormFieldSetItems from './InvoiceFormFieldSetItems';
import DatePicker from 'react-datepicker';
import InvoiceFormInputElement from './InvoiceFormInputElement';
import GoBackHeader from './GoBackHeader';

export default function InvoiceForm(props: {
  detailsInput: DetailsInputType;
  setDetailsInput: React.Dispatch<React.SetStateAction<DetailsInputType>>;
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  clearForm: () => void;
  unmountForm: () => void;
  saveChanges: (options?: { draft: boolean }) => void;
  formRefs: formRefsType;
}) {
  const PaymentTermsEnumToOptions = (
    Object.keys(PaymentTermsEnum) as Array<keyof typeof PaymentTermsEnum>
  ).map((item) => <option key={item}>{PaymentTermsEnum[item]}</option>);

  const fieldSetCurrentProps = {
    handleInput: props.handleInput,
    streetAddressInputRef: props.formRefs.streetAddressInputRef,
    cityInputRef: props.formRefs.cityInputRef,
    postalCodeInputRef: props.formRefs.postalCodeInputRef,
    countryInputRef: props.formRefs.countryInputRef
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
    <div className="relative flex">
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
        className="absolute top-0 z-20 h-screen w-full overflow-hidden bg-white md:w-3/5 md:pl-32 lg:rounded-2xl">
        <div className="flex h-full items-start justify-center overflow-y-scroll scroll-smooth md:pr-12">
          <div className="max-w-lg px-8 py-8 lg:py-12">
            <GoBackHeader unmountForm={props.unmountForm} />
            <h2 className="pb-4 text-3xl font-bold text-slate-700 lg:pb-12">New Invoice</h2>
            <form>
              <InvoiceFormFieldSetCurrent {...fieldSetCurrentProps} />
              <InvoiceFormFieldSetClient {...fieldSetClientProps} />
              <fieldset>
                <legend className="pb-2 pt-8 font-bold text-blue-600">Details</legend>
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="pb-2 text-slate-500">
                    <label>Invoice Date</label>
                    <DatePicker
                      selected={props.detailsInput.date}
                      onChange={(date: Date) =>
                        props.setDetailsInput((prevState) => {
                          return {
                            date,
                            paymentTerms: prevState.paymentTerms
                          };
                        })
                      }
                      customInput={
                        <input className='text-slate-900" w-full rounded-lg border border-slate-300 p-2' />
                      }
                    />
                  </div>
                  <p className="pb-2 text-slate-500">
                    <label>Payment Terms</label>
                    <select
                      defaultValue={props.detailsInput.paymentTerms}
                      onChange={(e) => {
                        props.setDetailsInput((prevState) => {
                          return {
                            date: prevState.date,
                            paymentTerms: e.target.value as PaymentTermsEnum
                          };
                        });
                      }}
                      className="w-full rounded-lg border border-slate-300 p-2 text-slate-900">
                      {PaymentTermsEnumToOptions}
                    </select>
                  </p>
                </div>
                <InvoiceFormInputElement
                  prevData={props.handleInput.projectDescriptionInputRef}
                  inputRef={props.formRefs.projectDescriptionInputRef}
                  placeholder="e.g. Graphic Design Service"
                  label="Project Description"
                />
              </fieldset>
              <InvoiceFormFieldSetItems {...fieldSetItemProps} />
            </form>
            <button
              onClick={addNewItemClickHandler}
              type="button"
              className="mt-10 w-full rounded-full bg-slate-100 py-4 font-semibold text-slate-500 transition hover:bg-slate-200">
              + Add New Item
            </button>
            <div className="flex justify-between pt-12">
              <button
                onClick={props.clearForm}
                className="rounded-full bg-slate-100 py-4 px-7 font-semibold text-slate-500">
                Discard
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => props.saveChanges({ draft: true })}
                  className="rounded-full bg-slate-600 py-4 px-7 font-semibold text-slate-200">
                  Save as Draft
                </button>
                <button
                  onClick={() => props.saveChanges()}
                  className="rounded-full bg-blue-500 py-4 px-7 font-semibold text-white">
                  Save &amp; Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
