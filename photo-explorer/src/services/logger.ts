const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, ...args);
  },
  error: (message: string, error: unknown) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  },
};

export default logger;
