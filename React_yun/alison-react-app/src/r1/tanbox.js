import React,{Component} from 'react';

class TanboxM extends Component {
    del=()=>{
        let {del,changedelete,changetext}=this.props
        console.log(this.props)
        del()
        changedelete()
        setTimeout(function(){
            changetext('删除成功！')
        },10)
    }

    quit=()=>{
        let {del,changedelete}=this.props
        changedelete()
    }


    render(){

        return (
            <div className="tanbox" style={{display:this.props.dele?'block':'none'}} >
                <div className="conf">
                    <i className="close-ico" onClick={this.quit}>X</i>
                    <h3 className="conf-title">删除文件</h3>
                    <div className="conf-content">
                        确定要删除文件吗？
                    </div>
                    <div className="conf-btn">
                        <a href="javascript:;" onClick={this.del}>确定</a>
                        <a href="javascript:;" onClick={this.quit}>取消</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TanboxM