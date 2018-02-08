import React,{Component} from 'react';
import './App.css';
import List from './list'


class App extends Component {
    constructor(){
      super();
      this.state={
          left:[
              {txt:'小程序',click:false},
              {txt:'jQuery',click:false},
              {txt:'AJAX',click:false},
              {txt:'JS基础',click:false},
              {txt:'移动端实践',click:false}
          ],
          right:[
            {txt:'Node',click:false},
            {txt:'ECMA6',click:false},
            {txt:'面向对象-中',click:false},
            {txt:'React',click:false},
            {txt:'JS基础-1',click:false}
        ]
      }
    }
    changeC=(rOl,id)=>{
        this.setState({
            [rOl]:this.state[rOl].map((e,i)=>{
                if(i==id)e.click=!e.click
                return e
            }
            )
        });
    }

    clickl=()=>{
        let {left,right}=this.state;

        for(var i=0;i<right.length;i++){
            if(right[i].click){
                let v=right.splice(i,1)[0]
                v.click=false
                left.push(v);
                i--
            }
        }
        this.setState({
            right,
            left
        })
    }

    clickr=()=>{
        let {left,right}=this.state;

        for(var i=0;i<left.length;i++){
            if(left[i].click){
                let v=left.splice(i,1)[0]
                v.click=false
                right.push(v);
                i--
            }
        }
        this.setState({
            right,
            left
        })
    }

    
    render(){ 
        let {right,left}=this.state
        let listr=right.map((e,i)=>{
            return <List {...{
                key:i,
                id:i,
                txt:e.txt,
                click:e.click,
                rOl:'right',
                changeC:this.changeC
            }} />           
        })
        let listl=left.map((e,i)=>{
            return <List {...{
                key:i,
                id:i,
                txt:e.txt,
                click:e.click,
                rOl:'left',
                changeC:this.changeC
            }} />           
        })

      return (
        <div id="wrap">
        <div className="box clearFix">
            <ul className="left list">
                {listl}
            </ul>
            <ul className="change">
                <li className="move-to-l" onClick={this.clickl}><a href="#">向左</a></li>
                <li className="move-to-r" onClick={this.clickr}><a href="#">向右</a></li>
            </ul>
            <ul className="right list">
                {listr}               
            </ul>
        </div>
    </div>
      )
    } 
 }

export default App