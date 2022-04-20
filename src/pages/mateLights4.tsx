import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import step from '../media/mateLights/step2.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights5/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={step} alt="step 2 drill holes" />
      <h5>step #2 drill holes</h5>
    </div>
  </Content>
);

export default MateLights;
