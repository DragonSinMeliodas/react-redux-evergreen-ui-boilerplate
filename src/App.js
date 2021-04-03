import React, { Component } from "react";
import Posts from "./components/Posts";
import "./App.css";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}
