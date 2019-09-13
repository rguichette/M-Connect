import { connect } from 'react-redux'

import SignIn from "./SignIn"



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


  const SignInForm = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
  
  export default SignInForm