import React, { Component } from 'react'

import "./style.css"
export default class SignIn extends Component {
    render() {
        return (
            <div className="signInForm_container">
                
                <div className="signInForm">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Log In</button>

                </div>
               SignIn page 
            </div>
        )
    }
}
