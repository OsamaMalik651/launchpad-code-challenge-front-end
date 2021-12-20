import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPost, addPost } from "../actions";
import AddModal from "./AddModal";
import Post from "./Post";
import SearchBar from "./SearchBar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      action: "",
      placeholderText: "Enter User Id to search posts",
    };
  }
  componentDidMount() {
    //get all the posts
    this.props.fetchPosts();
  }
  //create notification message
  notify = () => toast("Succesfully Added Post");
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
  addPost = (data) => {
    this.props.addPost(data);
    if (this.props.status === 200 || 201) {
      this.notify();
    }
  };
  searchPosts = (id) => {
    this.props.fetchPost(id);
  };

  //function to render all the posts
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="ui segment" key={post.id}>
          <Post post={post} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui center aligned container">
        <SearchBar
          type="number"
          onClick={this.searchPosts}
          label="User Id"
          min="1"
          max="20"
        />
        <div className="ui segment">
          <button
            className="ui primary button "
            onClick={() => this.props.fetchPosts()}
          >
            Show All Posts
          </button>
          <button
            className="ui green button right"
            onClick={() => this.setAction("Add")}
          >
            Add Post
          </button>
        </div>

        <div
          className="ui segment"
          style={{ overflow: "auto", maxHeight: "90vh" }}
        >
          <div className="ui relaxed divided list">{this.renderList()}</div>
        </div>

        <ToastContainer />
        {this.state.show ? (
          <AddModal
            show={this.showModal}
            action={this.state.action}
            onClick={this.addPost}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, status: state.status };
};
export default connect(mapStateToProps, { fetchPosts, fetchPost, addPost })(
  PostList
);
