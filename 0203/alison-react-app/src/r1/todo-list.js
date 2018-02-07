import React,{Component} from 'react';

class Todo_list extends Component {
    constructor(){
        super();
        this.state={
            val:'',
            db:false
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
        let {db}=this.state
        db=true       
        this.setState({
            val:txt,
            db
        },()=>{
            this.refs.putV.focus()
        })
        
    }

    blur = (ev) => {
        let {changeTxx,index0,txt}=this.props
        let {val,db}=this.state
        console.log(ev.target)
        if(!val)val=txt
        changeTxx(val,index0)
         db=false;
         this.setState({
            db
        })
    }
    keyup = (ev) => {
        if(ev.keyCode == 13){
            let {changeTxx,index0,txt}=this.props
            let {val,db}=this.state
            console.log(ev.target)
            if(!val)val=txt
            changeTxx(val,index0) 
            db=false;
            this.setState({
            db
        })    
        }
    }
    render(){
        let {txt,checked,display}=this.props
        let {db}=this.state
        let className=checked?'completed':''
        if(db)className+=' editing'
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
                    <button className="destroy" onClick={this.click}></button>
                </div>
                <input      
                        className="edit"               
                        type="text" 
                        value={this.state.val}
                        onChange={this.change} 
                        onKeyUp={this.keyup}
                        onBlur={this.blur}
                        ref="putV"
                />
            </li>
        )
    }
}

export default Todo_list