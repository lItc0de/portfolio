import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

const globalTheme = createGlobalTheme(':root', {
  fonts: {
    body: '"Karla", sans-serif',
    headings: '"Shrikhand", cursive',
    code: '"Fira Code", monospace',
  },
  spacing: {
    pagePadding: '3rem',
    cardPadding: '2rem',
  },
  zIndex: {
    background: '0',
    page: '5',
    footer: '99',
    header: '100',
    overlay: '200',
    modal: '300',
  },
  borderRadius: '4px',
  sizes: {
    body: {
      mobile: '16px',
      desktop: '20px',
    },
    headings: {
      mobile: {
        h1: '2.75rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.75rem',
        h5: '1.5rem',
        h6: '1.25rem',
      },
      desktop: {
        h1: '5rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
        h5: '1.75rem',
        h6: '1.5rem',
      },
    },
  },
});

export const [defaultTheme, colors] = createTheme({
  primary: '#EEA1DB',
  secondary: '#EEA1DB',
  text: {
    normal: '#111827',
    dimmed: '#111827',
  },
  background: {
    page: '#ccfbf1',
    card: 'rgba(0, 0, 0, 0.5)',
    code: '#99f6e4',
  },
  stroke: 'rgba(255, 255, 255, 0.33)',
});

export const arSlantedTheme = createTheme(colors, {
  primary: '#000000',
  secondary: '#FFFFFF',
  text: {
    normal: '#000000',
    dimmed: 'rgba(0, 0, 0, 0.7)',
  },
  background: {
    page: '#FFF100',
    card: 'rgba(0, 0, 0, 0.5)',
    code: 'rgba(0, 0, 0, 0.1)',
  },
  stroke: 'rgba(255, 255, 255, 0.33)',
});

export const artworkGeneratorTheme = createTheme(colors, {
  primary: '#6AE2C5',
  secondary: '#6AE2C5',
  text: {
    normal: 'rgba(0, 0, 0, 0.9)',
    dimmed: 'rgba(0, 0, 0, 0.8)',
  },
  background: {
    page: '#7B61FF',
    card: 'rgba(0, 0, 0, 0.5)',
    code: 'rgba(0, 0, 0, 0.5)',
  },
  stroke: 'rgba(255, 255, 255, 0.33)',
});

export const mateLightsTheme = createTheme(colors, {
  primary: '#EEA1DB',
  secondary: 'rgba(2, 27, 255, 0.9)',
  text: {
    normal: 'rgba(2, 27, 255, 0.9)',
    dimmed: 'rgba(2, 27, 255, 0.8)',
  },
  background: {
    page: '#FFF100',
    card: 'rgba(0, 0, 0, 0.5)',
    code: 'rgba(0, 0, 0, 0.5)',
  },
  stroke: 'rgba(255, 255, 255, 0.33)',
});

export default { ...globalTheme, colors };
