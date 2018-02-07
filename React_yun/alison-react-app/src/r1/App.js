import React,{Component} from 'react';
import './App.css';
import HeadM from './head'
import TreeM from './tree_menu'
import FolderM from './folder_content'
import ZhezhaoM from './zhezhao'
import TanboxM from './tanbox'
import FullTip from './fullTipBox'

class App extends Component {
    constructor(){
      super();
      this.state={
          data : {
            "0": {
                "id": 0,
                "pid": -1,
                "title": "微云",
                "type": "file"
            },
            "1": {
                "id": 1,
                "pid": 0,
                "title": "我的文档",
                "type": "file"
            },
            "2": {
                "id": 2,
                "pid": 0,
                "title": "我的音乐"
            },
            "3": {
                "id": 3,
                "pid": 2,
                "title": "周杰伦"
            },
            "4": {
                "id": 4,
                "pid": 3,
                "title": "发如雪"
            },
            "5": {
                "id": 5,
                "pid": 3,
                "title": "夜曲"
            },
            "6": {
                "id": 6,
                "pid": 1,
                "title": "js程序设计"
            },
            "7": {
                "id": 7,
                "pid": 3,
                "title": "稻香"
            },
            "8": {
                "id": 8,
                "pid": 2,
                "title": "王杰"
            },
            "9": {
                "id": 9,
                "pid": 1,
                "title": "js权威指南"
            },
            "10": {
                "id": 10,
                "pid": 2,
                "title": "张国荣"
            }
          },

        
      }
    }
    
    render(){ 
      var {data}=this.state
      console.log(data)


      return (
        <div className="box">
            <HeadM data={data}/>
            <section className="section">
                <TreeM data={data}/>
                <FolderM data={data} />                
            </section>

            <ZhezhaoM />
            <TanboxM />
            <FullTip />            
        </div>       
      )
    } 
 }

export default App