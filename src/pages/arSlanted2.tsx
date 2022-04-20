import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import coverImage from '../media/arSlanted/cover.webp';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted3/" nextPageText="Next" className={styles.page2}>
    <div className={styles.imageWrapper2}>
      <img src={coverImage} alt="slanted cover" />
    </div>
    <h5>Cover of the slanted magazine</h5>
  </Content>
);

export default ArSlanted;
