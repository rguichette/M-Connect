import { connect } from 'react-redux'

import Search from "./Search"
import { attemptSearch } from '../../../Actions'

const mapDispatchToProps=(dispatch)=>{
    return{
      performSearch:(val)=>{
dispatch(attemptSearch(val))
      }

  }
  }
  const mapStateToProps = (state, ownProps) => {
  // console.log("state is", state);
  
    return {
  
    }
  }


  const Searchbar = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
  
  export default Searchbar