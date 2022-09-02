enum PaymentTermsEnum {
  'Net 1 Day' = 'Net 1 Day',
  'Net 7 Days' = 'Net 7 Days',
  'Net 14 Days' = 'Net 14 Days',
  'Net 30 Days' = 'Net 30 Days'
}
interface DetailsInputType {
  date: Date;
  paymentTerms: PaymentTermsEnum;
}

interface InputRefs {
  streetAddressInputRef: string | null;
  cityInputRef: string | null;
  postalCodeInputRef: string | null;
  countryInputRef: string | null;
  clientNameInputRef: string | null;
  clientEmailInputRef: string | null;
  clientStreetAddressInputRef: string | null;
  clientCityInputRef: string | null;
  clientPostalCodeInputRef: string | null;
  clientCountryInputRef: string | null;
  projectDescriptionInputRef: string | null;
}
type RefObjectType = React.MutableRefObject<null> | React.MutableRefObject<HTMLInputElement>;

interface formRefsType {
  streetAddressInputRef: RefObjectType;
  cityInputRef: RefObjectType;
  postalCodeInputRef: RefObjectType;
  countryInputRef: RefObjectType;
  clientNameInputRef: RefObjectType;
  clientEmailInputRef: RefObjectType;
  clientStreetAddressInputRef: RefObjectType;
  clientCityInputRef: RefObjectType;
  clientPostalCodeInputRef: RefObjectType;
  clientCountryInputRef: RefObjectType;
  projectDescriptionInputRef: RefObjectType;
}

interface ItemCounterType {
  id: string;
  name: string;
  quantity: string;
  price: string;
}
export { PaymentTermsEnum };
export type { InputRefs, formRefsType, ItemCounterType, RefObjectType, DetailsInputType };
