import { RefObjectType } from './types';

export default function InvoiceFormInputElement(props: {
  inputRef: RefObjectType;
  label: string;
  prevData?: string | null;
  placeholder?: string | null;
}) {
  return (
    <p className="pb-2 text-slate-500">
      <label>{props.label}</label>
      <input
        ref={props.inputRef}
        className="w-full rounded-lg border border-slate-300 p-2 text-slate-900"
        type="text"
        placeholder={props.placeholder ?? ''}
        defaultValue={props.prevData ?? ''}
      />
    </p>
  );
}
