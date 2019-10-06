import React, { Component } from 'react';

import './panel.css';

export default class Panel extends Component {

    //click = () => { this.props.cb() }

    render() {
        const result = this.props.data.join('');
        return (
            < div className="panel" >
                <p className="str-result">{result}</p>
            </div>
        )
    }
}