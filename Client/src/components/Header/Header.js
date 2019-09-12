import React, { Component } from 'react'


import Search from '../Search'
import './style.css'


export default class Header extends Component {
    render() {
        return (
            <div className="header_container">
                
                <Search/>
                <Burger/>
            </div>
        )
    }
}

//style={{backgroundColor: "#FF8899"}}

 class Burger extends Component {
    render() {
     
        return (
            <div id="nav_burger">
                
                <svg width="30" height="20" >
                <g fill="none">
                    <path stroke="black" d="M5 10 l215 0" />
                    <path stroke="black" d="M5 15 l215 0" />
                    <path stroke="black" d="M5 20 l215 0" />
                </g>

                </svg>
            </div>
        )
    }
}
