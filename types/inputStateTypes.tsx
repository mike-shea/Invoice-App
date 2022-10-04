import { InvoiceDetails } from '../data/invoice-data';
import { PaymentTermsEnum } from './invoiceDataTypes';

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

interface UserInfoType {
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

interface ClientInfoType {
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

interface DetailsType {
  state: {
    projectDescription: string;
    date: Date;
    paymentTerms: keyof typeof PaymentTermsEnum;
  };
  setState: {
    setProjectDescription: setState<string>;
    setDate: setState<Date>;
    setPaymentTerms: setState<keyof typeof PaymentTermsEnum>;
  };
}

interface ItemCounterType {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface ItemsType {
  state: ItemCounterType[];
  setState: setState<ItemCounterType[]>;
}

interface functionsType {
  clearFormState: () => void;
  setFormState: (invoice: InvoiceDetails) => void;
  createNewInvoice: (
    invoiceItem: InvoiceDetails | null,
    status: 'pending' | 'draft'
  ) => InvoiceDetails;
  addNewItem: () => void;
}

export type {
  functionsType,
  ItemsType,
  ItemCounterType,
  DetailsType,
  ClientInfoType,
  UserInfoType
};
