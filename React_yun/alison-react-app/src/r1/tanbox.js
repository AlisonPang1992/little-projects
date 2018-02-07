import React,{Component} from 'react';

class TanboxM extends Component {
    render(){
        return (
            <div className="tanbox">
                <div className="conf">
                    <i className="close-ico">X</i>
                    <h3 className="conf-title">删除文件</h3>
                    <div className="conf-content">
                        确定要删除文件吗？
                    </div>
                    <div className="conf-btn">
                        <a href="javascript:;">确定</a>
                        <a href="javascript:;">取消</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TanboxM