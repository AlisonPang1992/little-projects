import React,{Component} from 'react';
import TreeM from './tree_menu'

class ZhezhaoM extends Component {
    constructor(props){
        super(props)
        this.state=({
            list: this.props.renderdata()        
        })
    }
    quit=()=>{
        let {changemove}=this.props
        changemove()
    }
    sure=()=>{
        let {movep,data,moveid,removeY}=this.props
        console.log(movep,moveid)
        removeY(moveid)
        

    }
    render(){
        let {data,movep}=this.props
        let ll=data[movep]
        return (
            <div className='zhezhao' style={{display:this.props.remove?'block':'none'}}>
                    <div className="modal-tree">
                            <h2>选择存储位置</h2>
                            <p className="folderName">我的文档</p>
                            <div className="content">
                                <ul>
                                    {this.props.renderdata() }
                                </ul>                                
                            </div>
                            <div className="footer">
                                <input type="button" name="" className="cancel" value="取消" onClick={this.quit} />
                                <input type="button" name="" className ="ok" value="确定" onClick={this.sure} />
                                <p className="tip">{movep}</p>
                            </div>
                            <i className="icon_close" onClick={this.quit} ></i>
                    </div>
            </div>
        )
    }
}

export default ZhezhaoM