import { style } from '@vanilla-extract/css';
// import vars from './themes.css';
import { sprinkles } from './sprinkles.css';

export const artworkGenerator = style([
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
