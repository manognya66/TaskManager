//components/Features.tsx
'use client';
import { motion } from 'framer-motion';
import {
  HiCheckCircle,
  HiCalendar,
  HiBell,
  HiTrendingUp,
} from 'react-icons/hi';

const features = [
  {
    icon: <HiCheckCircle className="text-green-500 w-8 h-8" />,
    title: 'Easy Task Management',
    desc: 'Create, edit, and delete tasks with just a few clicks.',
  },
  {
    icon: <HiCalendar className="text-blue-500 w-8 h-8" />,
    title: 'Deadline Reminders',
    desc: 'Stay ahead with timely notifications and alerts.',
  },
  {
    icon: <HiBell className="text-yellow-400 w-8 h-8" />,
    title: 'Smart Notifications',
    desc: 'Get notified about important updates instantly.',
  },
  {
    icon: <HiTrendingUp className="text-purple-500 w-8 h-8" />,
    title: 'Progress Tracking',
    desc: 'Evaluate ongoing progress to maintain efficiency.',
  },
];

export default function FeatureSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl mb-16 px-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <div className="flex items-center space-x-4 mb-2">
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
          </div>
          <p className="feature text-gray-600 dark:text-gray-300">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
