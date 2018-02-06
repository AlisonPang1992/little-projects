import React,{Component} from 'react';
import './App.css';
import Todo_list from './todo-list'

class App extends Component {
    constructor(){
      super();
      this.state={
       arr:[
         {
           id:0,
           txt:'多多对对对',
           checked:false,
         }
       ],
       val:''
      }
    }

    change = (ev) => {
      let {arr,val} = this.state;
      this.setState({
        val:ev.target.value
      })
    }

    keyup = (ev) => {
      if(ev.keyCode == 13){
          let {arr,val} = this.state;
          if(!val)return
          let arr2 = arr.concat();
          arr2.unshift({
            id:arr2.length,
            txt:val,
            checked:false,
          });
          val=''

          this.setState({
              arr:arr2,
              val
          });
      }
    }

    changebox = (ev) => {
      let {arr} = this.state;  
      arr.forEach((e,i)=>{
        if(e.id==ev.target.getAttribute('index0')){
          e.checked=!e.checked
        }   
      })
      this.setState({
        arr,
      });
    }

    click = (ev) =>{
      let {arr} = this.state; 
      arr.forEach((e,i)=>{
        if(e.id==ev.target.getAttribute('index1')){
          console.log(ev.target.parentNode.parentNode.className)
          arr.splice(i,1)         
          arr.forEach((e,i)=>{
            e.id=arr.length-1-i
          })
        }   
      })
      
      this.setState({
        arr,
      });
    }
    changeb =(ev) =>{
      let {arr} = this.state;    
      arr.forEach((e,i)=>{
        e.checked=ev.target.checked
      })
      this.setState({
        arr
      });
    }

    render(){  
      let {arr}=this.state
      let checkb=arr.length?arr.every((e)=>e.checked):false
      let num=arr.length
      let li_list=this.state.arr.map((e,i)=>{
        if(e.checked)num--
          let obj={
            index0:e.id,
            checked:e.checked,
            changebox:this.changebox,
            click:this.click,
            txt:e.txt,
          }        
          return <Todo_list {...obj} key={i}/>
        })
        return (
            <section className="todoapp">
                <div>
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
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={checkb}
                            onChange={this.changeb} 
                        />                       
                        <ul className="todo-list">
                            {li_list}
                        </ul>
                    </section>
                    <footer className="footer">
                      <span className="todo-count">
                        <strong>{num}</strong>
                        <span>条未选中</span>
                      </span>
                    </footer>
                </div>
            </section>
        )
    }
}

export default App