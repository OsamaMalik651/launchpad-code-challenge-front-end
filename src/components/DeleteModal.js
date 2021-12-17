import React from "react";
import ReactDOM from "react-dom";

const DeleteModal = (props) => {
  const onDelete = () => {
    props.onClick();
    props.show();
  };

  return ReactDOM.createPortal(
    <div onClick={props.show} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.action} Post</div>
        <div className="content">
          <p>userId : {props.post.userId}</p>
          <p>title : {props.post.title}</p>
          <p>body : {props.post.body}</p>
        </div>
        <div className="actions">
          <button onClick={onDelete} className="ui primary button">
            {props.action}
          </button>
          <button className="ui button" onClick={props.show}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default DeleteModal;
