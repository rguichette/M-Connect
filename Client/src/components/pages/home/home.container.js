import { connect } from 'react-redux'
import Home from './Home';
import { fetchTheaters, fetchUpcoming } from '../../../../Actions';





const mapDispatchToProps=(dispatch)=>{
    console.log("header set");
    dispatch(fetchTheaters());
    dispatch(fetchUpcoming())
    return{
        goToInTheaters:()=>{
            console.log("viewing all in theaters");
            dispatch(fetchTheaters())
        }


  }
  }
  const mapStateToProps = (state, ownProps) => {

// console.log("state from home is ", state.searchReducer);

    return {
      theaters_browseData: state.searchReducer.theaters_browseData,
      upcoming_browseData: state.searchReducer.upcomingbrowseData

    }


  }


  const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)

  export default HomePage
