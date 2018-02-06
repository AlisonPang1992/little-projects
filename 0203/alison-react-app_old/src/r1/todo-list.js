import React,{Component} from 'react';

class Todo_list extends Component {
    click =(ev) =>{
        let{click}=this.props
        click(ev)
    }
    changebox =(ev) =>{
        let{changebox}=this.props
        changebox(ev)
    }

    render(){
        let {txt,index0,checked}=this.props
        let className=checked?'completed':''
        return (
            <li className={className}>
                <div className="view">
                    <input                     
                        index0={index0}
                        className="toggle" 
                        type="checkbox" 
                        checked={checked}
                        onChange={this.changebox} 
                    />
                    <label>{txt}</label>
                    <button className="destroy" onClick={this.click} index1={index0}></button>
                </div>
            </li>
        )
    }
}

export default Todo_list