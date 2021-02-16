import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        //  e.stopPropagation() 을 이용해서  부모태그로부터 이벤트가 전파되는것을 막는다.
        // 결국 바탕화면을 클릭할때만  history.push('/')가 실행된다.
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
