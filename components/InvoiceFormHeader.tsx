export default function InvoiceFormHeader({ invoiceIdParam }: { invoiceIdParam: string | null }) {
  return (
    <h2 className="pb-4 text-3xl font-semibold text-slate-700 dark:font-medium dark:text-slate-200 lg:pb-12">
      {invoiceIdParam ? (
        <>
          Edit <span className="text-slate-400 dark:text-slate-700">#</span>
          {invoiceIdParam.toString().toUpperCase()}
        </>
      ) : (
        'New Invoice'
      )}
    </h2>
  );
}
