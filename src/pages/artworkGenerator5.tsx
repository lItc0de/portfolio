import React from 'react';

import Content from '../components/content';
import example from '../media/artworkGenerator/artwork1.webp';

const ArtwortGenerator: React.FC = () => (
  <Content nextPage="/artwortGenerator6/" nextPageText="Next">
    <img src={example} alt="artwork example #1" />
    <p>artwork example #1</p>
  </Content>
);

export default ArtwortGenerator;
