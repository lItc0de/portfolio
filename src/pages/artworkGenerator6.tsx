import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import example from '../media/artworkGenerator/artwork2.webp';

const ArtwortGenerator: React.FC = () => (
  <Content nextPage="/artwortGenerator7/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={example} alt="artwork example #2" />
      <h5>artwork example #2</h5>
    </div>
  </Content>
);

export default ArtwortGenerator;
