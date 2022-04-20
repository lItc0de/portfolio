import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/mateLights/mateLights9.mdx';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>
    <Content nextPage="/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default MateLights;
