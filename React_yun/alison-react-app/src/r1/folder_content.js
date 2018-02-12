import React,{Component} from 'react';
import FolderS from './folders'
import FolderNav from './folderNav'



class FolderM extends Component {
    constructor(props) {
        super(props)
        this.state={
            arr:[],
        }
    }
  
    arrChange=(id,bol)=>{    
        let {changeActive}=this.props
        let arr2=[]
        arr2.push(id)
        changeActive(arr2,bol)
    }
    
    arr=[]
    
    getF=()=>{
        let {dataid,data,changeActive}=this.props;
        let childrens=[];
        let parents=[];
        for(var attr in data){
            data[attr].pid==dataid?childrens.push(data[attr]):''
        }
        this.arr=[]
        this.getPa(dataid)
        parents=this.arr
        return {c:childrens,p:parents}
    }
    
    getPa=(id)=>{
        let {data}=this.props;
        let val=data[id]
        if(!data[id]){return}else{this.arr.unshift(val); this.getPa(val.pid)}
    }
    click=()=>{
       let {c,p}=this.getF()
       let checkAll=c.every(e=>e.onoff)  
       checkAll=!checkAll
       c.forEach((e)=>{
           this.arrChange(e.id,checkAll)
       })
    }

    render(){
        let {dataid,data,treeMC,changeActive}=this.props;
        let {c,p}=this.getF()        
        let flist=c.map((e,i)=>{
            return <FolderS {...{
                key:i,
                id:e.id,
                pid:e.pid,
                tittle:e.title, 
                treeMC:treeMC  ,
                arrChange :this.arrChange ,
                onoff:e.onoff  ,
                changeActive:changeActive,
                data:data
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
        let checkAll=c.every(e=>e.onoff)
        let cNameonoff=checkAll?'checkedAll checked':'checkedAll'
 
        return (
            <div className="folder-content">
                <div className="breadmenu">
                    <div className="checkall">
                        <i className={cNameonoff} onClick={this.click} ></i>
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