import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticateRoute from './AuthenticateRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticateRoute path="/logout" component={LogoutComponent} />
              <AuthenticateRoute path="/welcome/:name" component={WelcomeComponent} />
              <AuthenticateRoute path="/todos" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return (
    <div>
      <h1>This is a error message page, Something went wront!</h1>
    </div>
  );
}



export default TodoApp;

