import React from 'react';

import Content from '../components/content';
import example from '../media/artworkGenerator/artwork2.webp';

const ArtwortGenerator: React.FC = () => (
  <>
    <title>Artwork generator | Portfolio</title>

    <Content nextPage="/artwortGenerator7/" nextPageText="Next">
      <img src={example} alt="artwork example #2" />
      <p>artwork example #2</p>
    </Content>
  </>
);

export default ArtwortGenerator;
