import { ChevronLeftSvg } from './IconComponents';

export default function GoBackHeader(props: { unmountForm: () => void }) {
  return (
    <div className="flex pb-4">
      <button onClick={props.unmountForm} className="group flex items-center gap-2 lg:gap-4 lg:p-2">
        <ChevronLeftSvg className="fill-blue-500" />
        <p className="text-slate-400 transition group-hover:text-slate-500 lg:text-xl">Go Back</p>
      </button>
    </div>
  );
}
