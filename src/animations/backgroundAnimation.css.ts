import { style } from '@vanilla-extract/css';
import vars from '../styles/globalTheme.css';

export const backgroundAnimation = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: vars.zIndex.background,
});

export const framerate = style({
  border: 'none',
  position: 'absolute',
  bottom: 0,
  right: 0,
});
