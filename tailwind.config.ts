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
        // Each token reads from a CSS variable (set in globals.css) so the
        // whole site can invert for light mode without touching a single
        // component — only the variable values change.
        ink: 'rgb(var(--color-ink) / <alpha-value>)', // primary background
        void: 'rgb(var(--color-void) / <alpha-value>)', // deeper background for contrast sections
        bone: 'rgb(var(--color-bone) / <alpha-value>)', // foreground
        smoke: 'rgb(var(--color-smoke) / <alpha-value>)', // muted secondary text
        line: 'rgb(var(--color-line) / <alpha-value>)', // hairline borders
        rust: 'rgb(var(--color-rust) / <alpha-value>)', // single restrained accent, used sparingly
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
