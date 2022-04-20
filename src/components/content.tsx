import React from 'react';
import * as styles from './content.css';

import NextPageLink from './nextPageLink';

type Props = {
  nextPage: string;
  nextPageText: string;
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const Content: React.FC<Props> = ({
  children, nextPage, nextPageText, className,
}) => (
  <main className={`${className} ${styles.content}`}>
    {children}
    {/* <NextPageLink to={nextPage} className={styles.nextPageLink}>
      {nextPageText}
    </NextPageLink> */}
  </main>
);

Content.defaultProps = defaultProps;

export default Content;
