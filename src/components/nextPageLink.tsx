import React from 'react';
import { Link } from 'gatsby';
import * as styles from './nextPageLink.css';

type Props = {
  to: string;
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const NextPageLink: React.FC<Props> = ({ children, to, className }) => (
  <Link className={`${styles.link} ${className}`} to={to}>{children}</Link>
);

NextPageLink.defaultProps = defaultProps;

export default NextPageLink;
