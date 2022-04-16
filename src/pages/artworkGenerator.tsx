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

const ArtworkGenerator: React.FC<Props> = ({ data }) => {
  const description = data.allFile.nodes.find(({ name }) => name === 'artworkGenerator');

  return (
    <>
      <title>Artwork generator | Portfolio</title>
      {description && (
      <Card>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </Card>
      )}
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: {name: {in: ["artworkGenerator"]}}) {
    nodes {
      name
      childMarkdownRemark {
        html
      }
    }
  }
  }
`;

export default ArtworkGenerator;
