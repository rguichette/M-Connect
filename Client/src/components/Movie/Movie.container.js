import { connect } from 'react-redux'
import {addToFavorites} from '../../../Actions'
import MovieCard from "./Movie"

const mapDispatchToProps=(dispatch)=>{
    return{

    onSelect:()=>{
      
    console.log("opening more information about the movie");
  
    },

    addToFavoritesBtn:()=>{
    
      // console.log("adding movie to favorites");
      dispatch(addToFavorites())
    }
  }
  }
  const mapStateToProps = (state, ownProps) => {
  // console.log("state is", state);
  
    return {
  
    }
  }


  const Movie = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
  
  export default Movie