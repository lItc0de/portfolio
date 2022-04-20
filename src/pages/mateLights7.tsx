import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import step from '../media/mateLights/step5.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights8/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={step} alt="step #5 connect the leds" />
      <h5>step #5 connect the leds</h5>
    </div>
  </Content>
);

export default MateLights;
