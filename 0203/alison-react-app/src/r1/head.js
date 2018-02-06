import React,{Component} from 'react';

class HeadM extends Component {
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

    keyup = (ev) => {
        if(ev.keyCode == 13){
            let {val}=this.state
            if(!val)return
            let {addData}=this.props
            let data={
                id:+new Date,
                txt:val,
                checked:false,
                display:'block'
            }         
            addData(data)
            this.setState({
                val:''
            })
        }
    }

    render(){
        return (
            <header className="header" >        
                <h1>todos</h1>
                <input 
                    
                    className="new-todo"
                    placeholder="请输入内容" 
                    value={this.state.val}
                    onChange={this.change} 
                    onKeyUp={this.keyup}
                />
            </header>
        )
    }
}

export default HeadM