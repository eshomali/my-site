import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const thisDate = new Date().toLocaleTimeString();

        return (
            <div className="topSection">
                <span id="custom-header">Essa Shomali&nbsp;</span>
                <span id="thisDate">{thisDate}</span>

                <br/><br/>
                <hr className="line-text" data-content="<hr />" />
            </div>
        )
    }
};
export default Nav;