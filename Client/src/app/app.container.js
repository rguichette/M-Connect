import { connect } from 'react-redux'

import App from "./app"



const mapDispatchToProps=(dispatch)=>{
    
    return{



  }
  }
  const mapStateToProps = (state, ownProps) => {
//   console.log("app state is ", state.authReducer.signedIn);
  
    return {
        signedIn:state.authReducer.signedIn
    }
  }


  const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default MainApp