import React,{Component} from 'react';

class TreeM extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state=({
            list:this.renderdata()
        })
    }
    click=()=>{

    }

    renderdata=()=>{
        var num='-1'
        var num0=0  
        let {data}=this.props;

        this.rd=(num)=>{
            var list=[];
            var arr=this.getpid(num)           
            arr.forEach((e,i)=>{               
                list.push(<ul key={num0++} style={{marginLeft:num0==1?0:20}}><li ><div className="tree-title tree-ico open"><span>{this.rd(e.id).length==0?'':<i onClick={this.click} id={e.id}></i>}{e.title}</span></div>{this.rd(e.id)}</li></ul>)
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