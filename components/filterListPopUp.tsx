import React, { useState, useEffect } from 'react';
import { FilteredStatusType } from './types';
import usePortal from './usePortal';

function CheckBox(props: {
  label: string;
  checkState: boolean;
  setCheckState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex w-full gap-3 lg:gap-6">
      <input
        onChange={() => props.setCheckState((prev: boolean) => !prev)}
        type="checkbox"
        id={props.label}
        name={props.label}
        checked={props.checkState}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
}

function ModalBackdrop() {
  return <div className="fixed top-0 left-0 z-10 min-h-screen w-full"></div>;
}

export default function FilterListPopUp(props: {
  componentVisibleRef: React.RefObject<HTMLDivElement>;
  filterByStatus: FilteredStatusType;
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
}) {
  const { portal: ModalPortal } = usePortal({
    elementId: 'modal-layouts',
    componentToInsert: <ModalBackdrop />
  });
  const [paidchecked, setPaidChecked] = useState(props.filterByStatus.paid);
  const [pendingchecked, setPendingChecked] = useState(props.filterByStatus.pending);
  const [draftchecked, setDraftChecked] = useState(props.filterByStatus.draft);
  useEffect(() => {
    props.setFilterByStatus({
      paid: paidchecked,
      pending: pendingchecked,
      draft: draftchecked
    });
  }, [draftchecked, paidchecked, pendingchecked]);
  return (
    <>
      <div
        ref={props.componentVisibleRef}
        className="absolute -left-1/2 z-20 mt-3 flex flex-col gap-4 rounded-2xl border-2 border-slate-200 bg-white p-6 lg:-left-3 lg:p-8">
        <CheckBox label="Paid" checkState={paidchecked} setCheckState={setPaidChecked} />
        <CheckBox label="Draft" checkState={draftchecked} setCheckState={setDraftChecked} />
        <CheckBox label="Pending" checkState={pendingchecked} setCheckState={setPendingChecked} />
      </div>
      {ModalPortal}
    </>
  );
}
