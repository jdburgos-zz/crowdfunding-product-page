/** Components **/
import React, { ForwardedRef } from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  ref: ForwardedRef<HTMLInputElement>;
  error: boolean;
  className: string;
  input: { id: string; type: string; min: number; defaultValue: number };
  onChange: () => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, input, onChange }, ref: ForwardedRef<HTMLInputElement>) => {
    const errorClass = error ? styles.error : '';

    return (
      <input
        onChange={onChange}
        className={`${styles.input} ${className} ${errorClass}`}
        ref={ref}
        {...input}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
