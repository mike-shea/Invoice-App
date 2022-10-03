import React from 'react';
import { childrenProp } from '../types/singlePropType';

export default function FieldSet({
  children,
  legendLabel
}: childrenProp & { legendLabel: string }) {
  return (
    <fieldset>
      <legend className="pb-2 font-bold text-blue-600 dark:font-medium dark:text-blue-500">
        {legendLabel}
      </legend>
      {children}
    </fieldset>
  );
}
