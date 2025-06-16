// addTasks/page.tsx
import AddTasks from './add-tasks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AddTasksPage() {
  return (
    <div className="min-h-screen w-full py-2 flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Manage Your Tasks
        </h1>
        <p className="text-center mb-10 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Add, complete, or delete tasks in real-time. Stay organized and productive!
        </p>
        <AddTasks />
      </main>
      <Footer />
    </div>
  );
}

