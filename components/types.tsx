interface InputRefs {
  streetAddressInputRef: string | null;
  cityInputRef: string | null;
  postalCodeInputRef: string | null;
  countryInputRef: string | null;
  companyInputRef: string | null;
  clientNameInputRef: string | null;
  clientEmailInputRef: string | null;
  clientStreetAddressInputRef: string | null;
  clientCityInputRef: string | null;
  clientPostalCodeInputRef: string | null;
  clientCountryInputRef: string | null;
  clientCompanyInputRef: string | null;
}

interface formRefsType {
  streetAddressInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  cityInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  postalCodeInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  countryInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  companyInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientNameInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientEmailInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientStreetAddressInputRef:
    | React.MutableRefObject<null>
    | React.MutableRefObject<HTMLInputElement>;
  clientCityInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientPostalCodeInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientCountryInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
  clientCompanyInputRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;
}

interface ItemCounterType {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

export type { InputRefs, formRefsType, ItemCounterType };
