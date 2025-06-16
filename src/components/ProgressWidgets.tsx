//components/ProgressWidgets.tsx
import { Task } from '@/hooks/useLocalStorageTasks';

interface Props {
  tasks: Task[];
}

export function ProgressBar({ tasks }: Props) {
  const completed = tasks.filter((t: Task) => t.completed).length;
  const total = tasks.length;
  const percent = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="space-y-2 w-full px-4 sm:px-0">
      <p className="text-base sm:text-lg font-semibold text-center sm:text-left">Overall Progress</p>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-4 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm sm:text-md text-gray-600 dark:text-gray-400 text-center sm:text-left">
        {percent.toFixed(0)}% completed
      </p>
    </div>
  );
}

export function SummaryCards({ tasks }: Props) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-0 w-full max-w-6xl mx-auto mt-6">
      <div className="bg-blue-100 dark:bg-blue-900 p-4 sm:p-6 rounded-xl shadow text-center">
        <p className="text-base sm:text-xl font-semibold">Total Tasks</p>
        <p className="text-2xl sm:text-3xl font-bold">{total}</p>
      </div>
      <div className="bg-green-100 dark:bg-green-900 p-4 sm:p-6 rounded-xl shadow text-center">
        <p className="text-base sm:text-xl font-semibold">Completed</p>
        <p className="text-2xl sm:text-3xl font-bold">{completed}</p>
      </div>
      <div className="bg-yellow-100 dark:bg-yellow-900 p-4 sm:p-6 rounded-xl shadow text-center">
        <p className="text-base sm:text-xl font-semibold">Pending</p>
        <p className="text-2xl sm:text-3xl font-bold">{pending}</p>
      </div>
    </div>
  );
}