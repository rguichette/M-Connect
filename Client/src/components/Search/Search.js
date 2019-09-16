import React, { Component } from 'react'

import "./style.css"
export default class Search extends Component {
    render() {
        let searchVal= null;
        return (
            <div className="search_container">
                
                    <input type="text" id="search_field" onChange={(e)=>{
                        // console.log(e.target.value);
                        searchVal = e.target.value
                    }}/>
                    <button onClick={()=>{
                        console.log("got clicked with ", searchVal);
                        this.props.performSearch(searchVal)
                    }}>S</button>
                
            </div>
        )
    }
}
