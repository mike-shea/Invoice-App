import { useState } from 'react';
import { PaymentTermsEnum } from '../components/types';

const randomNum = Math.floor(Math.random() * 10000);
const initialItemCounterState = [
  { id: `itemLog-${randomNum}`, name: '', quantity: '0', price: '0' }
];

export default function useFormInput() {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreetAddress, setClientStreetAddress] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostalCode, setClientPostalCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [paymentTerms, setPaymentTerms] = useState(PaymentTermsEnum['Net 1 Day']);
  const [itemCounter, setItemCounter] = useState(initialItemCounterState);

  return {
    userInfo: {
      state: { streetAddress, city, postalCode, country },
      setState: { setStreetAddress, setCity, setPostalCode, setCountry }
    },
    clientInfo: {
      state: {
        clientName,
        clientEmail,
        clientStreetAddress,
        clientCity,
        clientPostalCode,
        clientCountry
      },
      setState: {
        setClientName,
        setClientEmail,
        setClientStreetAddress,
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
    }
  };
}
