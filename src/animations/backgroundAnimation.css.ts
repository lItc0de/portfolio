import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const backgroundAnimation = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: vars.zIndex.background,
  width: '100vw',
  height: '100vh',
});

export const framerate = style({
  border: 'none',
  position: 'absolute',
  bottom: 0,
  right: 0,
});
