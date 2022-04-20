import { style } from '@vanilla-extract/css';
import vars from '../styles/themes.css';
import { sprinkles } from '../styles/sprinkles.css';

export const content = style([
  {
    backgroundColor: vars.colors.background.pageTransparent,
    zIndex: vars.zIndex.page,
    color: vars.colors.text.normal,
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  sprinkles({
    padding: {
      mobile: 'medium',
      desktop: 'xlarge',
    },
  }),
]);

export const nextPageLink = style({
  position: 'fixed',
  bottom: '1rem',
});
