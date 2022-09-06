import React from 'react';
import InvoiceFormInputElement from './InvoiceFormInputElement';
import type { InputRefs, RefObjectType } from './types';

export default function InvoiceFormFieldSetCurrent(props: {
  handleInput: InputRefs;
  streetAddressInputRef: RefObjectType;
  cityInputRef: RefObjectType;
  postalCodeInputRef: RefObjectType;
  countryInputRef: RefObjectType;
}) {
  return (
    <fieldset>
      <legend className="pb-2 font-bold text-blue-600">Bill From</legend>
      <InvoiceFormInputElement
        prevData={props.handleInput.streetAddressInputRef}
        inputRef={props.streetAddressInputRef}
        label="Street Address"
      />
      <div className="grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3">
        <InvoiceFormInputElement
          prevData={props.handleInput.cityInputRef}
          inputRef={props.cityInputRef}
          label="City"
        />
        <InvoiceFormInputElement
          prevData={props.handleInput.postalCodeInputRef}
          inputRef={props.postalCodeInputRef}
          label="Postal Code"
        />
        <InvoiceFormInputElement
          spanFull={true}
          prevData={props.handleInput.countryInputRef}
          inputRef={props.countryInputRef}
          label="Country"
        />
      </div>
    </fieldset>
  );
}
