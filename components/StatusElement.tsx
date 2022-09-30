const statusConfig: {
  bg: string;
  circleColor: string;
  textColor: string;
  text: string;
} = {
  bg: '',
  circleColor: '',
  textColor: '',
  text: ''
};

export default function StatusElement({ status }: { status: 'draft' | 'pending' | 'paid' }) {
  if (status === 'paid') {
    statusConfig.bg = 'bg-green-500/10';
    statusConfig.circleColor = 'bg-green-500';
    statusConfig.textColor = 'text-green-500';
    statusConfig.text = 'Paid';
  }
  if (status === 'pending') {
    statusConfig.bg = 'bg-yellow-500/10';
    statusConfig.circleColor = 'bg-yellow-500';
    statusConfig.textColor = 'text-yellow-600';
    statusConfig.text = 'Pending';
  }
  if (status === 'draft') {
    statusConfig.bg = 'bg-slate-500/10';
    statusConfig.circleColor = 'bg-slate-500';
    statusConfig.textColor = 'text-slate-600';
    statusConfig.text = 'Draft';
  }
  return (
    <div
      className={`col-span-3 flex w-32 items-center justify-center gap-3 rounded-lg ${statusConfig.bg} py-2`}>
      <span className={`flex h-2 w-2 rounded-full ${statusConfig.circleColor}`}></span>
      <p className={`font-bold ${statusConfig.textColor}`}>{statusConfig.text}</p>
    </div>
  );
}
