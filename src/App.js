import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

//components
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Welcome</h1>

        <div class="nav">
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
