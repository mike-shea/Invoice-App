import useSWR from 'swr';
import { InvoiceDetailsJson } from '../types/invoiceDataTypes';

const noValidationConfig = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
};

async function fetcher(arg: string) {
  const res = await fetch(arg);
  const data = await res.json();
  return createKeys(data);
}

function createKeys(data: InvoiceDetailsJson) {
  return Object.keys(data).map((idKey) => {
    return {
      id: idKey,
      status: data[idKey].status,
      createdAt: data[idKey].createdAt,
      paymentDue: data[idKey].paymentDue,
      description: data[idKey].description,
      paymentTerms: data[idKey].paymentTerms,
      sender: {
        street: data[idKey].sender.street,
        city: data[idKey].sender.city,
        postalCode: data[idKey].sender.postalCode,
        country: data[idKey].sender.country
      },
      client: {
        name: data[idKey].client.name,
        email: data[idKey].client.email,
        street: data[idKey].client.street,
        city: data[idKey].client.city,
        postalCode: data[idKey].client.postalCode,
        country: data[idKey].client.country
      },
      items: Object.keys(data[idKey].items).map((idItem) => {
        return {
          id: idItem,
          name: data[idKey].items[idItem].name,
          quantity: data[idKey].items[idItem].quantity,
          price: data[idKey].items[idItem].price
        };
      })
    };
  });
}

const storeApi = 'https://invoiceapp-a35f8-default-rtdb.firebaseio.com/storeExample.json';

export default function useSampleData() {
  const { data, error, mutate } = useSWR(storeApi, fetcher);
  return {
    invoiceaMutate: mutate,
    invoiceData: data,
    isLoading: !error && !data,
    isError: error
  };
}
