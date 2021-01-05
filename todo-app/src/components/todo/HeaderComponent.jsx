import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AutheticationService from "./AutheticationService.js";
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
  
      const isUserLoggedIn = AutheticationService.isUserLoggedIn();
      console.log(isUserLoggedIn)
  
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a className="navbar-brand">TodoApp</a>
            </div>
            <ul className="navbar-nav">
              {isUserLoggedIn && <li className="nav-link"><Link to="/welcome/neeraj">Home</Link></li>}
              {isUserLoggedIn && <li className="nav-link"><Link to="/todos">Todo's</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li>}
              {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AutheticationService.logout}>Logout</Link></li>}
            </ul>
          </nav>
        </header>
      );
    }
  }

  export default withRouter(HeaderComponent);