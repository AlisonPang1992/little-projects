import React,{Component} from 'react';
import './App.css';
import HeadM from './head'
import TreeM from './tree_menu'
import FolderM from './folder_content'
import ZhezhaoM from './zhezhao'
import TanboxM from './tanbox'
import FullTip from './fullTipBox'
import TreeMLi from './tree_menuLi'

class App extends Component {
    constructor(){
      super();
      this.state={
          data : {
            "0": {
                "id": 0,
                "pid": -1,
                "title": "微云",
                "type": "file",
                'onoff':false,
                treem:true
            },
            "1": {
                "id": 1,
                "pid": 0,
                "title": "我的文档",
                "type": "file",
                treem:true
            },
            "2": {
                "id": 2,
                "pid": 0,
                "title": "我的音乐",
                'onoff':false,
                treem:true
            },
            "3": {
                "id": 3,
                "pid": 2,
                "title": "周杰伦",
                'onoff':false,
                treem:true
            },
            "4": {
                "id": 4,
                "pid": 3,
                "title": "发如雪",
                'onoff':false,
                treem:true
            },
            "5": {
                "id": 5,
                "pid": 3,
                "title": "夜曲",
                'onoff':false,
                treem:true
            },
            "6": {
                "id": 6,
                "pid": 1,
                "title": "js程序设计",
                'onoff':false,
                treem:true
            },
            "7": {
                "id": 7,
                "pid": 3,
                "title": "稻香",
                'onoff':false,
                treem:true
            },
            "8": {
                "id": 8,
                "pid": 2,
                "title": "王杰",
                'onoff':false,
                treem:true
            },
            "9": {
                "id": 9,
                "pid": 1,
                "title": "js权威指南",
                'onoff':false,
                treem:true
            },
            "10": {
                "id": 10,
                "pid": 2,
                "title": "张国荣",
                'onoff':false,
                treem:true
            }
          },
          dataid: 0,
          allcheck:false,
          dele:false,
          remove:false,
          hPosition:-50,
          text:'11',
          choose:null,
          creat:false,
          idnum:100,
          time:false,
          movep:null,
          moveid:null
      }
    }
    treeMC=(id)=>{
        let {data}=this.state
        for(var attr in data){          
                data[attr].onoff=false
        }
        this.setState({
            dataid:id
        });
    }
    changeActive=(arr,bol)=>{
        let {data}=this.state
        for(var attr in data){
            if(arr.includes(attr*1)){
                data[attr].onoff=bol
            }
        }
        this.setState({
            data
        });
    }
    changetreem=(id)=>{
        let {data}=this.state
        data[id].treem=!data[id].treem
        this.setState({
            data
        });
    }

    removeY=(newid)=>{
        let {data}=this.state
        let arr=[]
        for(var attr in data){
            if(data[attr].onoff){
                arr.push(attr)
            }           
        }
        let arrparent=[]
        this.getparent=(newid)=>{
            if(data[newid].pid!=-1){
                arrparent.push(data[newid].pid)
                this.getparent(data[newid].pid)
            }
        }
        this.getparent(newid)
        console.log(arrparent)
        let nnnn=false
        arr.forEach((e)=>{
            console.log(arrparent,e)
            if(arrparent.includes(e*1)){
                this.changetext('非法的操作！')
                return nnnn=true
            }
            data[e].pid=newid
        })
        if(nnnn!=true){
            console.log(111)
            this.setState({
                data,
                remove:false,
            },this.changetext('移动成功！'));
        }
    }

    rename=(choose,txt)=>{
        let {data}=this.state
        data[choose].title=txt
        this.setState({
            data
        });
    }

    changeChoose=(choose,title)=>{
       let {data,creat}=this.state
       if(title){
           data[choose].title=title
           choose=null
           if(creat){this.changetext('新建文件夹成功！') }else{this.changetext('重命名成功！')}         
       }
        this.setState({
            choose,
            data,
            creat:false
        });
    }

    del=()=>{
        let {data}=this.state
        let arr=[]
        for(var attr in data){
            if(data[attr].onoff){
                arr.push(attr*1)
                delete data[attr]
            }           
        }
        for(var attr in data){
            if(arr.includes(data[attr].pid)){
                delete data[attr]
            }
        }
        this.setState({
            data
        });
    }

    changedelete=()=>{
        let {dele}=this.state
        dele=!dele
        this.setState({
            dele:dele
        });
    }

    creat=(dataid)=>{
        let {data,idnum}=this.state
        let newid=++idnum
        let arr=[]
        for(var attr in data){
            if(/^新建文件夹/.test(data[attr].title)&&data[attr].pid==dataid){
                arr.push(data[attr].title)
            }
        }
        let ti=this.findnum(0,arr)

        data[newid+'']={
            "id": newid,
            "pid": dataid,
            "title": ti,
            'onoff':false,
            'treem':true
        }

        this.setState({
            data,
            choose:newid,
            creat:true,
            idnum
        });   
    }

    findnum=(num,arr)=>{
        let str='新建文件夹'
        if(num) str+=num        
        if(arr.includes(str)){ return this.findnum(++num,arr)}else{return str}
    }

    changemovep=(movep)=>{
        this.setState({
            movep:this.state.data[movep].title,
            moveid:movep
        });
    }

    changetext=(tt)=>{
        let {text,hPosition}=this.state
        
        if(tt){
            text=tt 
            hPosition=0       
        }  else{
            hPosition=-50 
        }   
        this.setState({
            text,
            hPosition,
            time:true
        },function(){
            setTimeout(()=>{
                this.setState({
                    hPosition:-50,
                    time:false
                });
            },800)            
        });
    }
    renderdata=()=>{
        var num='-1'
        var num0=0  
        let {data,dataid}=this.state;
        let treeMC=this.treeMC
        
        this.getarr=()=>{
            let arr=[]
            for(var attr in data){
                arr.push({id:data[attr].id,open:data[attr].treem})
            }
            return arr
        }
        let arrz=this.getarr()
        
        this.rd=(num,d)=>{
            
            var list=[];
            var arr=this.getpid(num)  
            let {data,}=this.state      
            arr.forEach((e,i)=>{
                 
                this.changei=(id,d)=>{                   
                    if(e.pid!=-1&&!data[e.pid].treem)return false
                    return true    
                }  
                let obj={
                    id:e.id,
                    rd:this.rd,
                    title:e.title,
                    num0:num0,
                    num:num,
                    data:data,
                    d:this.changei(e.id),
                    arr:arrz,
                    treeMC:treeMC,
                    dataid:dataid,
                    treem:e.treem,
                    remove:this.state.remove,
                    changemovep:this.changemovep,
                    changetreem:this.changetreem
                }     
                      
                list.push(<TreeMLi key={num0++} {...obj}/>)
            })
            return list
        }
        this.getpid=(pid)=>{
            var arr=[]
            for(var attr in data){
                if(data[attr].pid==pid)arr.push(data[attr])               
            }
            return arr
        }     
        var list=this.rd(num)
        return list
    }
    changemove=()=>{
        this.setState({
            remove:!this.state.remove
        });
    }
       
    render(){ 
      var {data,dataid,choose,time,moveid}=this.state
      return (
        <div className="box">
            <HeadM 
                data={data} 
                dataid={dataid} 
                remove={this.remove} 
                changetext={this.changetext} 
                rename={this.rename} 
                changeChoose={this.changeChoose} 
                changedelete={this.changedelete} 
                creat={this.creat}  
                time={time}
                changemove={this.changemove}
            />
            <section className="section">
                <TreeM data={data} renderdata={this.renderdata} />
                <FolderM 
                    data={data} 
                    choose={choose} 
                    dataid={dataid} 
                    treeMC={this.treeMC} 
                    changeActive={this.changeActive}
                    changeChoose={this.changeChoose}
                    changetext={this.changetext}
                    rename={this.rename}
                    />                
            </section>

            <ZhezhaoM 
                changetext={this.changetext} 
                remove={this.state.remove}
                renderdata={this.renderdata}
                movep={this.state.movep}
                data={data}
                changemove={this.changemove}
                moveid={moveid}
                removeY={this.removeY}
            />
            <TanboxM 
                dele={this.state.dele} 
                del={this.del} 
                changedelete={this.changedelete} 
                changetext={this.changetext} 
            />
            <FullTip 
                hPosition={this.state.hPosition} 
                text={this.state.text} 
            />            
        </div>       
      )
    } 
 }

export default App