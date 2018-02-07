import React,{Component} from 'react';

class LogoM extends Component {


    render(){
        return (
                <div className="top">
                    <h1 className="title">
                <a href="" title="妙味云盘"></a>
              </h1>
                    <div className="right">
                        <div className="user">
                            <span><img src={require("./img/user-ico.jpg")} alt="" /></span>
                            <i></i>
                        </div>
                        <div className="gap"></div>
                        <div className="set"></div>
                    </div>
                </div>
        )
    }
}

export default LogoM