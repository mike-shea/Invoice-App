import React from 'react';
import { motion } from 'framer-motion';
import { PaymentTermsEnum, unMountFormConfig } from './types';
import type { InputRefs, ItemCounterType, formRefsType, DetailsInputType } from './types';
import InvoiceFormFieldSetCurrent from './InvoiceFormFieldSetCurrent';
import InvoiceFormFieldSetClient from './InvoiceFormFieldSetClient';
import InvoiceFormFieldSetItems from './InvoiceFormFieldSetItems';
import DatePicker from 'react-datepicker';
import InvoiceFormInputElement from './InvoiceFormInputElement';
import GoBackHeader from './GoBackHeader';
import useMediaQuery from '../hooks/useMediaQuery';

import { useRouter } from 'next/router';

export default function InvoiceForm(props: {
  detailsInput: DetailsInputType;
  setDetailsInput: React.Dispatch<React.SetStateAction<DetailsInputType>>;
  handleInput: InputRefs;
  invoiceFormVisbility: boolean;
  itemCounter: ItemCounterType[];
  setItemCounter: React.Dispatch<React.SetStateAction<ItemCounterType[]>>;
  clearForm: () => void;
  unmountForm: (config?: unMountFormConfig) => void;
  saveChanges: (options?: { draft?: boolean; id?: string | undefined }) => void;
  formRefs: formRefsType;
  editFormState: boolean;
}) {
  const minWidthLg = useMediaQuery('(min-width: 1024px)');
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

  const router = useRouter();
  const invoiceIdParam = router.query.invoiceID;

  const windowSpeed = document.body.clientHeight / window.innerHeight;

  const formVariants = minWidthLg
    ? { exit: { translateX: -100, transition: { ease: 'easeIn' }, opacity: 0 } }
    : { exit: { translateX: '-100%', opacity: 0, transition: { delay: 0.5 * windowSpeed } } };

  return (
    <>
      <motion.div
        exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.15 }, pointerEvents: 'none' }}
        onClick={() =>
          props.unmountForm({
            id: invoiceIdParam?.toString(),
            navigateHome: !props.editFormState,
            eraseHistory: router.asPath !== '/?new-invoice'
          })
        }
        className="fixed z-20 min-h-screen w-full animate-darken bg-slate-800/50 will-change-[opacity] dark:bg-[#02030c]/70"></motion.div>

      <motion.div
        variants={formVariants}
        initial={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        exit="exit"
        className="absolute top-24 z-40 flex min-h-screen w-full overflow-hidden bg-white dark:bg-slate-900 lg:absolute lg:left-16 lg:top-0 lg:z-20 lg:h-screen lg:w-auto lg:rounded-r-2xl lg:pl-8">
        <div className="flex h-full grow items-start justify-center scroll-smooth lg:overflow-y-scroll lg:px-4">
          <div className="max-w-lg px-8 py-8 lg:max-w-xl">
            <GoBackHeader
              unmountForm={props.unmountForm}
              eraseHistory={router.asPath !== '/?new-invoice'}
              invoiceId={invoiceIdParam?.toString() || null}
            />
            <h2 className="pb-4 text-3xl font-semibold text-slate-700 dark:font-medium dark:text-slate-200 lg:pb-12">
              {props.editFormState && invoiceIdParam ? (
                <>
                  Edit <span className="text-slate-400 dark:text-slate-700">#</span>
                  {invoiceIdParam.toString().toUpperCase()}
                </>
              ) : (
                'New Invoice'
              )}
            </h2>
            <form>
              <InvoiceFormFieldSetCurrent {...fieldSetCurrentProps} />
              <InvoiceFormFieldSetClient {...fieldSetClientProps} />
              <fieldset>
                <legend className="pb-2 pt-8 font-bold text-blue-600 dark:font-medium dark:text-blue-500">
                  Details
                </legend>
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
                        <input className="w-full cursor-pointer rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200" />
                      }
                    />
                  </div>
                  <p className="pb-3 text-slate-500">
                    <label className="pb-1">Payment Terms</label>
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
                      className="w-full cursor-pointer rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {PaymentTermsEnumToOptions}
                    </select>
                  </p>
                </div>
                <InvoiceFormInputElement
                  prevData={props.handleInput.projectDescriptionInputValue}
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
              className="mt-10 w-full rounded-full bg-slate-100 py-4 font-semibold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/70">
              + Add New Item
            </button>
            <div className="flex justify-between pt-12 text-sm">
              {props.editFormState ? (
                <div className="flex grow justify-end gap-1 lg:gap-3">
                  <button
                    onClick={() =>
                      props.unmountForm({
                        id: invoiceIdParam?.toString(),
                        navigateHome: false,
                        eraseHistory: false
                      })
                    }
                    className="flex rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/70 lg:py-4 lg:px-7">
                    Cancel
                  </button>
                  <button
                    onClick={() => props.saveChanges({ id: invoiceIdParam?.toString() })}
                    className="flex rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 lg:py-4 lg:px-7">
                    Save&nbsp;<span className="hidden lg:block">Changes</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() =>
                      props.unmountForm({ navigateHome: true, id: undefined, eraseHistory: true })
                    }
                    className="flex rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/70 lg:py-4 lg:px-7 ">
                    Discard
                  </button>
                  <div className="flex gap-1 lg:gap-3">
                    <button
                      onClick={() => props.saveChanges({ draft: true })}
                      className="flex rounded-full bg-slate-600 px-5 py-3 font-semibold text-slate-200 transition  hover:bg-slate-200 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800/30 lg:py-4 lg:px-7">
                      Save Draft
                    </button>
                    <button
                      onClick={() => props.saveChanges()}
                      className="flex rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 lg:py-4 lg:px-7">
                      Save&nbsp;<span className="hidden lg:block">&amp;&nbsp;Send</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
