import React from 'react';

import Content from '../components/content';
import step from '../media/mateLights/step4.webp';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>

    <Content nextPage="/mateLights7/" nextPageText="Next">
      <img src={step} alt="mount the LEDs" />
      <p>mount the LEDs</p>
    </Content>
  </>
);

export default MateLights;
