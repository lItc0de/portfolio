import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const card = style({
  border: `1px solid ${vars.colors.stroke}`,
  backgroundColor: vars.colors.background.card,
  backdropFilter: 'blur(10px)',
  padding: vars.spacing.cardPadding,
  borderRadius: vars.borderRadius,
});
