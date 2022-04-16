import { createTheme, createGlobalTheme } from '@vanilla-extract/css';

const globalTheme = createGlobalTheme(':root', {
  fonts: {
    body: '"Karla", sans-serif',
    headings: '"Shrikhand", cursive',
    code: '"Fira Code", monospace',
    size: '20px',
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
});

export const [defaultTheme, colors] = createTheme({
  primary: '#EEA1DB',
  secondary: '#6AE2C5',
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

export const arSlantedTheme = createTheme(colors, {
  primary: '#EEA1DB',
  secondary: '#6AE2C5',
  text: {
    normal: 'rgba(0, 0, 0, 0.9)',
    dimmed: 'rgba(0, 0, 0, 0.8)',
  },
  background: {
    page: '#FFF100',
    card: 'rgba(0, 0, 0, 0.5)',
    code: 'rgba(0, 0, 0, 0.5)',
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

export default { ...globalTheme, colors };
