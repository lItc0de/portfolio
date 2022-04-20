import { style, globalStyle } from '@vanilla-extract/css';
import { sprinkles } from '../styles/sprinkles.css';

export const wrapper = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sprinkles({
    // padding: {
    //   mobile: 'medium',
    //   desktop: 'xlarge',
    // },
  }),
]);

globalStyle(`${wrapper} > img`, {
  width: '100%',
  opacity: '0.5',
});
