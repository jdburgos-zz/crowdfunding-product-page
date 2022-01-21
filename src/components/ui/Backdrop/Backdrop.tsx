/** React core **/
import React from 'react';

/** Styles **/
import styles from './Backdrop.module.scss';

type BackdropProps = {
  onClose: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => (
  <div className={styles.backdrop} onClick={onClose} />
);

export default Backdrop;
