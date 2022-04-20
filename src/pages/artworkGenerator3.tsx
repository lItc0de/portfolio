import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/artworkGenerator/artworkGenerator3.mdx';

const ArtwortGenerator: React.FC = () => (
  <>
    <title>Artwork generator | Portfolio</title>
    <Content nextPage="/artworkGenerator4/" nextPageText="Next">
      <Markdown />
    </Content>
  </>
);

export default ArtwortGenerator;
