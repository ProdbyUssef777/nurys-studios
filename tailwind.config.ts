import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',        // primary background, near-black
        void: '#050505',       // deeper background for contrast sections
        bone: '#f2f1ec',       // off-white foreground
        smoke: '#9a988f',      // muted secondary text
        line: '#232320',       // hairline borders
        rust: '#a8531f',       // single restrained accent, used sparingly
      },
      fontFamily: {
        display: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '-apple-system',
          'sans-serif',
        ],
        body: [
          '-apple-system',
          'system-ui',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wide2: '0.08em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        edge: '1600px',
      },
    },
  },
  plugins: [],
};

export default config;
