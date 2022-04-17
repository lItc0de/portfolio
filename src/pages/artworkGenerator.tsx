import React from 'react';
import { graphql, Link } from 'gatsby';
import Card from '../components/card';
import { artworkGenerator } from '../styles/artworkGenerator.css';
import { routes } from '../utils/locationMapper';

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
    <div className={artworkGenerator}>
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

      <Link to={routes[3]}>Take me to the last project</Link>
    </div>
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
