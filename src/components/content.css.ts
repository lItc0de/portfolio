import { globalStyle, style } from '@vanilla-extract/css';
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
    justifyContent: 'center',
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

globalStyle(`${content} > img`, {
  width: '100%',
  maxHeight: '70vh',
  objectFit: 'contain',
});

globalStyle(`${content} > video`, {
  width: '100%',
  maxHeight: '70vh',
  objectFit: 'contain',
});
