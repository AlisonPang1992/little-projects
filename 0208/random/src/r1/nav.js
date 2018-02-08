import React,{Component} from 'react';


class Nav extends Component {
    click=()=>{
      let {changeSpan,id}=this.props;
      changeSpan(id)
    }

    render(){ 
      let {id,ele}=this.props
      let cName=ele.onoff?'active':''
      let text
      id==0?ele.c.forEach(e=>{if(e.check)text=e.c}):text=ele.c
      return (
            <span className={cName} onClick={this.click}>{text}</span>
      )
    } 
 }

export default Nav