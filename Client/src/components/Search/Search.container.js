import { connect } from 'react-redux'

import Search from "./Search"

const mapDispatchToProps=(dispatch)=>{
    return{


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