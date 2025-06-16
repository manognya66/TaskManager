import { useEffect, useState } from 'react';
import { showCustomToast } from '@/components/CustomToast';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  deadline?: string;
  completedAt?: string;
}

export function useLocalStorageTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('taskList');
      if (stored) setTasks(JSON.parse(stored));
    } catch (err) {
      showCustomToast({
        message: `Failed to load tasks: ${(err as Error).message}`,
        type: 'error',
      });
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('taskList', JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  return { tasks, setTasks, isClient };
}
