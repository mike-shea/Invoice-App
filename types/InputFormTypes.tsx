import { PaymentTermsEnum } from '../components/types';
import { InvoiceDetails } from '../data/invoice-data';

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

interface UserInfo {
  state: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  setState: {
    setStreet: setState<string>;
    setCity: setState<string>;
    setPostalCode: setState<string>;
    setCountry: setState<string>;
  };
}

interface ClientInfo {
  state: {
    clientName: string;
    clientEmail: string;
    clientStreet: string;
    clientCity: string;
    clientPostalCode: string;
    clientCountry: string;
  };
  setState: {
    setClientName: setState<string>;
    setClientEmail: setState<string>;
    setClientStreet: setState<string>;
    setClientCity: setState<string>;
    setClientPostalCode: setState<string>;
    setClientCountry: setState<string>;
  };
}

interface Details {
  state: {
    projectDescription: string;
    date: Date;
    paymentTerms: PaymentTermsEnum;
  };
  setState: {
    setProjectDescription: setState<string>;
    setDate: setState<Date>;
    setPaymentTerms: setState<PaymentTermsEnum>;
  };
}

interface ItemCounterType {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface Items {
  state: ItemCounterType[];
  setState: setState<ItemCounterType[]>;
}

type FunctionsType = {
  clearFormState: () => void;
  setFormState: (invoice: InvoiceDetails) => void;
  createNewInvoice: (
    invoiceItem: InvoiceDetails | null,
    status: 'pending' | 'draft'
  ) => InvoiceDetails;
  addNewItem: () => void;
};
interface inputFormStateProps {
  userInfo: UserInfo;
  clientInfo: ClientInfo;
  details: Details;
  items: Items;
  functions: FunctionsType;
}

export type {
  Items,
  FunctionsType,
  ItemCounterType,
  Details,
  ClientInfo,
  UserInfo,
  inputFormStateProps
};
