import React from 'react';
import Background from './background';

import * as styles from './layout.css';
import {
  defaultTheme, mateLightsTheme, arSlantedTheme, artworkGeneratorTheme,
} from '../styles/themes.css';
import Navigate from './navigate';
import { getPageName } from '../utils/locationMapper';

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

  return (
    <div className={`${styles.layout} ${theme}`}>
      <Navigate location={location}>
        <Background />

        <main className={styles.main}>
          {children}
        </main>
      </Navigate>
    </div>
  );
};

export default Layout;
