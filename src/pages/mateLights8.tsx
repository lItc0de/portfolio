import React from 'react';

import Content from '../components/content';
import Video from '../components/video';
import final from '../media/mateLights/final.webm';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights8/" nextPageText="Next">
    <Video src={final} />
    <p>enjoy the light show</p>
  </Content>
);

export default MateLights;
