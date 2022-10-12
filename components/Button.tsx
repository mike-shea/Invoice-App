export default function Button({
  onClick,
  label,
  style
}: {
  onClick?: () => void;
  label: string;
  style: 'light' | 'dark' | 'primary' | 'error';
}) {
  return (
    <button
      onClick={onClick}
      className={`
      ${
        style === 'light' &&
        'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/70'
      }
      ${
        style === 'primary' &&
        'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800'
      }
      ${
        style === 'dark' &&
        'bg-slate-500 text-white hover:bg-slate-600 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800/30 '
      }
      ${
        style === 'error' &&
        'bg-red-400 text-white transition hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-700'
      }
      
      flex rounded-full px-5 py-3 font-semibold transition lg:py-4 lg:px-7`}>
      {label}
    </button>
  );
}
