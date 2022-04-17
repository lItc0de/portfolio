import { style } from '@vanilla-extract/css';
// import vars from './themes.css';
import { sprinkles } from './sprinkles.css';

export const index = style([
  {
    display: 'flex',
  },
  sprinkles({
    flexDirection: {
      mobile: 'column',
      desktop: 'column',
    },
    flex: {
      mobile: 'mobile',
      desktop: 'desktop',
    },
    gap: {
      mobile: 'medium',
      desktop: 'xlarge',
    },
  }),
]);

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
