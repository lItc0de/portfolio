import React from 'react';
import { graphql, Link } from 'gatsby';
import Card from '../components/card';
import { routes } from '../utils/locationMapper';
import { arSlanted, videoClass } from '../styles/arSlanted.css';
import video from '../data/slanted.webm';

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

const ArSlanted: React.FC<Props> = ({ data }) => {
  const description = data.allFile.nodes.find(({ name }) => name === 'arSlanted');

  return (
    <div className={arSlanted}>
      <title>Augmented Reality | Portfolio</title>
      <video className={videoClass} src={video} muted autoPlay loop />

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

      <Link to={routes[2]}>Take me to the next project</Link>
    </div>
  );
};

export const query = graphql`
  {
    allFile(filter: {name: {in: ["arSlanted"]}}) {
    nodes {
      name
      childMarkdownRemark {
        html
      }
    }
  }
  }
`;

export default ArSlanted;
