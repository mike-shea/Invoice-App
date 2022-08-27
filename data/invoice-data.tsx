interface InvoiceItem {
  id: string;
  streetAddress: string;
  city: string;
  country: string;
  clientName: string;
  clientEmail: string;
  amountDue: number;
  paymentDueDate: string;
  status: 'paid' | 'pending' | 'draft';
}

const invoiceData: InvoiceItem[] = [
  {
    id: 'rt3080',
    streetAddress: '123 Fake Street',
    city: 'Vancouver',
    country: 'Canada',
    clientName: 'Alex Grimm',
    clientEmail: 'agrimm@hotmail.com',
    amountDue: 180090,
    paymentDueDate: 'August 30, 2022 13:15:30',
    status: 'paid'
  },
  {
    id: 'XM19141',
    streetAddress: '123 Fake Street',
    city: 'Vancouver',
    country: 'Canada',
    clientName: 'John Moraney',
    clientEmail: 'agrimm@hotmail.com',
    amountDue: 55600,
    paymentDueDate: 'September 20, 2022 13:15:30',
    status: 'pending'
  },
  {
    id: 'RG03314',
    streetAddress: '123 Fake Street',
    city: 'Vancouver',
    country: 'Canada',
    clientName: 'Alyssa Werner',
    clientEmail: 'agrimm@hotmail.com',
    amountDue: 1400233,
    paymentDueDate: 'September 25, 2022 13:15:30',
    status: 'paid'
  }
];

export { invoiceData };
export type { InvoiceItem };
