import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import rotateGif from '../media/mateLights/rotate_gif.gif';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights3/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={rotateGif} alt="mate lights in action" />
      <h5>mate lights in action</h5>
    </div>
  </Content>
);

export default MateLights;
