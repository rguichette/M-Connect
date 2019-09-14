import { connect } from 'react-redux'

import Header from "./Header"
import { requestSignIn_btn, attempSignOut } from '../../../Actions'



const mapDispatchToProps=(dispatch)=>{
    
    return{
    onClickSignOut:()=>{
      dispatch(attempSignOut())
    }


  }
  }
  const mapStateToProps = (state, ownProps) => {
    // console.log("header set and state is ", state.authReducer.signedIn);

  console.log("header state is", state);
  
    return {
      signedIn: state.authReducer.signedIn,
    }
  }


  const MainHeader = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
  
  export default MainHeader