import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/card';

type Props = {
  data: {
    allFile: {
      nodes: {
        name: string;
        childMarkdownRemark: {
          html: string;
        }
      }[]
    }
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const welcome = data.allFile.nodes.find(({ name }) => name === 'welcome');
  const aboutMe = data.allFile.nodes.find(({ name }) => name === 'aboutMe');

  return (
    <>
      <title>Portfolio</title>

      {welcome && (
      <Card>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: welcome.childMarkdownRemark.html,
          }}
        />
      </Card>
      )}

      {aboutMe && (
      <Card>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: aboutMe.childMarkdownRemark.html,
          }}
        />
      </Card>
      )}
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: {name: {in: ["aboutMe", "welcome"]}}) {
    nodes {
      name
      childMarkdownRemark {
        html
      }
    }
  }
  }
`;

export default IndexPage;
