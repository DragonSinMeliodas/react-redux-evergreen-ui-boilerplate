import React, { Component } from "react";
import Posts from "./components/Posts";
import "./App.css";
import PostForm from "./components/PostForm";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}
