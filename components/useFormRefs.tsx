import { useRef, useState } from 'react';
import { InputRefs, DetailsInputType } from './types';
import { PaymentTermsEnum } from './types';

const initialRefHandleState = {
  streetAddressInputRef: '',
  cityInputRef: '',
  postalCodeInputRef: '',
  countryInputRef: '',
  clientNameInputRef: '',
  clientEmailInputRef: '',
  clientStreetAddressInputRef: '',
  clientCityInputRef: '',
  clientPostalCodeInputRef: '',
  clientCountryInputRef: '',
  projectDescriptionInputRef: ''
};

const intitalDetailsInput: DetailsInputType = {
  date: new Date(),
  paymentTerms: PaymentTermsEnum['Net 1 Day']
};

export default function useFormRefs() {
  const streetAddressInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const postalCodeInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const clientNameInputRef = useRef(null);
  const clientEmailInputRef = useRef(null);
  const clientStreetAddressInputRef = useRef(null);
  const clientCityInputRef = useRef(null);
  const clientPostalCodeInputRef = useRef(null);
  const clientCountryInputRef = useRef(null);
  const projectDescriptionInputRef = useRef(null);

  const [handleInput, setHandleInput] = useState<InputRefs>(initialRefHandleState);
  const [detailsInput, setDetailsInput] = useState(intitalDetailsInput);

  return {
    formRefs: {
      streetAddressInputRef,
      cityInputRef,
      postalCodeInputRef,
      countryInputRef,
      clientNameInputRef,
      clientEmailInputRef,
      clientStreetAddressInputRef,
      clientCityInputRef,
      clientPostalCodeInputRef,
      clientCountryInputRef,
      projectDescriptionInputRef
    },
    handleInput,
    setHandleInput,
    detailsInput,
    setDetailsInput
  };
}
