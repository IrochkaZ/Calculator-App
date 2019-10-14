import React, { Component } from 'react';

import './button.css';

export default class Button extends Component {
    constructor(){
        super();
        this.click =  () => { 
            const {val, onClick} = this.props;
        }
    }


    render() {
        const { cls, val, onClick } = this.props;
        return (
            <div className={`${cls}`}>
                <button onClick={onClick.bind(this)}>{val}</button>
            </div>
        )
    }
}
