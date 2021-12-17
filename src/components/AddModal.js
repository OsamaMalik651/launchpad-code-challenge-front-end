import { useState, React } from "react";
import ReactDOM from "react-dom";

const AddModal = (props) => {
  const [title, setTitle] = useState(!props.post ? "" : props.post.title);
  const [body, setBody] = useState(!props.post ? "" : props.post.body);
  const [userID, setUserID] = useState(!props.post ? "" : props.post.userId);

  //function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClick({
      title: title,
      body: body,
      userId: userID,
    });
    props.show();
  };

  //Create Modal
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.show}>
      <div
        className="ui standard modal visibel active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header"> {props.action} Post</div>
        <div className="content">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label>User ID</label>
              <input
                type="number"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                placeholder={props.action === "Edit" ? props.post.userID : null}
              />
            </div>
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={props.action === "Edit" ? props.post.title : null}
              />
            </div>
            <div className="field">
              <label>Body</label>
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={props.action === "Edit" ? props.post.body : null}
              />
            </div>
          </form>
        </div>
        <div className="actions">
          <button className="ui primary button" onClick={handleSubmit}>
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
export default AddModal;
