import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';
import { sprinkles } from '../styles/sprinkles.css';

export const layout = style({
  color: vars.colors.text.normal,
  backgroundColor: vars.colors.background.page,
  padding: 0,
  minHeight: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const main = style([
  {
    zIndex: vars.zIndex.page,
    color: vars.colors.text.normal,
    gap: vars.spacing.pagePadding,
    position: 'relative',
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
    flex: {
      mobile: 'mobile',
      desktop: 'desktop',
    },
  }),
]);
