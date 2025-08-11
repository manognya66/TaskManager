//view-tasks/TaskList.tsx
'use client';
import TaskCard from '@/components/TaskCard';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useTaskManager } from '@/hooks/useTaskManager';

export default function TaskList() {
  const { tasks, isClient, toggleTask, deleteTask } = useTaskManager();

  if (!isClient) return null;

  return (
    <div className="w-full px-4 sm:px-6 max-w-3xl mx-auto space-y-6">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-400 dark:text-gray-500 mt-8 flex flex-col items-center gap-4"
        >
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-900">
            Your task list is empty — time to add some!
          </p>
          <Link
            href="/add-tasks"
            className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
          >
            Go to Add Tasks
          </Link>
        </motion.div>
      )}
    </div>
  );
}