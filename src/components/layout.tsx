import React from 'react';

import * as styles from './layout.css';

const Layout: React.FC = ({ children }) => (
  <main className={styles.layout}>
    {children}
  </main>
);

export default Layout;
