import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import markerImage from '../media/arSlanted/marker_image.webp';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted5/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={markerImage} alt="example page" />
      <p>page with a detectable image</p>
    </div>
  </Content>
);

export default ArSlanted;
