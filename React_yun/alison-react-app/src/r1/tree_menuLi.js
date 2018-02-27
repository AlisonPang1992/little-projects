import React,{Component} from 'react';

class TreeMLi extends Component {
    constructor(props){
        super(props)
        this.state=({
            arr:this.props.arr,          
        })
    }
    click=(ev)=>{
        let {id,changetreem}=this.props
        changetreem(id) 
        ev.stopPropagation();
    }
    clickli=(ev)=>{     
        ev.stopPropagation();
           
        let {id,treeMC,dataid,remove,changemovep,data}=this.props

        if(!remove){
            if(id!=dataid)treeMC(id)
        }else{
            changemovep(id)
        }
        
    }
    componentWillReceiveProps(nextProps){
        let {arr}=this.props
        this.setState({
            arr
        });     
    }
 
    render(){
        let {id,rd,title,num,data,num0,d,treem}=this.props
        let {arr}=this.state
        let arrid
        arr.forEach(e => {
            if(e.id == id)  {

                if(rd(id).length==0)e.open=false
                arrid=e
                ;return}         
        });
        let name='tree-title tree-ico '+ (treem?'open':'close')
        return (
            <ul style={{marginLeft:num0==1?0:20}} >
                <li style={{display:d?'block':'none'}} onClick={this.clickli}>
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