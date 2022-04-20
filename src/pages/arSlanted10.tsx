import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/arSlanted/arSlanted10.mdx';

const ArSlanted: React.FC = () => (
  <Content nextPage="/arSlanted11/" nextPageText="Next">
    <Markdown />
  </Content>
);

export default ArSlanted;
