import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/mateLights/mateLights1.mdx';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>
    <Content nextPage="/mateLights2/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default MateLights;
