import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (porps) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        dasdfsadfs dfsadgasgsad
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
