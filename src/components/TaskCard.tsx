//component/TaskCard.tsx
'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { showCustomToast } from '@/components/CustomToast';
import {
  formatDate,
  formatTimeWithUpperAMPM,
} from '@/hooks/taskUtils';
import { Task } from '@/hooks/useTaskManager';

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onToggle, onDelete }: Props) {
  const createdDate = formatDate(task.createdAt);
  const createdTime = formatTimeWithUpperAMPM(task.createdAt);

  const deadlineDate = formatDate(task.deadline);
  const deadlineTime = formatTimeWithUpperAMPM(task.deadline);

  const completedDate = formatDate(task.completedAt);
  const completedTime = formatTimeWithUpperAMPM(task.completedAt);

  const handleToggle = () => {
    const now = new Date();
    const taskDeadline = task.deadline ? new Date(task.deadline) : null;

    if (taskDeadline && now < taskDeadline && !task.completed) {
      showCustomToast({
        message:
          'This task is scheduled for later. You can only complete it after the deadline.',
        type: 'info',
      });
      return;
    }

    onToggle(task.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      layout
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white dark:bg-gray-800 shadow rounded-md my-2 gap-4"
    >
      <div className="flex-1 w-full">
        <div
          className={`task text-base sm:text-lg font-medium  ${
            task.completed ? 'line-through text-green-600 dark:text-green-400' : ''
          }`}
        >
          {task.text}
        </div>

        <div className="flex flex-col gap-1 mt-1 text-sm">
          <div className="task-time text-blue-500 dark:text-blue-400">
            Created at: {createdDate} at {createdTime}
          </div>

          {task.deadline && (
            <div
              className={`task-time ${
                task.completed
                  ? 'line-through text-green-500 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Scheduled for: {deadlineDate} at {deadlineTime}
            </div>
          )}

          {task.completedAt && (
            <div className="task-time text-green-500 dark:text-green-400">
              Completed at: {completedDate} at {completedTime}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        <button
          onClick={handleToggle}
          className={`transition-all duration-200 cursor-pointer ${
            task.completed
              ? 'text-green-600 hover:text-green-700'
              : 'text-gray-300 hover:text-green-500'
          }`}
          title={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        >
          {task.completed ? (
            <HiOutlineXCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <HiOutlineCheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          )}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="cursor-pointer text-red-100 hover:text-red-700 transition-all duration-200"
          title="Delete Task"
        >
          <HiOutlineTrash className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </motion.div>
  );
}