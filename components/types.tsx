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
  streetAddressInputValue: string | null;
  cityInputValue: string | null;
  postalCodeInputValue: string | null;
  countryInputValue: string | null;
  clientNameInputValue: string | null;
  clientEmailInputValue: string | null;
  clientStreetAddressInputValue: string | null;
  clientCityInputValue: string | null;
  clientPostalCodeInputValue: string | null;
  clientCountryInputValue: string | null;
  projectDescriptionInputValue: string | null;
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

interface FilteredStatusType {
  draft: boolean;
  pending: boolean;
  paid: boolean;
}

export { PaymentTermsEnum };
export type {
  InputRefs,
  FilteredStatusType,
  formRefsType,
  ItemCounterType,
  RefObjectType,
  DetailsInputType
};
