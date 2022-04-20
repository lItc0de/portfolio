import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import step from '../media/mateLights/step3.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights6/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={step} alt="cover the glass" />
      <p>cover the glass to stop light from escaping</p>
    </div>
  </Content>
);

export default MateLights;
