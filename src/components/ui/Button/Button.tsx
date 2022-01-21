/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

type ButtonProps = {
  disable?: boolean;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ disable, className, children, onClick }) => {
  const disableClass = disable ? styles[`button--disable`] : '';

  return (
    <button
      onClick={onClick}
      disabled={!!disableClass}
      className={`${styles.button} ${className} ${disableClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
