import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const link = style({
  margin: '0.5rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  position: 'fixed',
  textDecoration: 'none',
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  zIndex: `calc(${vars.zIndex.page} + 1)`,
});
