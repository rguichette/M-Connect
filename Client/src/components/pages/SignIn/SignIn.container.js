import { connect } from 'react-redux'

import SignIn from "./SignIn"
import { attemptSignIn } from '../../../../Actions';



const mapDispatchToProps=(dispatch)=>{
    console.log("header set");
    
    return{
      onSignIn:()=>{ dispatch(attemptSignIn())}


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