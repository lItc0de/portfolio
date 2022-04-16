import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const layout = style({
  color: vars.colors.text.normal,
  backgroundColor: vars.colors.background.page,
  padding: 0,
  height: '100%',
  position: 'relative',
});

export const main = style({
  zIndex: vars.zIndex.page,
  color: vars.colors.text.normal,
  padding: vars.spacing.pagePadding,
  height: '100vh',
  width: '100vw',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: vars.spacing.pagePadding,
  overflow: 'hidden',
  overflowY: 'scroll',
});
