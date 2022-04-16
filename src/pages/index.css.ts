import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';

export const index = style({
  gap: vars.spacing.pagePadding,
  display: 'flex',
  flex: '0 0 60rem',
  flexDirection: 'column',
  // width: '100%',
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
