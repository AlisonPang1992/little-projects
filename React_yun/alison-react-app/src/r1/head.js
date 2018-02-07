import React,{Component} from 'react';
import LogoM from './logo'
import NavR from './nav_r'

class HeadM extends Component {

    render(){
        return (
            <header className="head">
                <LogoM />
                <div className="nav">
                    <ul className="nav_left">
                        <li><i></i>下载</li>
                        <li><i></i>分享</li>
                        <li className="remove"><i></i>移动到</li>
                        <li className="rename"><i></i>重命名</li>
                        <li className="del"><i></i>删除</li>
                        <li className="create"><i></i>新建文件夹</li>
                        <li><i></i></li>
                    </ul>
                    <NavR />
                </div>
            </header>
        )
    }
}

export default HeadM