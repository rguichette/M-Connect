import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router";


import Search from '../Search'
import './style.css'


export default class Header extends Component {
    render() {
        if(!this.props.signedIn){
            console.log("hot not");
            
            return(
            
            
            
            <div className="header_container">

            <Burger/>
            <Search/>
            <button id="sign_In_btn">  <Link to="/signIn">Sign in</Link> </button>

            </div>
            
            
            )
        
        
        
        }

        return (
            <div className="header_container">


            <Burger/>
          

                <Search/>
                <div className="right_profile_btn">
                    <input type="checkbox" />
                    <div className="right_menu">
                        <Link to="/profile">Profile</Link>
                        <Link to="/settings">Settings</Link> 
                        <p onClick={()=>{this.props.onClickSignOut()
                        }}>sign out</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

//style={{backgroundColor: "#FF8899"}}

 class Burger extends Component {
    render() {
            console.log("checked reload");
            
            var t = null;
           

            
            
        return (

                <div className="full_menu">
                  
                <input id="nav_burger" type="checkbox"/>
                <div className="menu">

                  <p>menu here</p>

                  <ul>
                      <li>
                          <Link to="/favorites">fa</Link>
                      </li>
                      <li>
                          <Link to="/friends">fr</Link>
                      </li>
                      <li>
                          <Link to="/history">his</Link>
                      </li>
                      <li>
                          <Link to="/liked">Liked</Link>
                      </li>
                      <li>
                          <Link to="/saved_searches">saved Searches</Link>
                      </li>
                      <li>
                          <Link to="/watch_list">wa</Link>
                      </li>
                  </ul>




                  
              </div>

</div>

        )
    }
}



{/* <svg width="20" height="21" >
<g fill="none">
    <path stroke="black" d="M5 10 l215 0" />
    <path stroke="black" d="M5 15 l215 0" />
    <path stroke="black" d="M5 20 l215 0" />
</g>

</svg>


    <div id="nav_burger">
                <input id="nav_burger" type="checkbox"/>

            </div>

*/}

// export default withRouter(Header)
