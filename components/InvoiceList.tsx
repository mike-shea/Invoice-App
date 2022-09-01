import { InvoiceDetails } from '../data/invoice-data';
import SingleInvoiceItem from './InvoiceListItem';

export default function InvoiceList(props: { invoiceData: InvoiceDetails[] }) {
  return (
    <section className="">
      <ul className="flex flex-col gap-4">
        {props.invoiceData?.map((invoice) => (
          <SingleInvoiceItem key={invoice.id} {...invoice} />
        ))}
      </ul>
    </section>
  );
}
