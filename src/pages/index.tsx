import React from 'react';
import { graphql, Link } from 'gatsby';
import Card from '../components/card';
import { index, welcomeCard, aboutMeCard } from '../styles/index.css';
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

const IndexPage: React.FC<Props> = ({ data }) => {
  const welcome = data.allFile.nodes.find(({ name }) => name === 'welcome');
  const aboutMe = data.allFile.nodes.find(({ name }) => name === 'aboutMe');

  return (
    <>
      <title>Portfolio</title>
      <div className={index}>
        {welcome && (
        <Card className={welcomeCard}>
          <div
          // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: welcome.childMarkdownRemark.html,
            }}
          />
        </Card>
        )}

        {aboutMe && (
        <Card className={aboutMeCard}>
          <div
          // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: aboutMe.childMarkdownRemark.html,
            }}
          />
        </Card>
        )}
        <Link to={routes[1]}>Show me the Projects</Link>
      </div>
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
