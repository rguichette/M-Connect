import { connect } from 'react-redux'

import App from "./app"



const mapDispatchToProps=(dispatch)=>{
    
    return{



  }
  }
  const mapStateToProps = (state, ownProps) => {
  
    return {
  
    }
  }


  const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default MainApp