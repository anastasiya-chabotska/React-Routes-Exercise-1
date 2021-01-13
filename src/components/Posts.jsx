import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

//components
import Post1 from "./Post1";

const Posts = (props) => {
  return (
    <Router>
      <div className="posts">
        <h2>Posts</h2>
        <ul>
          <li>
            <Link to="/posts/1">Post 1</Link>
          </li>
          <li>
            <Link to="/posts/2">Post 2</Link>
          </li>
          <li>
            <Link to="/posts/3">Post 3</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/posts/:id" component={Post1} />
      </Switch>
    </Router>
  );
};

export default Posts;
