import React,{Component} from 'react';

class FullTip extends Component {
    render(){
        return (
            <div className="full-tip-box">
                <span className="full-tip">
                  <span className="inner">
                    <i className="ico"></i>
                    <span className="tip-text">新建文件夹成功</span>
                    </span>
                </span>
            </div>
        )
    }
}

export default FullTip