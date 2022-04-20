import React from 'react';

import Content from '../components/content';
import step from '../media/mateLights/step5.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights8/" nextPageText="Next">
    <img src={step} alt="connect the leds" />
    <p>connect the leds</p>
  </Content>
);

export default MateLights;
