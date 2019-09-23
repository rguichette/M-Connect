import React, { Component } from 'react'

import './style.css'

export default class Pagination extends Component {

    
    render() {
        let t = 0 ;
        let difference = 0; 
        if(this.props.difference){
            console.log();
            console.log("difff is ", this.props.difference);
            difference = this.props.difference
        }

       
        return (
            <div>
                <div onClick={(e)=>{
                    console.log("e target is: ",e.target.text);
                    let selectedPage = e.target.text
                    
                   this.props.onSelect(selectedPage, null, diffence)
                    
                   keepSteady(e.target.text)
                    
                }} className="pagination">
  <a href="#" onClick={()=>{
      this.props.onMoveBackward()
  }}>&laquo;</a>

  <a href="#">1</a>
  <a href="#">{2 }</a>
  <a href="#">{3 + difference}</a>
  <a href="#">{4 + difference}</a>
  <a href="#">{5 + difference}</a>
  <a href="#">{6 + difference}</a>
  <a href="#">{7 + difference}</a>
  <a href="#">{8 + difference}</a>
  <a href="#">{9 + difference}</a>
  <a href="#">{10 + difference}</a>

  <a href="#" onClick={()=>{
      this.dif = this.props.onMoveForward()
  }}>&raquo;</a>
</div>
            </div>
        )
    }
}

let currnt_page =null;
let prev_page = null;

function keepSteady(target,num, diffence){

    console.log("test is targ: ", target);
    console.log("test is num: ", num);
    console.log("test is difference: ", diffence);

}

function prevPage(){
    
}