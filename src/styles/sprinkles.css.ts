import {
  defineProperties,
  createSprinkles,
} from '@vanilla-extract/sprinkles';

export const mediaQueries = {
  desktop: 'screen and (min-width: 750px)',
};

const space = {
  none: 0,
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
  xlarge: '2rem',
};

const pageWidth = {
  mobile: '0 1 700px',
  desktop: '0 0 700px',
};

export const fontSizes = {
  small: '0.75rem',
  normal: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xLarge: '3rem',
  xxLarge: '4rem',
  xxxLarge: '5rem',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': mediaQueries.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    flexDirection: ['row', 'column'],
    padding: space,
    gap: space,
    flex: pageWidth,
    fontSize: fontSizes,
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
