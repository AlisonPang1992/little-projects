import React,{Component} from 'react';
import LogoM from './logo'
import NavR from './nav_r'

class HeadM extends Component {
    remove=()=>{
        let {remove}=this.props

    }
    rename=()=>{
        let {rename}=this.props
        
    }
    del=()=>{
        let {del}=this.props
        del()
        
    }
    creat=()=>{
        let {creat}=this.props
        
    }



    render(){
        return (
            <header className="head">
                <LogoM />
                <div className="nav">
                    <ul className="nav_left">
                        <li><i></i>下载</li>
                        <li><i></i>分享</li>
                        <li className="remove" onClick={this.remove}><i></i>移动到</li>
                        <li className="rename" onClick={this.rename} ><i></i>重命名</li>
                        <li className="del" onClick={this.del}><i></i>删除</li>
                        <li className="create" onClick={this.creat}><i></i>新建文件夹</li>
                        <li><i></i></li>
                    </ul>
                    <NavR />
                </div>
            </header>
        )
    }
}

export default HeadM