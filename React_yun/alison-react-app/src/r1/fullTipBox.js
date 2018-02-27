import React,{Component} from 'react';

class FullTip extends Component {    
    render(){
        let {hPosition}=this.props
        return (
            <div className="full-tip-box" style={{top:hPosition+'px', transition:0.3+'s' }}>
                <span className="full-tip">
                  <span className="inner">
                    <i className="ico"></i>
                    <span className="tip-text">{this.props.text}</span>
                    </span>
                </span>
            </div>
        )
    }
}

export default FullTip