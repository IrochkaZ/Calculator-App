import React, { Component } from 'react';

import './panel.css';

export default class Panel extends Component {

    render() {
        const { result, progress } = this.props; 
        return (
            < div className="panel" >
                <p className="str-progress">{progress}</p>
                <p className="str-result">{result}</p>
            </div>
        )
    }
}