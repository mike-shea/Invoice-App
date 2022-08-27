import { InvoiceItem } from '../data/invoice-data';
import SingleInvoiceItem from './InvoiceListItem';

export default function InvoiceList(props: { invoiceData: InvoiceItem[] }) {
  return (
    <section>
      <ul className="flex flex-col gap-4">
        {props.invoiceData.map((invoice) => (
          <SingleInvoiceItem
            key={invoice.id}
            id={invoice.id}
            paymentDueDate={invoice.paymentDueDate}
            clientName={invoice.clientName}
            amountDue={invoice.amountDue}
            status={invoice.status}
          />
        ))}
      </ul>
    </section>
  );
}
