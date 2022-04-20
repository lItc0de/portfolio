import React from 'react';

import Content from '../components/content';
import markerImage from '../media/arSlanted/marker_image.webp';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted5/" nextPageText="Next">
    <img src={markerImage} alt="example page" />
    <p>page with a detectable image</p>
  </Content>
);

export default ArSlanted;
