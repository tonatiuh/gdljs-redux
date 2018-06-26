import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoRedux from './todo_redux';
import TodoReact from './todo_react';

const Demos = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Todo App with React & Redux</Link>
        </li>
        <li>
          <Link to="/todo-react-only">Todo App with React only</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={TodoRedux} />
      <Route exact path="/todo-react-only" component={TodoReact} />
    </div>
  </Router>
);

export default Demos;
