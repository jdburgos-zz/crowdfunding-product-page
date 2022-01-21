/** React core **/
import React from 'react';

/** Styles **/
import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  value: number;
  className: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  const percentage = `${value}%`;
  return (
    <div className={`${styles['progress-bar']} ${className}`}>
      <div className={`${styles['progress-bar__control']}`} style={{ width: percentage }} />
    </div>
  );
};

export default ProgressBar;
