import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/arSlanted/arSlanted6.mdx';

const ArSlanted: React.FC = () => (
  <>
    <title>Augmented Reality | Portfolio</title>

    <Content nextPage="/arSlanted7/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default ArSlanted;
