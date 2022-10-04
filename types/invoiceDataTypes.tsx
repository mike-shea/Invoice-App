import { ItemCounterType } from './inputStateTypes';

enum PaymentTermsEnum {
  'Net 1 Day' = 'Net 1 Day',
  'Net 7 Days' = 'Net 7 Days',
  'Net 14 Days' = 'Net 14 Days',
  'Net 30 Days' = 'Net 30 Days'
}

interface addressDetails {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

interface InvoiceDetails {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: keyof typeof PaymentTermsEnum;
  sender: addressDetails;
  client: {
    name: string;
    email: string;
  } & addressDetails;
  items: ItemCounterType[];
  status: 'paid' | 'pending' | 'draft';
}

interface InvoiceDetailsJson {
  [id: string]: {
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: keyof typeof PaymentTermsEnum;
    sender: addressDetails;
    client: {
      name: string;
      email: string;
    } & addressDetails;
    items: {
      [id: string]: ItemCounterType;
    };
    status: 'paid' | 'pending' | 'draft';
  };
}

export { PaymentTermsEnum };

export type { InvoiceDetails, InvoiceDetailsJson };
