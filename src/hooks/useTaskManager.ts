// task-manager/src/hooks/useTaskManager.ts

import { useEffect, useState } from 'react';
import { showCustomToast } from '@/components/CustomToast';
import { fetchTasksAPI, addTaskAPI, updateTaskAPI, deleteTaskAPI } from '@/utils/taskAPI';
import { scheduleReminder } from '@/utils/reminderUtils';
import { useUser } from '@clerk/nextjs';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  deadline?: string;
  completedAt?: string;
}

export function useTaskManager() {
  const { user, isLoaded } = useUser();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await fetchTasksAPI();
      setTasks(data);
    } catch (error) {
      console.error('Fetch error:', error);
      showCustomToast({ message: 'Failed to fetch tasks', type: 'error' });
    }
  };

  const addTask = async (text: string, deadline?: string) => {
  try {
    if (!isLoaded || !user) {
      showCustomToast({ message: 'User not loaded', type: 'error' });
      return;
    }

    const task = await addTaskAPI(text, deadline, {
      userId: user.id,
      userName: user.fullName ?? 'Unknown',
      userEmail: user.emailAddresses[0]?.emailAddress ?? 'Unknown',
    });

    setTasks((prev) => [task, ...prev]);
    showCustomToast({ message: 'Task added successfully', type: 'success' });

    if (deadline) {
      scheduleReminder(deadline, text);
    }
  } catch (error) {
    console.error('Add task error:', error);
    showCustomToast({ message: 'Error adding task', type: 'error' });
  }
};

  const toggleTask = async (id: number) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    if (!taskToUpdate) return;

    const updatedTask = {
      ...taskToUpdate,
      completed: !taskToUpdate.completed,
      completedAt: !taskToUpdate.completed ? new Date().toISOString() : undefined,
    };

    try {
      await updateTaskAPI(updatedTask);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? updatedTask : t))
      );
      showCustomToast({
        message: updatedTask.completed
          ? 'Task marked as completed'
          : 'Task marked as incomplete',
        type: 'success',
      });
    } catch (error) {
      console.error('Toggle task error:', error);
      showCustomToast({ message: 'Error updating task', type: 'error' });
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await deleteTaskAPI(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
      showCustomToast({ message: 'Task deleted', type: 'success' });
    } catch (error) {
      console.error('Delete task error:', error);
      showCustomToast({ message: 'Error deleting task', type: 'error' });
    }
  };

  return { tasks, isClient, addTask, toggleTask, deleteTask };
}
