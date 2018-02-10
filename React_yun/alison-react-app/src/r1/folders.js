import React,{Component} from 'react';

class FolderS extends Component {
    constructor(props) {
        super(props)
        this.state={
            active:false
        }
        
    }
    cName="file-item "
    iname=''
    componentWillMount(){
        let {id,arrChange}=this.props
        arrChange(id,false)
        this.setState({
            active:false
        });
    }
    iclick=()=>{
        let {id,arrChange}=this.props
        arrChange(id,!this.state.active)
        this.cName="file-item "+ (!this.state.active?'active':'')
        this.iname=(!this.state.active?'checked':'')
        this.setState({
            active:!this.state.active
        });
    }

    dclick=()=>{
        let {id,treeMC}=this.props
        treeMC(id)
    }

    render(){
        let {id,pid,tittle,arrChange,onoff}=this.props
        
        return (    
            <div className={onoff?'file-item active':'file-item'} onDoubleClick={this.dclick}>
            <img src={require("./img/folder-b.png")} alt="" />
            <span className="folder-name ">{tittle}</span>
            <input type="text" className="editor"/>
            <i className={onoff?'checked':''} onClick={this.iclick}  ></i>
            </div>
        )
    }
}

export default FolderS