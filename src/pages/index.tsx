import React from 'react';

import Content from '../components/content';

import Markdown from '../markdown/index.mdx';

const Index: React.FC = () => (
  <Content nextPage="/about/" nextPageText="Next">
    <Markdown />
  </Content>
);

export default Index;
