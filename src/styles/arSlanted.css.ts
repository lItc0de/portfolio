import { style, globalStyle } from '@vanilla-extract/css';
import vars from './themes.css';

export const content = style({
  backgroundColor: vars.colors.background.pageTransparent,
  minHeight: '100%',
});

export const videoClass = style({
  width: '100%',
});

export const backgroundImage = style({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: '-1',
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${backgroundImage} > img`, {
  width: 'calc(100% - 5rem)',
  margin: '0 auto',
});

// page2
export const imageWrapper2 = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  left: 0,
  top: 0,
  zIndex: '-1',
});

globalStyle(`${imageWrapper2} > img`, {
  width: '100%',
  opacity: '0.9',
});

export const page2 = style({
  justifyContent: 'center',
  alignItems: 'center !important',
});

globalStyle(`${page2} > h5`, {
  backgroundColor: vars.colors.background.pageTransparent,
  margin: '0 -1rem',
  padding: '0rem 1rem',
});

// page6
export const video6 = style({
  width: '100%',
});
