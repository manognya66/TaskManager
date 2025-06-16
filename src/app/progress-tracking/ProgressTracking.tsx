//progress-tracking/ProgressTracking.tsx
'use client';

import { useTaskManager } from '@/hooks/useTaskManager';
import { SummaryCards, ProgressBar } from '@/components/ProgressWidgets';

export default function ProgressTracking() {
  const { tasks } = useTaskManager();

  return (
    <div className="space-y-10 sm:space-y-12 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        My Progress Board
      </h1>

      <SummaryCards tasks={tasks} />
      <ProgressBar tasks={tasks} />
    </div>
  );
}