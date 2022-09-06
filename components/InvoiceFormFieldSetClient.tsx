import React from 'react';
import InvoiceFormInputElement from './InvoiceFormInputElement';
import type { InputRefs, RefObjectType } from './types';

export default function InvoiceFormFieldSetClient(props: {
  handleInput: InputRefs;
  clientNameInputRef: RefObjectType;
  clientEmailInputRef: RefObjectType;
  clientStreetAddressInputRef: RefObjectType;
  clientCityInputRef: RefObjectType;
  clientPostalCodeInputRef: RefObjectType;
  clientCountryInputRef: RefObjectType;
}) {
  return (
    <fieldset>
      <legend className="pt-8 pb-2 font-bold text-blue-600">Bill To</legend>
      <InvoiceFormInputElement
        prevData={props.handleInput.clientNameInputRef}
        inputRef={props.clientNameInputRef}
        label="Client's Name"
      />
      <InvoiceFormInputElement
        prevData={props.handleInput.clientEmailInputRef}
        inputRef={props.clientEmailInputRef}
        label="Client's Email"
      />
      <InvoiceFormInputElement
        prevData={props.handleInput.clientStreetAddressInputRef}
        inputRef={props.clientStreetAddressInputRef}
        label="Street Address"
      />

      <div className="grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3">
        <InvoiceFormInputElement
          prevData={props.handleInput.clientCityInputRef}
          inputRef={props.clientCityInputRef}
          label="City"
        />
        <InvoiceFormInputElement
          prevData={props.handleInput.clientPostalCodeInputRef}
          inputRef={props.clientPostalCodeInputRef}
          label="Postal Code"
        />
        <InvoiceFormInputElement
          spanFull={true}
          prevData={props.handleInput.clientCountryInputRef}
          inputRef={props.clientCountryInputRef}
          label="Country"
        />
      </div>
    </fieldset>
  );
}
