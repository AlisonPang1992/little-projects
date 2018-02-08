import React,{Component} from 'react';


class List extends Component {
    render(){ 
      let {url,text}=this.props     
      return (
            <li>
              <img src={require(''+url)}/>
              <p>{this.props.text}</p>
            </li>
      )
    } 
 }

export default List