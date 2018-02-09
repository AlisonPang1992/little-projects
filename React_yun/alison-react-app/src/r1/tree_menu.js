import React,{Component} from 'react';
import TreeMLi from './tree_menuLi'

class TreeM extends Component {
    constructor(props){
        super(props)
        this.state=({
            list:this.renderdata()
        })
    }

    renderdata=()=>{
        var num='-1'
        var num0=0  
        let {data,treeMC}=this.props;
        this.getarr=()=>{
            let arr=[]
            for(var attr in data){
                arr.push({id:data[attr].id,open:true})
            }
            return arr
        }
        let arrz=this.getarr()
        
        this.rd=(num,d)=>{
            
            var list=[];
            var arr=this.getpid(num)           
            arr.forEach((e,i)=>{
                this.changei=(id,d)=>{
                    if(e.pid==id)return d
                    return true    
                }   
                let obj={
                    id:e.id,
                    rd:this.rd,
                    title:e.title,
                    num0:num0,
                    num:num,
                    data:data,
                    d:d,
                    arr:arrz,
                    treeMC:treeMC
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

    render(){
        let {data}=this.props
        console.log(this)
        let {list}=this.state

        return (
            <div className="tree-menu fix">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TreeM