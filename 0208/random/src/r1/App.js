import React,{Component} from 'react';
import './App.css';
import List from './list'
import Nav from './nav'


class App extends Component {
    constructor(){
      super();
      this.state={
        data : [
            {
                url:"./img/Rdm-pic1.png",
                text:"1-粉红"
            },
            {
                url:"./img/Rdm-pic2.png",
                text:"2-粉黄"
            },
            {
                url:"./img/Rdm-pic3.png",
                text:"3-黄绿"
            },
            {
                url:"./img/Rdm-pic4.png",
                text:"4-嫩绿"
            },
            {
                url:"./img/Rdm-pic5.png",
                text:"5-湖蓝"
            },
            {
                url:"./img/Rdm-pic6.png",
                text:"6-蓝紫"
            },
            {
                url:"./img/Rdm-pic7.png",
                text:"7-粉紫"
            },
            {
                url:"./img/Rdm-pic8.png",
                text:"8-紫红"
            }
        ],
        spanl:[
            {
                c:[
                    {   c:'从小到大',
                        check:true
                    },
                    {
                        c:'从大到小',
                        check:false
                    }
                ],
                onoff:true
            },
            {
                c:'打乱顺序',
                onoff:false
            },
            {
                c:'打乱内容',
                onoff:false
            }
        ]

      }
    }
    changeSpan=(id)=>{
        let {spanl,data}=this.state
        spanl.forEach((e,i)=>{
            if(i==id){
                e.onoff=true
                if(id==0){
                    e.c.forEach((el,i)=>{
                        el.check=!el.check
                        if(el.check){
                            data=i?(data.sort((a,b)=>{return b.text[0]-a.text[0]})):(data.sort((a,b)=>{return a.text[0]-b.text[0]}))
                        }
                    })
                }
            }else{
                e.onoff=false;
                data=(id==1)?(data.sort((a,b)=>{return Math.random()-0.5})):this.randoml(data)
            }
        })

        this.setState({
            spanl,
            data
        });
    }
    randoml=(data)=>{
        let arr=[];
        arr=data.map(e=>{
            return e.text[0]
        })
        console.log(arr)
        data=data.sort((a,b)=>{return Math.random()-0.5})
        data.forEach((e,i)=>{
            e.text=arr[i]+e.text.slice(1)
            console.log(e.text[0])
        })
        return data

    }
           
    
    render(){ 
        let list=this.state.data.map((e,i)=>{
           return <List {...{
               key:i,
               id:i,
               url:e.url,
               text:e.text
           }}/>
        })
        let nav=this.state.spanl.map((e,i)=>{
            return <Nav {...{
                key:i,
                id:i,
                ele:e,
                changeSpan:this.changeSpan
            }} />
        })
      return (
        <section id="wrap">
            <header id="head">
                <img src={require('./img/logo.png')}/>
                <div id="btn" className="clearfix">
                    {nav}
                </div>
            </header>
            <article id="cons">
                <ul className="list clearfix" id="ul">
                    {list}
                </ul>
            </article>
        </section>

      )
    } 
 }

export default App