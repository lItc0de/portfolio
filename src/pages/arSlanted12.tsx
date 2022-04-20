import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/arSlanted/arSlanted12.mdx';

const ArSlanted: React.FC = () => (
  <Content nextPage="/artworkGenerator/" nextPageText="Next">
    <Markdown />
  </Content>
);

export default ArSlanted;
