import React from 'react';

import Content from '../components/content';
import BackgroundImages from '../components/backgroundImages';
import Markdown from '../markdown/mateLights/mateLights1.mdx';
import rotateGif from '../media/mateLights/rotate_gif.gif';

const MateLights: React.FC = () => (
  <>
    <title>Mate lights | Portfolio</title>
    <Content nextPage="/mateLights2/" nextPageText="Next">
      <Markdown />
    </Content>
    <BackgroundImages>
      <img src={rotateGif} alt="mate lights in action" />
    </BackgroundImages>
  </>
);

export default MateLights;
