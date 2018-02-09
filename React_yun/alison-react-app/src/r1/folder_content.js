import React,{Component} from 'react';
import FolderS from './folders'
import FolderNav from './folderNav'



class FolderM extends Component {
    arr=[]
    getF=()=>{
        let {dataid,data}=this.props;
        let childrens=[];
        let parents=[];
        for(var attr in data){
            data[attr].pid==dataid?childrens.push(data[attr]):''
        }
        this.arr=[]
        this.getPa(dataid)
        parents=this.arr
        console.log(childrens,parents)
        return {c:childrens,p:parents}
    }
    
    getPa=(id)=>{
        let {data}=this.props;
        let val=data[id]
        if(!data[id]){return}else{this.arr.unshift(val); this.getPa(val.pid)}
    }

    render(){
        let {dataid,data,treeMC}=this.props;
        let {c,p}=this.getF()
        let flist=c.map((e,i)=>{
            return <FolderS {...{
                key:i,
                id:e.id,
                pid:e.pid,
                tittle:e.title, 
                treeMC:treeMC          
            }} />
        })
        let navlist=p.map((e,i)=>{
            return <FolderNav {...{
                key:i,
                id:e.id,
                pid:e.pid,
                tittle:e.title,
                onoff:(i==(p.length-1))?true:false  ,
                treeMC:treeMC         
            }} />
        })
 
        return (
            <div className="folder-content">
                <div className="breadmenu">
                    <div className="checkall">
                        <i className="checkedAll"></i>
                    </div>
                    <div className="bread-nav">
                        {navlist}
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
                    {flist}
                </div>
            </div>
        )
    }
}

export default FolderM