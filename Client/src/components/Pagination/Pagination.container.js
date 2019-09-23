import { connect } from 'react-redux'
import Pagination from './Pagination'
import { nextPage } from '../../../Actions';


const mapDispatchToProps=(dispatch)=>{
    let current_page = 1; 
    //getting diff so we can add or sub on pagination
    let difference = null
    
    return{

        /**
         * @param nextNum -next number 
         * @param current_number - whatever the current number is
         */
    onSelect:(nextNum)=>{
        

      if(nextNum > current_page){
        difference = nextNum - current_page;
          current_page = nextNum
          dispatch(nextPage(difference))
          console.log("moving forward by ", difference);
          return difference;
      }
      if(nextNum < current_page){
        current_page = nextNum
           
          console.log("moving back");
          
      }

  },
    onMoveForward:()=>{
console.log("moving to page ", ++current_page);

console.log();

    },
    onMoveBackward:()=>{
        console.log("moving to page ", --current_page);

    }

  }
}
  const mapStateToProps = (state, ownProps) => {

  console.log("own props is ", ownProps);
  
    return {
        difference: state.navReducer.pageUpdateBy
    }
  }


  const MainPagination = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pagination)
  
  export default MainPagination