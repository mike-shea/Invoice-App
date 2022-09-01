import React from 'react';
import InvoiceFormInputElement from './InvoiceFormInputElement';
import type { InputRefs } from './types';

export default function InvoiceFormFieldSetClient(props: {
  handleInput: InputRefs;
  clientNameInputRef: React.MutableRefObject<null>;
  clientEmailInputRef: React.MutableRefObject<null>;
  clientStreetAddressInputRef: React.MutableRefObject<null>;
  clientCityInputRef: React.MutableRefObject<null>;
  clientPostalCodeInputRef: React.MutableRefObject<null>;
  clientCountryInputRef: React.MutableRefObject<null>;
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

      <div className="grid w-full grid-cols-3 gap-4">
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
          prevData={props.handleInput.clientCountryInputRef}
          inputRef={props.clientCountryInputRef}
          label="Country"
        />
      </div>
    </fieldset>
  );
}
