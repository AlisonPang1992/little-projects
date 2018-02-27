import React,{Component} from 'react';

class FolderS extends Component {
    constructor(props) {
        super(props)
        this.state={
            active:false,
            txt:this.props.tittle
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
        let {id,arrChange,onoff}=this.props
        arrChange(id,!onoff)
        this.setState({
            active:!onoff
        });
    }

    dclick=()=>{
        let {id,treeMC}=this.props
        treeMC(id)
    }
    yaya=()=>{
        this.textInput.focus();
    }
    blur=()=>{
        let {changeChoose,choose,changetext,data}=this.props
        for(var attr in data){         
            if(data[attr].title==this.refs.myInput.value&&attr!=choose&&data[attr].pid==data[choose].pid){
                changetext('不能为重复名字')
                this.refs.myInput.focus()
                return
            }
        }
        changeChoose(choose,this.refs.myInput.value)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            txt:this.props.tittle
        });
        setTimeout(()=>{
            this.refs.myInput.selectionStart = this.refs.myInput.value.length
            this.refs.myInput.focus()        
        })      
    }
    change=(ev)=>{
        this.setState({
            txt:ev.target.value
        });
    }
    render(){
        let {id,pid,tittle,arrChange,onoff,choose}=this.props       
        return (    
            <div className={onoff?'file-item active':'file-item'} onDoubleClick={this.dclick}>
            <img src={require("./img/folder-b.png")} alt="" />
            <span className="folder-name " style={{display:choose==id?'none':'block'}}  >{tittle}</span>
            <input type="text" className="editor"  style={{display:choose==id?'block':'none'}} 
            ref='myInput'           
            onBlur={this.blur}
            value={this.state.txt}
            onChange={this.change}
             />
            <i className={onoff?'checked':''} onClick={this.iclick}  ></i>
            </div>
        )
    }
}

export default FolderS