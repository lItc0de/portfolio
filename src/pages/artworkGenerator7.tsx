import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/artworkGenerator/artworkGenerator7.mdx';

const ArtwortGenerator: React.FC = () => (
  <>
    <title>Artwork generator | Portfolio</title>
    <Content nextPage="/mateLights/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default ArtwortGenerator;
