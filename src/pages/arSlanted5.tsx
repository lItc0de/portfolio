import React from 'react';

import Content from '../components/content';
import videoSrc from '../media/arSlanted/ar-flow.webm';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted6/" nextPageText="Next">
    <video src={videoSrc} autoPlay loop muted playsInline />
  </Content>
);

export default ArSlanted;
