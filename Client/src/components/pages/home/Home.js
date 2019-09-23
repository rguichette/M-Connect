import React, { Component } from 'react'
import Header from '../../Header';
import Movie from '../../Movie';
// import MovieCard from '../../Movie';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./style.css"
import Pagination from '../../Pagination';
import { POSTER_BASE_URL, API_KEY } from '../../../../shared_files/apiDetails';

export default class Home extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {

      let movieData;

       if(this.props.movieData){
         movieData = this.props.movieData.slice(0,6)
       }else{
         movieData=[];
       }
        return (
            <div>
                <Header/>
                <div >

                            home page


                            <div className="main_container">

                                <div className="movies_container">
                                    <p>In Theaters</p>
                                    <Link to="in_theaters " className="extras_link" onClick={()=>{

                                        // console.log("this is...", this.props);
                                        this.props.goToInTheaters();

                                    }}>view all</Link>
                                    <div>
                                    {
      // console.log("mdata =", movieData),

      movieData.map((item, i)=>{
        console.log("mdata...", i)
        return <Movie m_img_src={`${POSTER_BASE_URL}/${item.poster_path}`}/>

      })}


                                    </div>
                                </div>


                                <div className="movies_container">
                                    <p>coming soom</p>
                                    <Link to="coming_soon " className="extras_link">view all</Link>
                                    <div>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>

                                    </div>
                                </div>


                            </div>
                            <div>
                                <Pagination/>
                            </div>
                </div>
                </div>



        )
    }
}
