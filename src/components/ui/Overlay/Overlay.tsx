/** React core **/
import React from 'react';

/** Components **/
import Card from '../Card/Card';

/** Styles **/
import styles from './Overlay.module.scss';

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <Card>{children}</Card>
    </div>
  );
};

export default Overlay;
