import React, { Component } from "react";
import AddModal from "./AddModal";

import { editPost, deletePost } from "../actions";
import { connect } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";

class Post extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.state = {
      show: false,
      action: " ",
    };
  }
  notifyEdit = () => toast("Succesfully updated Post");
  notifyDelete = () => toast("Succesfully deleted Post");
  setAction = (action) => {
    this.setState({
      action: action,
    });
    this.showModal();
  };
  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  editPost = (data) => {
    this.props.editPost(this.props.post.id, data);
    if (this.props.status === 200 || 201) {
      this.notifyEdit();
    }
  };

  deletePost = () => {
    this.props.deletePost(this.props.post.id);
    if (this.props.status === 200 || 201) {
      this.notifyDelete();
    }
  };

  render() {
    return (
      <div className="item">
        <i className="</Provider>">
          <div className="content">
            <div className="description">
              <h2> {this.props.post.title}</h2>
              <p>{this.props.post.body}</p>
              <p>User ID: {this.props.post.userId}</p>
            </div>
          </div>
          <div className="">
            <button
              className="ui grey button"
              onClick={() => this.setAction("Edit")}
            >
              Edit
            </button>
            <button
              className="ui red button"
              onClick={() => this.setAction("Delete")}
            >
              Delete
            </button>
            {this.state.show && this.state.action === "Delete" ? (
              <DeleteModal
                show={this.showModal}
                post={this.props.post}
                action={this.state.action}
                onClick={this.deletePost}
              />
            ) : null}
            {this.state.show && this.state.action === "Edit" ? (
              <AddModal
                show={this.showModal}
                post={this.props.post}
                action={this.state.action}
                onClick={this.editPost}
              />
            ) : null}
          </div>
        </i>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts, status: state.status };
};

export default connect(mapStateToProps, { editPost, deletePost })(Post);
