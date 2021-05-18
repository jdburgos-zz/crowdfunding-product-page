/** React core **/
import React from 'react';
import ReactDOM from 'react-dom';

/** Components **/
import Backdrop from '../Backdrop/Backdrop';
import Overlay from '../Overlay/Overlay';

const Modal = (props) => (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
  </React.Fragment>
);

export default Modal;
