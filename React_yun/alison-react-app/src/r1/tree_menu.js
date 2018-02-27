import React,{Component} from 'react';

class TreeM extends Component {

    render(){

        return (
            <div className="tree-menu fix">
                <ul>
                    {this.props.renderdata()}
                </ul>
            </div>
        )
    }
}

export default TreeM