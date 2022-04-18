import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Portfolio',
    siteUrl: 'https://portfolio.litc0.de',
  },
  plugins: [
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: 'src/markdown',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Basti\'s portfolio',
        icon: 'src/images/icon.png',
        theme_color_in_head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};

export default config;
