import React, { Component } from 'react';

import './button.css';

export default class Button extends Component {

    //click = () => { this.props.cb() }

    render() {
        const { cls, val } = this.props;
        return (
            <div className={`${cls}`}>
                <button onClick={this.click}>{val}</button>
            </div>
        )
    }
}