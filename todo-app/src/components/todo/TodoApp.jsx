import React, { Component } from 'react';


class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <h1>Hello, Trial!</h1>
                <LoginComponent />
            </div>
        );
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "neeraj",
            password: '',
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        if (this.state.userName === "neeraj" && this.state.password === 'neeraj123') {
            console.log("Succesfull!")
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Succesfull!</div>}
                User Name : <input type="text" name="userName" value={this.props.userName} onChange={this.handleChange} />
                Password : <input type="password" name="password" value={this.props.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

export default TodoApp;
