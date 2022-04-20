import React from 'react';
import * as styles from './backgroundImages.css';

const Content: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default Content;
