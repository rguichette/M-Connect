//Search component

import './style.css'



//compont starts here:

import React, { Component } from 'react'



export default class MovieCard extends Component {
constructor(props){
    super(props)

}

    render() {
      // console.log("src is ", this.props.m_img_src);
        return (
            <div className="movie_container">
                movies
                <img className="movie_img" src={this.props.m_img_src}/>
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
//// TODO: make sure to add prop type
