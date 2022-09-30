import React from 'react';

export default function TextInput(props: {
  label?: string;
  placeholder?: string | null;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex w-full flex-col pb-3 text-slate-500 dark:text-slate-400 lg:col-span-1">
      <label className="pb-1">{props.label ?? ''}</label>
      <input
        className="w-full rounded-lg border border-slate-300 p-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        type="text"
        placeholder={props.placeholder ?? ''}
        value={props.state}
        onChange={(e) => props.setState(e.currentTarget.value)}
      />
    </div>
  );
}
