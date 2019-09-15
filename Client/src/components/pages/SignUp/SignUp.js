import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


import "./style.css"
export default class SignUp extends Component {
    render() {
        return (
            <div className="signUp_container">
                <form method="none">
                <div className="input_fields">
                    
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
                <input type="email" placeholder="email"/>
                <input type="type" placeholder="username"/>

                
                <input id="password_signup" type="password" placeholder="password"/>
                <input id="password_signup_varify" type="password" placeholder="password Verify"/>
                


                </div>
                <button type="button" >submit</button>
                <Link to="/signin">Sign in instead</Link>
                </form>
                
            </div>
        )
    }
}
