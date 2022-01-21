/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  borderColor?: string;
  type?: number;
};

const Card: React.FC<CardProps> = ({ borderColor, type, children }) => {
  const brderColor = borderColor || 'lighten';
  const type2 = type ? styles[`card--type-2`] : '';

  return (
    <div className={`${styles.card} ${styles[`card--${brderColor}`]} ${type2}`}>{children}</div>
  );
};

export default Card;
