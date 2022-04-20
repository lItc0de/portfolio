import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import coverImage from '../media/arSlanted/cover.webp';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted3/" nextPageText="Next" className={styles.page2}>
    <div className={styles.imageWrapper2}>
      <img src={coverImage} alt="slanted magazine #37-AI cover" />
      <p>slanted magazine #37-AI</p>
    </div>
  </Content>
);

export default ArSlanted;
