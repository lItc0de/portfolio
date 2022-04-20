import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import final from '../media/mateLights/final.webm';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights8/" nextPageText="Next">
    <video className={styles.video6} src={final} autoPlay loop muted playsInline />
    <p>enjoy the light show</p>
  </Content>
);

export default MateLights;
