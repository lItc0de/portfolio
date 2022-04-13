import React from 'react';
import Background from './background';

import * as styles from './layout.css';

const Layout: React.FC = ({ children }) => (
  <>
    <Background />

    <main className={styles.layout}>
      {children}
    </main>
  </>
);

export default Layout;
