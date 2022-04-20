import React from 'react';

import Content from '../components/content';
import step from '../media/mateLights/step3.webp';

const MateLights: React.FC = () => (
  <Content nextPage="/mateLights6/" nextPageText="Next">
    <img src={step} alt="cover the glass" />
    <p>cover the glass to stop light from escaping</p>
  </Content>
);

export default MateLights;
