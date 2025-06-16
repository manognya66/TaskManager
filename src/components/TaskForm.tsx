//components/TaskForm.tsx
'use client';
'use client';
import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

interface Props {
  onAdd: (text: string, deadline?: string) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, deadline);
    setText('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-4 sm:px-0">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm sm:text-base"
        placeholder="Enter your task"
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm sm:text-base"
      />
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center mx-auto cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
      >
        <HiOutlinePlus className="mr-2 w-5 h-5" />
        Add Task
      </button>
    </form>
  );
}