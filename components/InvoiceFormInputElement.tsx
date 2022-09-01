export default function InvoiceFormInputElement(props: {
  inputRef: React.MutableRefObject<null>;
  label: string;
  prevData?: string | null;
}) {
  return (
    <p className="pb-2 text-slate-500">
      <label>{props.label}</label>
      <input
        ref={props.inputRef}
        className="w-full rounded-lg border border-slate-300 p-2 text-slate-900"
        type="text"
        defaultValue={props.prevData ?? ''}
      />
    </p>
  );
}
