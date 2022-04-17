import React from 'react';
import { graphql, Link } from 'gatsby';
import Card from '../components/card';
import { mateLights } from '../styles/mateLights.css';
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

const MateLights: React.FC<Props> = ({ data }) => {
  const description = data.allFile.nodes.find(({ name }) => name === 'mateLights');

  return (
    <div className={mateLights}>
      <title>Mate lights | Portfolio</title>
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

      <Link to={routes[0]}>Take me back to the start</Link>
    </div>
  );
};

export const query = graphql`
  {
    allFile(filter: {name: {in: ["mateLights"]}}) {
    nodes {
      name
      childMarkdownRemark {
        html
      }
    }
  }
  }
`;

export default MateLights;
