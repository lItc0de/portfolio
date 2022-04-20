import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import videoSrc from '../media/arSlanted/fallback-flow.webm';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted12/" nextPageText="Next">
    <video className={styles.video6} src={videoSrc} autoPlay loop muted />
  </Content>
);

export default ArSlanted;
