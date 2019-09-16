//Search component

import './style.css'



//compont starts here: 

import React, { Component } from 'react'



export default class MovieCard extends Component {
constructor(props){
    super(props)
}

    render() {
        return (
            <div className="movie_container">
                movies
                <img className="movie_img" src="https://i5.walmartimages.com/asr/ca147144-3f07-4b81-a1b2-19393f283010_1.8fec4066e50b22dad947a4ab9b648e50.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"/>
                <div id="like_btn" onClick={()=>{
                    console.log("hey");
                    this.props.addToFavoritesBtn()
                    // console.log(addToFavoritesBtn);
                    
                    
                }}
                
            
            
              >

                </div>
            </div>
        )
    }
}
