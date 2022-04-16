import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const index = style({
  display: 'flex',
  width: '100%',
  gap: vars.spacing.pagePadding,
  flexDirection: 'column',
});

const cardDefaults = style({
  maxWidth: '50rem',
});

export const welcomeCard = style([
  cardDefaults,
  {
    alignSelf: 'flex-start',
  },
]);

export const aboutMeCard = style([
  cardDefaults,
  {
    alignSelf: 'flex-end',
  },
]);
