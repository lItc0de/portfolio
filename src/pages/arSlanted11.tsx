import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/arSlanted/arSlanted11.mdx';

const ArSlanted: React.FC = () => (
  <>
    <title>Augmented Reality | Portfolio</title>

    <Content nextPage="/artworkGenerator/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default ArSlanted;
