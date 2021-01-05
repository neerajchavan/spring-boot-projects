import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      welcomeMessage : ''
    }
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
  }
    render() {
      return (
        <div className="mt-2">
          <h1>Welcome</h1>
          <div className="container">
            <h4>
              Welcome Page, Hello {this.props.match.params.name}, Manage your
              todo's <Link to="/todos">here</Link>
            </h4>
          </div>
          <div className="container">
            <h4>
              Click here for custom welcome message
              <button onClick={this.retrieveWelcomeMessage} className="btn btn-warning">Get Message</button>
            </h4>
          </div>
          <div className="container">
            <h2>
              {this.state.welcomeMessage}
            </h2>
          </div>
        </div>
      );
    }
    retrieveWelcomeMessage(){
      HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccessResponse(response))
      //.catch()
    }

    handleSuccessResponse(response){
      this.setState({welcomeMessage : response.data})
    }
  }

export default WelcomeComponent;