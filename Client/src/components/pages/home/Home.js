import React, { Component } from 'react'
import Header from '../../Header';
import Movie from '../../Movie/Movie';
// import MovieCard from '../../Movie';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./style.css"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div >
                            home page
                            

                            <div className="main_container">
                            
                                <div className="movies_container">
                                    <p>In Theaters</p>
                                    <Link to="in_theaters " className="extras_link">view all</Link>
                                    <div>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
                                        <Movie/>
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
                </div>
                </div>
                
                
       
        )
    }
}
