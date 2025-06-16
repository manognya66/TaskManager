'use client';

import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'loading';
  duration?: number;
}

export const showCustomToast = ({
  message,
  type = 'success',
  duration = 1500,
}: ToastProps) => {
  toast.custom(
    (t) => <CustomToast visible={t.visible} message={message} type={type} />,
    {
      duration,
      position: 'top-right',
      id: message,
    }
  );
};

const CustomToast = ({
  visible,
  message,
  type = 'success',
}: {
    visible: boolean;
    message: string;
    type?: 'success' | 'error' | 'info' | 'loading';
  }) => {
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const interval = 30;
    const total = 1500;
    const step = (interval / total) * 100;

    const timer = setInterval(() => {
      setPercent((prev) => (prev > 0 ? prev - step : 0));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Define colors based on type
  const colors = {
    success: 'text-green-600 bg-green-100 border-green-300',
    error: 'text-red-600 bg-red-100 border-red-300',
    info: 'text-blue-600 bg-blue-100 border-blue-300',
    loading: 'text-gray-600 bg-gray-100 border-gray-300',
  };

  const colorClass = colors[type] || colors.success;

  return (
    <div
      className={`w-[300px] max-w-[90vw] px-4 py-3 rounded-lg shadow-md transition-all duration-300 border ${colorClass} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className="flex items-center justify-between mb-1 font-semibold text-sm sm:text-base">
        <span>TaskFlow</span>
        <span className="text-xs text-gray-500">now</span>
      </div>
      <div className="text-sm sm:text-base">{message}</div>
      <div className="w-full h-1 mt-3 bg-gray-300 rounded overflow-hidden">
        <div
          className={`h-full transition-all ${
            type === 'success'
              ? 'bg-green-600'
              : type === 'error'
              ? 'bg-red-600'
              : type === 'info'
              ? 'bg-blue-600'
              : 'bg-gray-600'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

// Default Toaster setup
export const ToastProvider = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 1500,
      style: {
        background: 'transparent',
        boxShadow: 'none',
        padding: 0,
      },
    }}
  />
);
