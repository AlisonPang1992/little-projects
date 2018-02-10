import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

  class Child extends React.Component {

    componentDidMount(){
        let {url,changenum} = this.props; 
        let num=url.match.url[url.match.url.length-1]
        console.log(num)
        if(isNaN(num*1)|| !(/^[/]Tab[123]$/.test(url.match.url)))num=1
        changenum(num-1)
    }

    render(){
        let {url} = this.props; 
        let num=url.match.url[url.match.url.length-1]
        if(isNaN(num*1)|| !(/^[/]Tab[123]$/.test(url.match.url)))num=1

        return (
            <div className='box'>
            这是第{num}条数据          
            </div>                    
        )       
    }
}


class Home extends React.Component {
    constructor(){
        super();
        this.state={
            arr:['/Tab1','/Tab2','/Tab3'],
            num:0
        }
    }
    changenum=(id)=>{
        console.log(id)
        let {num}=this.state
        if(id==num)return
        this.setState({
            num:id
        });       
    }

        
    render(){
        let {num,arr}=this.state
        let btns=arr.map((e,i)=>{
            let name=e.slice(1)
            return (
                <button {...{
                    key:i,
                    id:i
                }}  className={i==num?'active':''}>
                <Link onClick={this.changenum.bind(this,i)}
                to={{
                    pathname:`${e}`                   
                }}> {name}</Link>               
                </button>
            )
        })
        return (
            <div>
                <div >{btns}</div>
                <Route exact path='/'  render={(props)=>
                    <Child url={props} changenum={this.changenum} />
                } />
                <Route  path='/:id'  render={(props)=>
                    <Child url={props} changenum={this.changenum} />
                } />
            </div>
        )
    }    
}

export default Home