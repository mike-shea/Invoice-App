import React, { useState, useEffect } from 'react';
import { FilteredStatusType } from './types';
import usePortal from '../hooks/usePortal';

function CheckBox(props: {
  label: string;
  checkState: boolean;
  setCheckState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => props.setCheckState((prev: boolean) => !prev)}
      className="group flex w-full cursor-pointer items-center gap-3 ">
      <input
        className="h-4 w-4 cursor-pointer appearance-none rounded bg-blue-200 group-hover:ring-2 group-hover:ring-blue-600 dark:bg-slate-600"
        type="checkbox"
        id={props.label}
        name={props.label}
        checked={props.checkState}
      />
      <p className="text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-100">
        {props.label}
      </p>
    </div>
  );
}

function ModalBackdrop() {
  return <div className="fixed top-0 left-0 z-10 min-h-screen w-full"></div>;
}

export default function FilterListPopUp({
  componentVisibleRef,
  filterByStatus,
  setFilterByStatus
}: {
  componentVisibleRef: React.RefObject<HTMLDivElement>;
  filterByStatus: FilteredStatusType;
  setFilterByStatus: React.Dispatch<React.SetStateAction<FilteredStatusType>>;
}) {
  const { portal: ModalPortal } = usePortal({
    elementId: 'modal-layouts',
    componentToInsert: <ModalBackdrop />
  });
  const [paidchecked, setPaidChecked] = useState(filterByStatus.paid);
  const [pendingchecked, setPendingChecked] = useState(filterByStatus.pending);
  const [draftchecked, setDraftChecked] = useState(filterByStatus.draft);
  useEffect(() => {
    setFilterByStatus({
      paid: paidchecked,
      pending: pendingchecked,
      draft: draftchecked
    });
  }, [draftchecked, paidchecked, pendingchecked]);
  return (
    <>
      <div
        ref={componentVisibleRef}
        className="absolute -left-1/3 z-20 mt-3 flex w-40 flex-col gap-y-2 rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800 dark:text-slate-300 lg:-left-6 lg:w-52 lg:text-base">
        <CheckBox label="Paid" checkState={paidchecked} setCheckState={setPaidChecked} />
        <CheckBox label="Draft" checkState={draftchecked} setCheckState={setDraftChecked} />
        <CheckBox label="Pending" checkState={pendingchecked} setCheckState={setPendingChecked} />
      </div>
      {ModalPortal}
    </>
  );
}
