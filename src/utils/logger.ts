// src/utils/logger.ts
export const prodLog = (message: string, data: Record<string, unknown>) => {
  if (process.env.NODE_ENV === 'production') {
    console.info(`[PROD LOG] ${message}:`, JSON.stringify(data, null, 2));
  }
};
