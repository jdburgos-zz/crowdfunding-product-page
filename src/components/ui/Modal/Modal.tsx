/** React core **/
import React from 'react';
import ReactDOM from 'react-dom';

/** Components **/
import Backdrop from '../Backdrop/Backdrop';
import Overlay from '../Overlay/Overlay';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const backdrop = document.getElementById('backdrop') as HTMLElement;
  const overlay = document.getElementById('overlay') as HTMLElement;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, backdrop)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, overlay)}
    </React.Fragment>
  );
};

export default Modal;
