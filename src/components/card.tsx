import React from 'react';
import * as styles from './card.css';

const Card: React.FC = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
