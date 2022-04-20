import React from 'react';

import Content from '../components/content';
import webpage from '../media/artworkGenerator/webpage.webp';

const ArtwortGenerator: React.FC = () => (
  <>
    <title>Artwork generator | Portfolio</title>

    <Content nextPage="/artwortGenerator5/" nextPageText="Next">
      <img src={webpage} alt="artwork website" />
      <p>artwork website</p>
    </Content>
  </>
);

export default ArtwortGenerator;
