import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="topSection">
                <span id="custom-header">Essa Shomali</span>
                <span id="thisDate">{new Date().toLocaleTimeString()}</span><br/><br/>
                <hr className="line-text" data-content="<hr />" />
            </div>
        )
    }
};
export default Nav;