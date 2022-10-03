import {
  unmountFormProp,
  saveInvoiceProp,
  childrenProp,
  invoiceFormVisibilityProp,
  allInputStateProp,
  userInfoProp,
  clientInfoProp,
  detailsProp,
  itemsProp,
  functionsProp,
  invoiceDataSWRProp,
  deleteInvoiceProp,
  updateInvoiceStatusProp,
  populateFormWithExistingProp,
  filterByStatusProp,
  setFilterByStatusProp,
  filteredInvoiceDataSwrProp,
  mountNewInvoiceFormProp
} from './singlePropType';

type InvoiceLayoutProps = unmountFormProp &
  saveInvoiceProp &
  childrenProp &
  invoiceFormVisibilityProp &
  allInputStateProp;

type InvoiceFormProps = userInfoProp &
  clientInfoProp &
  detailsProp &
  itemsProp &
  functionsProp &
  unmountFormProp &
  saveInvoiceProp;

type InvoiceFormInputsProps = userInfoProp & clientInfoProp & detailsProp & itemsProp;

type InvoiceIdProps = invoiceDataSWRProp &
  deleteInvoiceProp &
  updateInvoiceStatusProp &
  populateFormWithExistingProp &
  unmountFormProp;

type IndexProps = filterByStatusProp &
  setFilterByStatusProp &
  filteredInvoiceDataSwrProp &
  invoiceDataSWRProp &
  mountNewInvoiceFormProp;

type HeaderProps = filterByStatusProp &
  setFilterByStatusProp & { invoiceItemLength: number } & mountNewInvoiceFormProp;

export type {
  HeaderProps,
  IndexProps,
  InvoiceIdProps,
  InvoiceFormInputsProps,
  InvoiceFormProps,
  InvoiceLayoutProps
};
