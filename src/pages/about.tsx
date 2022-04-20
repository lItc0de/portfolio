import React from 'react';

import Content from '../components/content';
import Markdown from '../markdown/about.mdx';

const About: React.FC = () => (
  <Content nextPage="/arSlanted/" nextPageText="Next">
    <Markdown />
  </Content>
);

export default About;
