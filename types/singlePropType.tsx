import {
  UserInfoType,
  ClientInfoType,
  DetailsType,
  ItemsType,
  functionsType
} from './inputStateTypes';
import { InvoiceDetails } from './invoiceDataTypes';
import { FilteredStatusType } from './types';

interface mountNewInvoiceFormProp {
  mountNewInvoiceForm: () => void;
}
interface unmountFormProp {
  unmountForm: (invoiceIdParam: string | null) => void;
}
interface saveInvoiceProp {
  saveInvoice: (id: string | null, status: 'draft' | 'pending') => void;
}
interface deleteInvoiceProp {
  deleteInvoice: (invoiceId: string) => void;
}
interface updateInvoiceStatusProp {
  updateInvoiceStatus: (invoiceId: string, statusUpdate: 'draft' | 'pending' | 'paid') => void;
}
interface populateFormWithExistingProp {
  populateFormWithExisting: (id: string) => void;
}

interface userInfoProp {
  userInfo: UserInfoType;
}

interface clientInfoProp {
  clientInfo: ClientInfoType;
}

interface detailsProp {
  details: DetailsType;
}

interface itemsProp {
  items: ItemsType;
}

interface functionsProp {
  functions: functionsType;
}

interface allInputStateProp {
  allInputState: {
    userInfo: UserInfoType;
    clientInfo: ClientInfoType;
    details: DetailsType;
    items: ItemsType;
    functions: functionsType;
  };
}

interface invoiceFormVisibilityProp {
  invoiceFormVisibility: boolean;
}

interface childrenProp {
  children: React.ReactNode;
}

interface filterByStatusProp {
  filterByStatus: FilteredStatusType;
}

interface setFilterByStatusProp {
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
}

interface filteredInvoiceDataSwrProp {
  filteredInvoiceDataSwr: InvoiceDetails[];
}

interface invoiceDataSWRProp {
  invoiceDataSWR: InvoiceDetails[];
}

export type {
  invoiceDataSWRProp,
  filteredInvoiceDataSwrProp,
  setFilterByStatusProp,
  filterByStatusProp,
  childrenProp,
  invoiceFormVisibilityProp,
  allInputStateProp,
  functionsProp,
  itemsProp,
  detailsProp,
  clientInfoProp,
  userInfoProp,
  populateFormWithExistingProp,
  updateInvoiceStatusProp,
  deleteInvoiceProp,
  saveInvoiceProp,
  unmountFormProp,
  mountNewInvoiceFormProp
};
