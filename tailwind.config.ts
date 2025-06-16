// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme:{
    fontFamily: {
        heading: ['var(--font-spaceGrotesk)', 'sans-serif'],
        body: ['var(--font-mulish)', 'sans-serif'],
      },
  },
  plugins: [],
};

export default config;
