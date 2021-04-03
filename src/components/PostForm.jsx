import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    // Call Action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Title :</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Body :</label>
            <br />
            <textarea
              type="text"
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
