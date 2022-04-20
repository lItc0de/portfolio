import React from 'react';

import Content from '../components/content';
import step from '../media/mateLights/step2.webp';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>

    <Content nextPage="/mateLights5/" nextPageText="Next">
      <img src={step} alt="drill holes" />
      <p>drill holes into the lids of mate bottles</p>
    </Content>
  </>
);

export default MateLights;
