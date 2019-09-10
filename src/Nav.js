import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class Nav extends Component {
    render() {
        const thisDate = new Date().toLocaleTimeString();

        return (
            <div className="topSection">
                <span id="custom-header">Essa Shomali&nbsp;</span>
                <span class="construction">
                    Developed in
                    HTML/CSS, JavaScript,
                    React JSX, Bootstrap
                </span>
                <span id="aware">just so you're aware</span>
                <span id="thisDate">{thisDate}</span>

                <br/>
                <hr className="line-text" data-content="<hr />" />
            </div>
        )
    }
};
export default Nav;