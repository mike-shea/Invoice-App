import { useRef, useState } from 'react';
import { InputRefs, DetailsInputType, RefObjectType } from '../components/types';
import { PaymentTermsEnum } from '../components/types';

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
  const streetAddressInputRef = useRef(null) as RefObjectType;
  const cityInputRef = useRef(null) as RefObjectType;
  const postalCodeInputRef = useRef(null) as RefObjectType;
  const countryInputRef = useRef(null) as RefObjectType;
  const clientNameInputRef = useRef(null) as RefObjectType;
  const clientEmailInputRef = useRef(null) as RefObjectType;
  const clientStreetAddressInputRef = useRef(null) as RefObjectType;
  const clientCityInputRef = useRef(null) as RefObjectType;
  const clientPostalCodeInputRef = useRef(null) as RefObjectType;
  const clientCountryInputRef = useRef(null) as RefObjectType;
  const projectDescriptionInputRef = useRef(null) as RefObjectType;

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
