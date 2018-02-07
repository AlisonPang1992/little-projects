import React,{Component} from 'react';

class FolderM extends Component {
    render(){
        return (
            <div className="folder-content">
                <div className="breadmenu">
                    <div className="checkall">
                        <i className="checkedAll"></i>
                    </div>
                    <div className="bread-nav">
                        {/* <!-- <a href="javascript:;">微云</a> --> */}
                        
                            
                    </div>
                </div>
                <div className="f-empty"></div>
                <div className="yj-list">
                    <span className="dl">下载</span>
                    <span className="mv">移动到</span>
                    <span className="de">删除</span>
                    <span className="rn">重命名</span>
                    <span className="sh">分享</span>
                </div>
                <div className="folders">
                    <div className="file-item">
                    <img src={require("./img/folder-b.png")} alt="" />
                    <span className="folder-name">JS基础课程</span>
                    <input type="text" className="editor"/>
                    <i className="checked"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default FolderM