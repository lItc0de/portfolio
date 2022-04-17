import React from 'react';
import { Link } from 'gatsby';
import * as styles from './nextPageLink.css';

type Props = {
  to: string;
}

const NextPageLink: React.FC<Props> = ({ children, to }) => (
  <Link className={styles.link} to={to}>{children}</Link>
);

export default NextPageLink;
