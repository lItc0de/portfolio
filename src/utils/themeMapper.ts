import {
  defaultTheme, mateLightsTheme, arSlantedTheme, artworkGeneratorTheme, pageColors,
} from '../styles/themes.css';

export const getTheme = (path: string): string => {
  if (/^\/mateLights.*/.test(path)) return mateLightsTheme;
  if (/^\/arSlanted.*/.test(path)) return arSlantedTheme;
  if (/^\/artworkGenerator.*/.test(path)) return artworkGeneratorTheme;

  return defaultTheme;
};

export const getThemeColor = (path: string): string => {
  if (/^\/mateLights.*/.test(path)) return `rgb(${pageColors.mateLights})`;
  if (/^\/arSlanted.*/.test(path)) return `rgb(${pageColors.arSlanted})`;
  if (/^\/artworkGenerator.*/.test(path)) return `rgb(${pageColors.artworkGenerator})`;

  return `rgb(${pageColors.default})`;
};
