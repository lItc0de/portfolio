import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const layout = style({
  fontFamily: vars.font.body,
  color: vars.colors.text.normal,
  backgroundColor: vars.colors.background.page,
  padding: 0,
  height: '100%',
  position: 'relative',
});

export const main = style({
  zIndex: vars.zIndex.page,
  fontFamily: vars.font.body,
  color: vars.colors.text.normal,
  padding: 0,
  height: '100%',
  position: 'relative',
});
