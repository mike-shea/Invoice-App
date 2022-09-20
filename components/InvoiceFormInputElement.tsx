import { RefObjectType } from './types';

export default function InvoiceFormInputElement(props: {
  inputRef: RefObjectType;
  label: string;
  prevData?: string | null;
  placeholder?: string | null;
  spanFull?: boolean;
}) {
  return (
    <div
      className={`${
        props.spanFull && 'col-span-2'
      } flex w-full flex-col pb-3 text-slate-500 dark:text-slate-400 lg:col-span-1`}>
      <label className="pb-1">{props.label}</label>
      <input
        ref={props.inputRef}
        className="w-full rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        type="text"
        placeholder={props.placeholder ?? ''}
        defaultValue={props.prevData ?? ''}
      />
    </div>
  );
}
