import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TaskList from './TaskList';

export default function ViewTasksPage() {
  return (
    <div className="min-h-screen w-full py-2 flex flex-col bg-white md:bg-gray-900 text-gray-900 md:text-white">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 py-10 w-full max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
          Time to Get Things Done
        </h1>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}
