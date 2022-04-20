import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';
import { sprinkles } from '../styles/sprinkles.css';

export const layout = style({
  color: vars.colors.text.normal,
  padding: 0,
  minHeight: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const main = style([
  {
    zIndex: vars.zIndex.page,
    color: vars.colors.text.normal,
    gap: vars.spacing.pagePadding,
    position: 'relative',
    flex: 1,
  },
  sprinkles({
    padding: {
      mobile: 'medium',
      desktop: 'xlarge',
    },
    gap: {
      mobile: 'medium',
      desktop: 'xlarge',
    },
  }),
]);
