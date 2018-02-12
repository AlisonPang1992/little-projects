import React,{Component} from 'react';

class TreeMLi extends Component {
    constructor(props){
        super(props)
        this.state=({
            arr:this.props.arr,
            
        })
    }
    click=(ev)=>{
        let {arr}=this.state
        let arr2=arr.concat();
        let {id}=this.props
        console.log(arr2)
        arr2.forEach((e,i)=>{
            if(e.id==id)e.open=!e.open
        }) 
        this.setState({
            arr:arr2
        })
        ev.stopPropagation();
    }
    clickli=(ev)=>{        
        let {id,rd,title,num,data,num0,d,treeMC,dataid}=this.props
        console.log(id,dataid)
        if(id!=dataid)treeMC(id)
        ev.stopPropagation();
    }
 
    render(){
        let {id,rd,title,num,data,num0,d}=this.props
        let {arr}=this.state
        let arrid
        arr.forEach(e => {
            if(e.id == id)  {arrid=e
                if(rd(id).length==0)e.open=false
                ;return}         
        });
        let name='tree-title tree-ico '+ (arrid.open?'open':'close')
        return (
            <ul style={{marginLeft:num0==1?0:20}} >
                <li style={{display:d}} onClick={this.clickli}>
                    <div className={name}>
                        <span>{rd(id).length==0?'':<i onClick={this.click} id={id}></i>}
                            {title}
                        </span>
                    </div>
                    {rd(id,arrid.open?'display':'none')}
                 </li>
            </ul>
        )
    }
}

export default TreeMLi