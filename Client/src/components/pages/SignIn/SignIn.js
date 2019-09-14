import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


import "./style.css"
export default class SignIn extends Component {

    render() {
        if(this.props.signedIn){
            console.log("here props",this.props);

        //     return <Router> <Redirect to="/" render={Home}/></Router>
            
          }
        
        return (
            <div className="signInForm_container">
                
                <div className="signInForm">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button onClick={()=>{this.props.onSignIn()
                
                }}>
                    
                    
                    
                    Log In</button>

                </div>
               SignIn page 
            </div>
        )
    }
}
