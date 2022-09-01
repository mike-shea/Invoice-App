interface addressDetails {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceDetails {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  sender: addressDetails;
  client: {
    name: string;
    email: string;
  } & addressDetails;
  items: InvoiceItem[];
  status: 'paid' | 'pending' | 'draft';
}

const invoiceData: InvoiceDetails[] = [
  {
    id: 'rt3080',
    status: 'pending',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
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
        name: 'Brand Guidelines',
        quantity: 1,
        price: 180090
      }
    ]
  },
  {
    id: 'xm9141',
    status: 'pending',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
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
        name: 'Banner Design',
        quantity: 1,
        price: 15600
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 20000
      }
    ]
  },
  {
    id: 'RG0314',
    createdAt: '2021-09-24',
    paymentDue: '2021-10-01',
    description: 'Website Redesign',
    paymentTerms: 7,
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
        name: 'Website Redesign',
        quantity: 1,
        price: 140023
      }
    ]
  },
  {
    id: 'aa1449',
    createdAt: '2021-10-7',
    paymentDue: '2021-10-14',
    description: 'Re-branding',
    paymentTerms: 7,
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
        name: 'New Logo',
        quantity: 1,
        price: 153233
      },
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 250000
      }
    ]
  },
  {
    id: 'cd9141',
    createdAt: '2021-10-01',
    paymentDue: '2021-10-31',
    description: 'Landing Page Design',
    paymentTerms: 30,
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
        name: 'Web Design',
        quantity: 1,
        price: 61591
      }
    ]
  },
  {
    id: 'fv2353',
    createdAt: '2021-11-05',
    paymentDue: '2021-11-12',
    description: 'Logo Re-design',
    paymentTerms: 7,
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
        name: 'Logo Re-design',
        quantity: 1,
        price: 310203
      }
    ]
  },
  {
    id: 'ty9141',
    createdAt: '2021-10-01',
    paymentDue: '2021-10-31',
    description: 'Landing Page Design',
    paymentTerms: 30,
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
        name: 'Web Design',
        quantity: 1,
        price: 61591
      }
    ]
  }
];

const invoiceDataJson = JSON.stringify(invoiceData);

export { invoiceData, invoiceDataJson };
export type { InvoiceDetails };
