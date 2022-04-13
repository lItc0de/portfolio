import { createGlobalTheme } from '@vanilla-extract/css';

export default createGlobalTheme(':root', {
  color: {
    brand: 'yellow',
    text: 'blue',
    background: 'yellow',
  },
  font: {
    body: 'arial',
    size: '16px',
  },
  spacing: {
    padding: '3rem',
  },
  zIndex: {
    background: '0',
    page: '5',
    footer: '99',
    header: '100',
    overlay: '200',
    modal: '300',
  },
});
