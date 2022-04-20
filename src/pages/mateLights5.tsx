import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import step from '../media/mateLights/step3.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights6/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={step} alt="step #3 cover the glass" />
      <h5>step #3 cover the glass</h5>
    </div>
  </Content>
);

export default MateLights;
