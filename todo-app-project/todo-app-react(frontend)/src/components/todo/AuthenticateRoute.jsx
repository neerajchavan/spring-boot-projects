import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";
import AutheticationService from './AutheticationService.js';

class AuthenticateRoute extends Component{
    render() {
             if(AutheticationService.isUserLoggedIn){
                return <Route {...this.props}/> 
             }
             else{
                 return  <Redirect to="/login"/>
             }
    }
}

export default AuthenticateRoute