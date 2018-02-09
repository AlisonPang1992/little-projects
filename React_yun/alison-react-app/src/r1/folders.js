import React,{Component} from 'react';

class FolderS extends Component {
    dclick=()=>{
        let {id,treeMC}=this.props
        treeMC(id)
    }

    render(){
        let {id,pid,tittle}=this.props
        return (    
            <div className="file-item" onDoubleClick={this.dclick}>
            <img src={require("./img/folder-b.png")} alt="" />
            <span className="folder-name">{tittle}</span>
            <input type="text" className="editor"/>
            <i className="checked"></i>
            </div>
        )
    }
}

export default FolderS