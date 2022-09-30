import { useState } from 'react';
import { newIdTag } from '../components/helpers';
import { PaymentTermsEnum } from '../components/types';
import { InvoiceDetails } from '../data/invoice-data';
import { inputFormStateProps } from '../types/InputFormTypes';

const randomNum = Math.floor(Math.random() * 10000);
const initialItemCounterState = [
  { id: `itemLog-${randomNum}`, name: '', quantity: '0', price: '0' }
];

export default function useFormInput(): inputFormStateProps {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreet, setClientStreet] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostalCode, setClientPostalCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [paymentTerms, setPaymentTerms] = useState(PaymentTermsEnum['Net 1 Day']);
  const [itemCounter, setItemCounter] = useState(initialItemCounterState);

  function clearFormState() {
    setClientName('');
    setClientEmail('');
    setClientStreet('');
    setClientCity('');
    setClientPostalCode('');
    setProjectDescription('');
    setDate(new Date());
    setPaymentTerms(PaymentTermsEnum['Net 1 Day']);
    setItemCounter(initialItemCounterState);
  }

  function setFormState(invoice: InvoiceDetails) {
    setClientName(invoice.client.name || '');
    setClientEmail(invoice.client.email || '');
    setClientStreet(invoice.client.street || '');
    setClientCity(invoice.client.city || '');
    setClientPostalCode(invoice.client.postalCode || '');
    setProjectDescription(invoice.description || '');
    setDate(new Date(invoice.paymentDue || new Date()));
    setPaymentTerms(PaymentTermsEnum[`${invoice.paymentTerms || 'Net 1 Day'}`]);
    setItemCounter(invoice.items || []);
  }

  function addNewItem() {
    setItemCounter((prevState) => {
      const newState = [...prevState];
      newState.push({
        id: `itemLog-${Math.floor(Math.random() * 10000)}`,
        name: '',
        quantity: '0',
        price: '0'
      });
      return newState;
    });
  }

  function createNewInvoice(invoiceItem: InvoiceDetails | null, status: 'pending' | 'draft') {
    return {
      id: invoiceItem ? invoiceItem.id : newIdTag(),
      createdAt: invoiceItem ? invoiceItem.createdAt : new Date().toISOString(),
      paymentDue: date.toISOString(),
      description: projectDescription || '',
      paymentTerms: paymentTerms,
      sender: {
        city: city || '',
        country: country || '',
        postalCode: postalCode || '',
        street: street || ''
      },
      client: {
        name: clientName || '',
        email: clientEmail || '',
        postalCode: clientPostalCode || '',
        street: clientStreet || '',
        city: clientCity || '',
        country: clientCountry || ''
      },
      items: itemCounter,
      status: status
    };
  }

  return {
    userInfo: {
      state: { street, city, postalCode, country },
      setState: { setStreet, setCity, setPostalCode, setCountry }
    },
    clientInfo: {
      state: {
        clientName,
        clientEmail,
        clientStreet,
        clientCity,
        clientPostalCode,
        clientCountry
      },
      setState: {
        setClientName,
        setClientEmail,
        setClientStreet,
        setClientCity,
        setClientPostalCode,
        setClientCountry
      }
    },
    details: {
      state: { projectDescription, date, paymentTerms },
      setState: { setProjectDescription, setDate, setPaymentTerms }
    },
    items: {
      state: itemCounter,
      setState: setItemCounter
    },
    functions: {
      clearFormState,
      setFormState,
      createNewInvoice,
      addNewItem
    }
  };
}
