import { style } from '@vanilla-extract/css';

export const video = style({
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100vh - 8rem)',
  objectFit: 'contain',
});
