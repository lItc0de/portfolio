import { style } from '@vanilla-extract/css';
import vars from '../styles/globalTheme.css';

export const layout = style({
  zIndex: vars.zIndex.page,
  fontFamily: vars.font.body,
  color: vars.color.text,
  padding: 0,
  height: '100%',
  position: 'relative',
});
