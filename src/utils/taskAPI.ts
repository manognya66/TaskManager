//utils/taskAPI.ts

import { Task } from '@/hooks/useTaskManager';

export const fetchTasksAPI = async (): Promise<Task[]> => {
  const res = await fetch('/api/tasks');
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return await res.json();
};

export const addTaskAPI = async (
  text: string,
  deadline: string | undefined,
  user: {
    userId: string;
    userName: string;
    userEmail: string;
  }
): Promise<Task> => {
  const now = new Date();

  const newTask = {
    id: Date.now(),
    text,
    completed: false,
    createdAt: now.toISOString(),
    deadline,
    userId: user.userId,
    userName: user.userName,
    userEmail: user.userEmail,
  };

  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);

  return result.task ?? newTask;
};

export const updateTaskAPI = async (updatedTask: Task) => {
  const res = await fetch('/api/tasks', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });

  if (!res.ok) throw new Error('Failed to update task');
};

export const deleteTaskAPI = async (id: number) => {
  const res = await fetch('/api/tasks', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) throw new Error('Failed to delete task');
};
