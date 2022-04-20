import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import step from '../media/mateLights/step4.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights7/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={step} alt="mount the LEDs" />
      <p>mount the LEDs</p>
    </div>
  </Content>
);

export default MateLights;
