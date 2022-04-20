import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from './background';

import * as styles from './layout.css';
import vars from '../styles/themes.css';
import Navigate from './navigate';
import { ColorVars } from '../interfaces/colors';
import { getTheme, getThemeColor } from '../utils/themeMapper';

type Props = {
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }) => {
  const theme: string = getTheme(location.pathname);
  const themeColor: string = getThemeColor(location.pathname);

  const [colorVars, setColorVars] = useState<ColorVars>({});

  useEffect(() => {
    setColorVars({
      primary: vars.colors.primary,
      background: vars.colors.background.page,
    });

    document.body.classList.value = theme;
  }, [vars, location, theme]);

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
      <Background colorVars={colorVars} />
      <Navigate id="layout" className={styles.layout} location={location}>
        {children}
      </Navigate>
    </>
  );
};

export default Layout;
