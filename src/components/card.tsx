import React from 'react';
import * as styles from './card.css';

type Props = {
  className?: string;
}

const defaultProps: Props = {
  className: '',
};

const Card: React.FC<Props> = ({ children, className }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

Card.defaultProps = defaultProps;

export default Card;
