import React,{Component} from 'react';


class List extends Component {
    constructor(){
      super();
      this.state={
      }
    }

    click =()=>{
      let {id,changeC,rOl}=this.props
      changeC(rOl,id)
    }
    
    render(){ 
      let {click}=this.props
      let cName=click?'item-li active':'item-li'
      console.log(cName)       
      return (
            <li className={cName} onClick={this.click} >
                <a href="javascript:;">
                    <span className="point"></span><span className="text">{this.props.txt}</span>
                </a>
            </li>
      )
    } 
 }

export default List