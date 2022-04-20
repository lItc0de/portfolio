import React from 'react';

import * as styles from '../styles/arSlanted.css';
import Content from '../components/content';
import firstPageImage from '../media/arSlanted/first_page.webp';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted4/" nextPageText="Next">
    <div className={styles.imageWrapper2}>
      <img src={firstPageImage} alt="slanted first page" />
      <h5>table of contents</h5>
    </div>
  </Content>
);

export default ArSlanted;
