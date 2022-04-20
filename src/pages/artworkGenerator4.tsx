import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import webpage from '../media/artworkGenerator/webpage.webp';

const ArtwortGenerator: React.FC = () => (
  <Content nextPage="/artwortGenerator5/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={webpage} alt="artwork website" />
      <p>artwork website</p>
    </div>
  </Content>
);

export default ArtwortGenerator;
