import React,{Component} from 'react';
import LogoM from './logo'
import NavR from './nav_r'

class HeadM extends Component {
    remove=()=>{
        let {changemove,data,changetext}=this.props
        let choose=''
        let num=0
        for(var attr in data){          
            if(data[attr].onoff){
                num++ 
                choose=attr
            }         
        }
        if(num==0){
            changetext('请选择一个文件')
        }else{
            changemove()
        }   

    }
    rename=()=>{
        let {rename,data,changetext,changeChoose}=this.props
        let num=0
        let choose=''
        for(var attr in data){          
            if(data[attr].onoff){
                num++ 
                choose=attr
            }         
        }
        console.log(num,choose)
        if(num>1){
            changetext('只能选择一个文件')
        }else if(num==0){
            changetext('请选择一个文件')
        }else{
            changeChoose(choose)
        }
     
    }
    del=()=>{
        let {changedelete,data,changetext}=this.props
        let num=0
        let choose=''
        for(var attr in data){          
            if(data[attr].onoff){
                num++ 
                choose=attr
            }         
        }
        if(num==0){
            changetext('请选择一个文件')
        }else{
            changedelete()
        }         
    }
    creat=()=>{
        let {creat,dataid}=this.props
        creat(dataid)
            
    }

    render(){
        return (
            <header className="head">
                <LogoM />
                <div className="nav">
                    <ul className="nav_left">
                        <li><i></i>下载</li>
                        <li><i></i>分享</li>
                        <li className="remove" onClick={this.props.time?()=>{}:this.remove}><i></i>移动到</li>
                        <li className="rename" onClick={this.props.time?()=>{}:this.rename} ><i></i>重命名</li>
                        <li className="del" onClick={this.props.time?()=>{}:this.del}><i></i>删除</li>
                        <li className="create" onClick={this.props.time?()=>{}:this.creat}><i></i>新建文件夹</li>
                        <li><i></i></li>
                    </ul>
                    <NavR />
                </div>
            </header>
        )
    }
}

export default HeadM