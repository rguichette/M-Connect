import { connect } from 'react-redux'

import Movie from "./Movie"

const mapDispatchToProps=(dispatch)=>{
    return{
    onSelect:()=>{
  console.log("opening more information about the movie");
  
  },

  onAddToFavorites:()=>{
console.log("adding movie to favorites");

  }
  }
  }
  const mapStateToProps = (state, ownProps) => {
  // console.log("state is", state);
  
    return {
  
    }
  }


  const MovieCard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie)
  
  export default MovieCard