import { PaymentTermsEnum } from '../components/types';
import type { ItemCounterType } from '../components/types';

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
  paymentTerms: PaymentTermsEnum;
  sender: addressDetails;
  client: {
    name: string;
    email: string;
  } & addressDetails;
  items: ItemCounterType[];
  status: 'paid' | 'pending' | 'draft';
}

const invoiceData: InvoiceDetails[] = [
  {
    id: 'rt3080',
    status: 'pending',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: PaymentTermsEnum['Net 1 Day'],
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Jensen Huang',
      email: 'jensenh@mail.com',
      street: '106 Kendell Street',
      city: 'Sharrington',
      postalCode: 'NR24 5WQ',
      country: 'United Kingdom'
    },
    items: [
      {
        id: 'rt3080-1',
        name: 'Brand Guidelines',
        quantity: '1',
        price: '180090'
      }
    ]
  },
  {
    id: 'xm9141',
    status: 'pending',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: PaymentTermsEnum['Net 30 Days'],
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Alex Grim',
      email: 'alexgrim@mail.com',
      street: '84 Church Way',
      city: 'Bradford',
      postalCode: 'BD1 9PB',
      country: 'United Kingdom'
    },
    items: [
      {
        id: 'xm9141-1',
        name: 'Banner Design',
        quantity: '1',
        price: '15600'
      },
      {
        id: 'xm9141-2',
        name: 'Email Design',
        quantity: '2',
        price: '20000'
      }
    ]
  },
  {
    id: 'rg0314',
    createdAt: '2021-09-24',
    paymentDue: '2021-10-01',
    description: 'Website Redesign',
    paymentTerms: PaymentTermsEnum['Net 7 Days'],
    status: 'paid',
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'John Morrison',
      email: 'jm@myco.com',
      street: '79 Dover Road',
      city: 'Westhall',
      postalCode: 'IP19 3PF',
      country: 'United Kingdom'
    },
    items: [
      {
        id: 'rg0314-1',
        name: 'Website Redesign',
        quantity: '1',
        price: '140023'
      }
    ]
  },
  {
    id: 'aa1449',
    createdAt: '2021-10-7',
    paymentDue: '2021-10-14',
    description: 'Re-branding',
    paymentTerms: PaymentTermsEnum['Net 14 Days'],
    status: 'pending',
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Mellisa Clarke',
      email: 'mellisa.clarke@example.com',
      street: '46 Abbey Row',
      city: 'Cambridge',
      postalCode: 'CB5 6EG',
      country: 'United Kingdom'
    },
    items: [
      {
        id: 'aa1449-1',
        name: 'New Logo',
        quantity: '1',
        price: '153233'
      },
      {
        id: 'aa1449-2',
        name: 'Brand Guidelines',
        quantity: '1',
        price: '250000'
      }
    ]
  },
  {
    id: 'cd9141',
    createdAt: '2021-10-01',
    paymentDue: '2021-10-31',
    description: 'Landing Page Design',
    paymentTerms: PaymentTermsEnum['Net 14 Days'],
    status: 'pending',
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Thomas Wayne',
      email: 'thomas@dc.com',
      street: '3964  Queens Lane',
      city: 'Gotham',
      postalCode: '60457',
      country: 'United States of America'
    },
    items: [
      {
        id: 'cd9141-1',
        name: 'Web Design',
        quantity: '1',
        price: '61591'
      }
    ]
  },
  {
    id: 'fv2353',
    createdAt: '2021-11-05',
    paymentDue: '2021-11-12',
    description: 'Logo Re-design',
    paymentTerms: PaymentTermsEnum['Net 7 Days'],
    status: 'draft',
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Anita Wainwright',
      email: '',
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    items: [
      {
        id: 'fv2353-1',
        name: 'Logo Re-design',
        quantity: '1',
        price: '310203'
      }
    ]
  },
  {
    id: 'ty9141',
    createdAt: '2021-10-01',
    paymentDue: '2021-10-31',
    description: 'Landing Page Design',
    paymentTerms: PaymentTermsEnum['Net 30 Days'],
    status: 'pending',
    sender: {
      street: '19 Union Terrace',
      city: 'London',
      postalCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    client: {
      name: 'Thomas Wayne',
      email: 'thomas@dc.com',
      street: '3964  Queens Lane',
      city: 'Gotham',
      postalCode: '60457',
      country: 'United States of America'
    },
    items: [
      {
        id: 'ty9141-1',
        name: 'Web Design',
        quantity: '1',
        price: '61591'
      }
    ]
  }
];

const invoiceDataJson = JSON.stringify(invoiceData);

export { invoiceData, invoiceDataJson };
export type { InvoiceDetails };
