import React, { Component } from 'react'

import "./style.css"
export default class Search extends Component {
    render() {
        return (
            <div className="search_container">
                
                    <input type="text" id="search_field"/>
                    <button onClick={()=>{
                        console.log("got clicked");
                        
                    }}>S</button>
                
            </div>
        )
    }
}
