import { Colors, ColorVars } from '../interfaces/colors';

let colorVars: ColorVars;

const getColorFromVar = (cssVar: string) => {
  const match = cssVar.match(/var\((.*)\)/);
  if (!match) return null;

  const strippedVar = match[1];
  const layout = document.getElementById('layout');
  if (!layout) return null;

  return window.getComputedStyle(layout).getPropertyValue(strippedVar);
};

export const setColorVars = (newVars: ColorVars) => {
  colorVars = newVars;
};

export const getColors = (): Colors => {
  const colors: Colors = {
    primary: '#fff',
    background: '#000',
  };

  if (!colorVars || !colorVars.primary || !colorVars.background) return colors;

  const primary = getColorFromVar(colorVars.primary);
  const background = getColorFromVar(colorVars.background);

  if (primary) colors.primary = primary;
  if (background) colors.background = background;

  return colors;
};
