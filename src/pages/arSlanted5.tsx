import React from 'react';

import Content from '../components/content';
import Video from '../components/video';
import videoSrc from '../media/arSlanted/ar-flow.webm';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted6/" nextPageText="Next">
    <Video src={videoSrc} />
  </Content>
);

export default ArSlanted;
