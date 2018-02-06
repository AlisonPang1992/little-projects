import React,{Component} from 'react';

class FootM extends Component {
    constructor(){
        super();
        this.state={
            arra:[
                {
                    id:'alla',
                    val:'全部', 
                    s:'selected'                  
                },
                {
                    id:'Activea',
                    val:'已选中',   
                    s:''                
                },
                {
                    id:'Completeda',
                    val:'未选中',  
                    s:''                 
                }
            ]
        }
    }
    click =()=>{
        let {click,arr}=this.props
        let arr2=arr.concat();
        arr2.forEach(e=>{
            if(e.checked)click(e.id)        
        })
    }
    clicka=(ev)=>{
        let {click,arr,showli}=this.props
        let {arra}=this.state
        let arr2=arra.concat();
        arr2.forEach(e=>{
           e.s=(e.id==ev.target.id?'selected':'')                  
        })
        showli(ev.target.id)
        this.setState({
            arra:arr2
        })
    }

    render(){
        let {num}=this.props
        let {arra}=this.state
        let list=arra.map((e,i)=>{
            return (
                <li key={i}>
                    <a onClick={this.clicka} id={e.id} className={e.s} >{e.val}</a>
                </li>
            )
        })
        return (
            <footer className="footer">
                <span className="todo-count">
                <strong>{num}</strong>
                <span>条未选中</span>
                </span>
                <ul className="filters">
                    {list}
                </ul>
                <span className="clear-completed">
                <span onClick={this.click}>清除已选中</span>
                </span>
            </footer>
        )
    }
}

export default FootM