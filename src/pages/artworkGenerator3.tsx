import React from 'react';

import Content from '../components/content';
import BackgroundImages from '../components/backgroundImages';
import Markdown from '../markdown/artworkGenerator/artworkGenerator3.mdx';
import webpage from '../media/artworkGenerator/webpage.webp';

const ArtwortGenerator: React.FC = () => (
  <>
    <title>Artwork generator | Portfolio</title>
    <Content nextPage="/artworkGenerator4/" nextPageText="Next">
      <Markdown />
    </Content>
    <BackgroundImages>
      <img src={webpage} alt="look of the website" />
    </BackgroundImages>
  </>
);

export default ArtwortGenerator;
