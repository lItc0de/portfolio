import React from 'react';

import Content from '../components/content';
import coverImage from '../media/arSlanted/cover.webp';

const ArSlanted: React.FC = () => (
  <>
    <title>Augmented Reality | Portfolio</title>

    <Content nextPage="/arSlanted3/" nextPageText="Next">
      <img src={coverImage} alt="slanted magazine #37-AI cover" />
      <p>slanted magazine #37-AI</p>
    </Content>
  </>
);

export default ArSlanted;
