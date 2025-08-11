// addTasks/add-tasks.tsx
'use client';

import TaskForm from '@/components/TaskForm';
import { useTaskManager } from '@/hooks/useTaskManager';
import { motion } from 'framer-motion';

export default function AddTasks() {
  const { tasks, isClient, addTask } = useTaskManager();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
      {isClient && <TaskForm onAdd={addTask} />}
      {tasks.length === 0 && isClient && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 dark:text-gray-900 text-base sm:text-lg"
        >
          No tasks yet. Start by adding one!
        </motion.p>
      )}
    </div>
  );
}