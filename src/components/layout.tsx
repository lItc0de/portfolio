import React from 'react';
import Background from './background';

import * as styles from './layout.css';
import {
  defaultTheme, mateLightsTheme, arSlantedTheme, artworkGeneratorTheme,
} from '../styles/themes.css';

const themeMapping: { [key: string]: string } = {
  mateLights: mateLightsTheme,
  artworkGenerator: artworkGeneratorTheme,
  arSlanted: arSlantedTheme,
};

type Props = {
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const page = location.pathname.split('/')[1];
  const theme: string = themeMapping[page] || defaultTheme;

  return (
    <div className={`${styles.layout} ${theme}`}>
      <Background />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
