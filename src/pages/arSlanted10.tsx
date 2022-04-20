import React from 'react';

import Content from '../components/content';
import videoSrc from '../media/arSlanted/fallback-flow.webm';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted11/" nextPageText="Next">
    <video src={videoSrc} autoPlay loop muted playsInline />
  </Content>
);

export default ArSlanted;
