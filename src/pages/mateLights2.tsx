import React from 'react';

import Content from '../components/content';
import rotateGif from '../media/mateLights/rotate_gif.gif';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>

    <Content nextPage="/mateLights3/" nextPageText="Next">
      <img src={rotateGif} alt="mate lights in action" />
      <p>mate lights</p>
    </Content>
  </>
);

export default MateLights;
