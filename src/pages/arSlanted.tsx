import React from 'react';

import Content from '../components/content';
import BackgroundImages from '../components/backgroundImages';

import Markdown from '../markdown/arSlanted/arSlanted1.mdx';
import coverImage from '../media/arSlanted/cover.webp';

const ArSlanted: React.FC = () => (
  <>
    <Content nextPage="/arSlanted2/" nextPageText="Next">
      <Markdown />
    </Content>
    <BackgroundImages>
      <img src={coverImage} alt="slanted cover" />
    </BackgroundImages>
  </>
);

export default ArSlanted;
