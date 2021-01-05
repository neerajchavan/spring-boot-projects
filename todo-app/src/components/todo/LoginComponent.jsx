import React, { Component } from "react";
import AutheticationService from "./AutheticationService.js";

class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: "neeraj",
        password: "",
        showSuccessMessage: false,
        hasLoginFailed: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
  
    handleChange(event) {
      console.log(event.target.name);
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    loginClicked() {
      if (this.state.userName === "neeraj" && this.state.password === "neeraj123") {
        AutheticationService.registerSuccesfullLogin(this.state.userName);
        this.props.history.push(`/welcome/${this.state.userName}`);
      } 
      else {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      }
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container mt-4">
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            {this.state.showSuccessMessage && <div>Login Succesfull!</div>}
            User Name :{" "}
            <input
              type="text"
              name="userName"
              value={this.props.userName}
              onChange={this.handleChange}
              className="mr-2"
            />
            Password :{" "}
            <input
              type="password"
              name="password"
              value={this.props.password}
              onChange={this.handleChange}
              className="mr-2"
            />
            <button className="btn btn-success" onClick={this.loginClicked}>
              Login
            </button>
          </div>
        </div>
      );
    }
  }

  export default LoginComponent;
  