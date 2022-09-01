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
type RefObjectType = React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;

interface formRefsType {
  streetAddressInputRef: RefObjectType;
  cityInputRef: RefObjectType;
  postalCodeInputRef: RefObjectType;
  countryInputRef: RefObjectType;
  companyInputRef: RefObjectType;
  clientNameInputRef: RefObjectType;
  clientEmailInputRef: RefObjectType;
  clientStreetAddressInputRef: RefObjectType;
  clientCityInputRef: RefObjectType;
  clientPostalCodeInputRef: RefObjectType;
  clientCountryInputRef: RefObjectType;
  clientCompanyInputRef: RefObjectType;
}

interface ItemCounterType {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

export type { InputRefs, formRefsType, ItemCounterType, RefObjectType };
