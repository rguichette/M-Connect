import { connect } from 'react-redux'

import SignUp from "./SignUp"



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


  const SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
  
  export default SignUpForm