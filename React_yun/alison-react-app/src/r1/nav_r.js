import React,{Component} from 'react';

class NavR extends Component {
    render(){
        return (
            <div className="nav_right">
                <div className="show_mode"></div>
                <div className="sort_mode">
                    <i></i>
                    <div className="cover"></div>
                    <ul>
                        <li>按时间排列</li>
                        <li>按字母排列</li>
                        <li>显示缩略图</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavR