import React, { Component } from 'react'


import Search from '../Search'
import './style.css'


export default class Header extends Component {
    render() {
        return (
            <div className="header_container">
                
                
                <Burger/>
                <div className="menu">
                          menu here
                      </div>
                

                <Search/>
            </div>
        )
    }
}

//style={{backgroundColor: "#FF8899"}}

 class Burger extends Component {
    render() {
     
        return (
            
                <input id="nav_burger" type="checkbox"/>
             
          
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