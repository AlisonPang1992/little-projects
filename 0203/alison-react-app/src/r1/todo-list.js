import React,{Component} from 'react';

class Todo_list extends Component {
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    change = (ev) => {
        let {val} = this.state;
        this.setState({
          val:ev.target.value
        })
    }
    click =() =>{
        let{click,index0}=this.props
        click(index0)
    }
    changebox =() =>{
        let{changebox,index0}=this.props
        changebox(index0)
    }
    dblclick =(ev) =>{
        let {txt}=this.props
        ev.target.style.display='none'
        ev.target.nextElementSibling.style.display='block'
        ev.target.nextElementSibling.focus()
        this.setState({
            val:txt
        })
    }

    keyup = (ev) => {
        if(ev.keyCode == 13){
            let {changeTxx,index0}=this.props
            let {val}=this.state
            console.log(ev.target)
            if(!val)return
            changeTxx(val,index0)            
            ev.target.style.display='none'
            ev.target.previousElementSibling.style.display='block'         
        }
    }
    render(){
        let {txt,checked,display}=this.props
        let className=checked?'completed':''
        console.log(display)
        return (            
            <li className={className} style={{display:display}}>
                <div className="view">
                    <input                     
                        className="toggle" 
                        type="checkbox" 
                        checked={checked}
                        onChange={this.changebox} 
                    />
                    <label onDoubleClick={this.dblclick}>{txt}</label>
                    <input      
                        className="edit"               
                        type="text" 
                        value={this.state.val}
                        onChange={this.change} 
                        onKeyUp={this.keyup}
                    />
                    <button className="destroy" onClick={this.click}></button>
                </div>
            </li>
        )
    }
}

export default Todo_list