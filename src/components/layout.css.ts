import { style } from '@vanilla-extract/css';
import vars from '../styles/globalTheme.css';

export const layout = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: vars.color.text,
  padding: vars.spacing.padding,
  height: '100%',
});
