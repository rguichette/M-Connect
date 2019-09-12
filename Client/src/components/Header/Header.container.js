import { connect } from 'react-redux'

import Header from "./Header"



const mapDispatchToProps=(dispatch)=>{
    console.log("header set");
    
    return{



  }
  }
  const mapStateToProps = (state, ownProps) => {
  // console.log("state is", state);
  
    return {
  
    }
  }


  const MainHeader = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
  
  export default MainHeader