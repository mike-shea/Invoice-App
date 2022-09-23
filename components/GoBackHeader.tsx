import { ChevronLeftSvg } from './IconComponents';
import { unMountFormConfig } from './types';

export default function GoBackHeader(props: {
  invoiceId: string | undefined | null;
  eraseHistory: boolean;
  unmountForm: (config?: unMountFormConfig) => void;
}) {
  return (
    <div className="flex pb-4">
      <button
        onClick={() => {
          if (props.invoiceId) {
            props.unmountForm({ navigateHome: false, id: props.invoiceId, eraseHistory: false });
            return;
          }
          if (!props.invoiceId) {
            props.unmountForm({
              navigateHome: true,
              id: undefined,
              eraseHistory: props.eraseHistory
            });
          }
        }}
        className="group flex items-center gap-2 lg:gap-4 lg:p-2">
        <ChevronLeftSvg className="fill-blue-500" />
        <p className="text-slate-400 transition group-hover:text-slate-500 lg:text-xl">Go Back</p>
      </button>
    </div>
  );
}
