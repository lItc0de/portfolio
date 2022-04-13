import { createGlobalTheme } from '@vanilla-extract/css';

export default createGlobalTheme(':root', {
  color: {
    brand: 'yellow',
    text: 'blue',
  },
  font: {
    body: 'arial',
    size: '16px',
  },
  spacing: {
    padding: '3rem',
  },
});
