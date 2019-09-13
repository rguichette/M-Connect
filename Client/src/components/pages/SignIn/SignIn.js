import React, { Component } from 'react'

import "./style.css"
export default class SignIn extends Component {

    render() {
        console.log("props",this.props);
        
        return (
            <div className="signInForm_container">
                
                <div className="signInForm">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button onClick={()=>{this.props.onSignIn()}}>Log In</button>

                </div>
               SignIn page 
            </div>
        )
    }
}
