import { showCustomToast } from '@/components/CustomToast';

export const scheduleReminder = (deadline: string, text: string) => {
  const now = new Date();
  const delay = new Date(deadline).getTime() - now.getTime();

  if (delay > 0) {
    setTimeout(() => {
      showCustomToast({
        message: `Reminder: "${text}" is due now!`,
        type: 'info',
      });
    }, delay);
  }
};
