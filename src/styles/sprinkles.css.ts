import {
  defineProperties,
  createSprinkles,
} from '@vanilla-extract/sprinkles';

export const mediaQueries = {
  desktop: 'screen and (min-width: 750px)',
};

const space = {
  none: 0,
  xsmall: '0.25rem',
  small: '0.5rem',
  normal: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '3rem',
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
