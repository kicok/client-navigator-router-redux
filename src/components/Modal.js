import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (porps) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        //  e.stopPropagation() 을 이용해서  부모태그로부터 이벤트가 전파되는것을 막는다.
        // 결국 바탕화면을 클릭할때만  history.push('/')가 실행된다.
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you suer you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
