import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from './background';

import * as styles from './layout.css';
import vars, {
  defaultTheme, mateLightsTheme, arSlantedTheme, artworkGeneratorTheme, pageColors,
} from '../styles/themes.css';
import Navigate from './navigate';
import { getPageName } from '../utils/locationMapper';
import { ColorVars } from '../interfaces/colors';

const themeMapping: { [key: string]: string } = {
  mateLights: mateLightsTheme,
  artworkGenerator: artworkGeneratorTheme,
  arSlanted: arSlantedTheme,
};

type Props = {
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const page = getPageName(location.pathname);
  const theme: string = themeMapping[page] || defaultTheme;
  const themeColor: string = pageColors[page] || pageColors.default;

  const [colorVars, setColorVars] = useState<ColorVars>({});

  useEffect(() => {
    setColorVars({
      primary: vars.colors.primary,
      background: vars.colors.background.page,
    });

    document.body.classList.value = theme;
  }, [vars, page, theme]);

  return (
    <>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: themeColor,
          },
        ]}
      />
      <Navigate id="layout" className={styles.layout} location={location}>
        <Background colorVars={colorVars} />

        <main className={styles.main}>
          {children}
        </main>
      </Navigate>
    </>
  );
};

export default Layout;
