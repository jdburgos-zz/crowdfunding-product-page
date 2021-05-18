/** React core **/
import React from 'react';
import ReactDOM from 'react-dom';

/** Components **/
import Backdrop from '../Backdrop/Backdrop';
import Overlay from '../Overlay/Overlay';

/** Styles **/
import styles from './Modal.module.scss';

const Modal = (props) => (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop'))}
    {ReactDOM.createPortal(
      <Overlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />,
      document.getElementById('overlay')
    )}
  </React.Fragment>
);

export default Modal;
