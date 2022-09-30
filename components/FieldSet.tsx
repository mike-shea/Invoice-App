import React from 'react';

export default function FieldSet(props: { children?: React.ReactNode; legendLabel: string }) {
  return (
    <fieldset>
      <legend className="pb-2 font-bold text-blue-600 dark:font-medium dark:text-blue-500">
        {props.legendLabel}
      </legend>
      {props.children}
    </fieldset>
  );
}
