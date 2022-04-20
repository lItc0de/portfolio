import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/end.mdx';

const Index: React.FC = () => (
  <>
    <title>Portfolio</title>

    <Content nextPage="/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default Index;
