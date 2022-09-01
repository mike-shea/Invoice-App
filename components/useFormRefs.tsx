import { useRef, useState } from 'react';
import { InputRefs } from './types';

const initialRefHandleState = {
  streetAddressInputRef: '',
  cityInputRef: '',
  postalCodeInputRef: '',
  countryInputRef: '',
  companyInputRef: '',
  clientNameInputRef: '',
  clientEmailInputRef: '',
  clientStreetAddressInputRef: '',
  clientCityInputRef: '',
  clientPostalCodeInputRef: '',
  clientCountryInputRef: '',
  clientCompanyInputRef: ''
};

export default function useFormRefs() {
  const streetAddressInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const postalCodeInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const companyInputRef = useRef(null);
  const clientNameInputRef = useRef(null);
  const clientEmailInputRef = useRef(null);
  const clientStreetAddressInputRef = useRef(null);
  const clientCityInputRef = useRef(null);
  const clientPostalCodeInputRef = useRef(null);
  const clientCountryInputRef = useRef(null);
  const clientCompanyInputRef = useRef(null);

  const [handleInput, setHandleInput] = useState<InputRefs>(initialRefHandleState);

  return {
    formRefs: {
      streetAddressInputRef,
      cityInputRef,
      postalCodeInputRef,
      countryInputRef,
      companyInputRef,
      clientNameInputRef,
      clientEmailInputRef,
      clientStreetAddressInputRef,
      clientCityInputRef,
      clientPostalCodeInputRef,
      clientCountryInputRef,
      clientCompanyInputRef
    },
    handleInput,
    setHandleInput
  };
}
