import React from 'react';
import * as styles from './card.css';

type Props = {
  className?: string;
  background?: boolean;
}

const defaultProps: Props = {
  className: '',
  background: false,
};

const Card: React.FC<Props> = ({ children, className, background }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

Card.defaultProps = defaultProps;

export default Card;
