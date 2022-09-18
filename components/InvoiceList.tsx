import { InvoiceDetails } from '../data/invoice-data';
import SingleInvoiceItem from './SingleInvoiceItem';

export default function InvoiceList(props: { invoiceData: InvoiceDetails[] }) {
  return (
    <section className="flex w-full flex-col items-start">
      <ul className="flex w-full flex-col gap-4">
        {props.invoiceData?.map((invoice) => (
          <SingleInvoiceItem key={invoice.id} {...invoice} />
        ))}
      </ul>
    </section>
  );
}
