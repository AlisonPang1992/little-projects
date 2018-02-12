import React,{Component} from 'react';

class FolderNav extends Component {
    click=()=>{
        let {id,treeMC}=this.props;
        treeMC(id)
    }


    render(){
        let {id,pid,tittle,onoff}=this.props
        return (    
            onoff?<span href="javascript:;">{tittle}</span>:<a href="javascript:;" onClick={this.click}>{tittle}</a>
        )
    }
}

export default FolderNav